'use client'

import { Elements } from '@stripe/react-stripe-js'
import PaymentStatus from '@/components/molecules/PaymentStatus/PaymentStatus'
import useStripeConfig from '@/hooks/useStripeConfig'

// interface CompletedProps {
//   stripePromise: Stripe | null
// }

// TODO: put stripePromise is Order context to reuse in Order components
// set alertMsg from there?
export default function Completed() {
  const { stripePromise, alertMsg } = useStripeConfig()

  if (stripePromise != null) {
    return (
      <div className="grid justify-center my-6">
        <div className="flex flex-row">
          <div className="flex-col text-center">
            <Elements stripe={stripePromise}>
              <PaymentStatus />
            </Elements>
          </div>
        </div>
      </div>
    )
  }
}
