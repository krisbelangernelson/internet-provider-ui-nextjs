import { type PaymentIntent } from '@stripe/stripe-js'
import type { StripePaymentStatus } from '@/types/order'

// TODO: lang/constants
export function getPaymentStatus(paymentIntent: PaymentIntent | undefined): StripePaymentStatus {
  if (paymentIntent != null) {
    switch (paymentIntent.status) {
      case 'succeeded':
        return {
          title: 'Thank you!',
          message: `Your order for $${paymentIntent.amount} has been processed successfully.`,
          isError: false,
        }

      case 'processing':
        return {
          title: 'Payment processing.',
          message: 'We\'ll update you when payment is received.',
          isError: false,
        }

      case 'requires_payment_method':
        return {
          title: 'Payment failed.',
          message: 'Please try another payment method.',
          isError: true,
        }

      default:
        return {
          title: 'Error.',
          message: 'Something went wrong.',
          isError: true,
        }
    }
  }
  return { title: null, message: null, isError: false }
}
