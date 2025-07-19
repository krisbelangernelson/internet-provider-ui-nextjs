import { useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import { ROUTES } from '@/constants'
import { getPaymentStatus } from '@/utils/payments'
import type { StripePaymentStatus } from '@/types/order'
import { useNotificationContext } from '@/providers/notification/NotificationContext'
import { useRouter, useSearchParams } from 'next/navigation'
import api from '@/utils/api'

interface UsePaymentStatus {
  isProcessing: boolean
  paymentStatus: StripePaymentStatus
}

const usePaymentStatus = (): UsePaymentStatus => {
  const stripe = useStripe()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [paymentStatus, setPaymentStatus] = useState<StripePaymentStatus>({
    title: null,
    message: null,
    isError: false,
  })
  const [isProcessing, setIsProcessing] = useState(true)
  const { showErrorNotification } = useNotificationContext()

  useEffect(() => {
    if (stripe == null) {
      return
    }

    const clientSecret = searchParams.get('payment_intent_client_secret')

    // Improper access to this endpoint, redirect them
    if (clientSecret == null) {
      router.push('/')
      return
    }

    void stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      const status = getPaymentStatus(paymentIntent)
      setPaymentStatus(status)
      setIsProcessing(false)

      if (!status.isError) {
        const data = {
          offerId: searchParams.get('offer_id') ?? '',
          line1: searchParams.get('line1') ?? '',
          line2: searchParams.get('line2') ?? '',
          city: searchParams.get('city') ?? '',
          state: searchParams.get('state') ?? '',
          postal_code: searchParams.get('postal_code') ?? '',
          country: searchParams.get('country') ?? '',
          customerId: searchParams.get('customer_id') ?? '',
        }

        void api.createOrder(data).catch((error: Error) => {
          showErrorNotification({
            error: 'Error in payment process or account creation. Please contact support.',
          })
        })
      }

      // Clear query string, prevents a reorder
      // @ts-expect-error shallow missing
      router.replace(ROUTES.orderCompleted, { shallow: true })
    })
  }, [stripe])

  return {
    isProcessing,
    paymentStatus,
  }
}

export default usePaymentStatus
