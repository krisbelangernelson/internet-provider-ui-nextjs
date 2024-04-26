import { PaymentIntent } from '@stripe/stripe-js'
import { getPaymentStatus } from '../payments'

describe('getPaymentStatus', () => {
  it('should return success message', () => {
    const paymentIntent = {
      status: 'succeeded' as PaymentIntent.Status,
      amount: 100,
    }
    expect(getPaymentStatus(paymentIntent)).toEqual({
      title: 'Thank you!',
      message: `Your order for $${paymentIntent.amount} has been processed successfully.`,
      isError: false,
    })
  })

  it('should return processing message', () => {
    const paymentIntent = {
      status: 'processing' as PaymentIntent.Status,
      amount: 100,
    }
    expect(getPaymentStatus(paymentIntent)).toEqual({
      title: 'Payment processing.',
      message: 'We\'ll update you when payment is received.',
      isError: false,
    })
  })

  it('should return error message for requires_payment_method', () => {
    const paymentIntent = {
      status: 'requires_payment_method' as PaymentIntent.Status,
      amount: 100,
    }
    expect(getPaymentStatus(paymentIntent)).toEqual({
      title: 'Payment failed.',
      message: 'Please try another payment method.',
      isError: true,
    })
  })

  it('should return error message for failed', () => {
    const paymentIntent = {
      status: 'failed' as PaymentIntent.Status,
      amount: 100,
    }
    expect(getPaymentStatus(paymentIntent)).toEqual({
      title: 'Error.',
      message: 'Something went wrong.',
      isError: true,
    })
  })

  it('should return empty object for undefined', () => {
    expect(getPaymentStatus(undefined)).toEqual({ title: null, message: null, isError: false })
  })
})
