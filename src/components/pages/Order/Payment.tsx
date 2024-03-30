'use client'

import { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '@/components/molecules/CheckoutForm/CheckoutForm'
import { MAIN_HEADERS, ROUTES } from '@/constants'
import useRedirect from '@/hooks/useRedirect'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import { useNotificationContext } from '@/providers/notification/NotificationContext'
import useStripeConfig from '@/hooks/useStripeConfig'
import api from '@/utils/api'

export default function Payment() {
  const [clientSecret, setClientSecret] = useState('')
  const [total, setTotal] = useState(0)
  const {
    state: {
      customerInfo: customer,
      serviceSelection: { serviceType, offerName },
    },
  } = useCustomerContext()
  const { showErrorNotification } = useNotificationContext()
  const { stripePromise, alertMsg } = useStripeConfig()

  useRedirect(customer.firstName === '', ROUTES.internet)

  useEffect(() => {
    if (customer.firstName !== '') {
      void api.stripePaymenIntent({
        plan: `${serviceType}-${offerName}`,
      })
        .then((response) => {
          if (response !== undefined) {
            const { clientSecret, amount } = response
            setClientSecret(clientSecret)
            setTotal(amount)
          }
        })
        .catch((error: Error) => {
          showErrorNotification({ error: error.message })
        })
    }
  }, [customer.firstName])

  return (
    <div className="grid justify-center my-6">
      <div className="text-center text-4xl mb-2">{MAIN_HEADERS.payment}</div>
      <div className="flex-col text-center">
        {clientSecret !== '' && stripePromise != null && (
          <>
            <div className="text-3xl mb-2 primary">
              Total: $
              {total}
            </div>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm customerId={customer?.id} />
            </Elements>
          </>
        )}
      </div>
    </div>
  )
}
