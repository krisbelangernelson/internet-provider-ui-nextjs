import { useState, useEffect, useMemo } from 'react'
import { type Stripe, loadStripe } from '@stripe/stripe-js'
import { APP_ERRORS } from '@/constants'
import api from '@/utils/api'
import logger from '@/utils/logger'

interface UseStripeConfig {
  stripePromise: Stripe | null
  alertMsg: string | null
}

const useStripeConfig = (): UseStripeConfig => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null)
  const [isError, setIsError] = useState(false)

  const stripeLoader = async (publishableKey: string): Promise<void> => {
    setStripePromise(await loadStripe(publishableKey))
  }

  useEffect(() => {
    api.stripeConfig().then((data) => {
      if (data !== undefined) {
        const { publishableKey } = data
        void stripeLoader(publishableKey).catch((error) => {
          logger.error(error)
          setIsError(true)
        })
      }
    }).catch((error) => {
      logger.error(error)
      setIsError(true)
    })
  }, [])

  const alertMsg = useMemo(() => {
    if (isError) {
      return APP_ERRORS.paymentOfflineAlert
    }
    return null
  }, [isError])

  return { stripePromise, alertMsg }
}

export default useStripeConfig
