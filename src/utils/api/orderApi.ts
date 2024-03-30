import type { StripeConfig, StripeIntent, CreateOrder } from '@/types/order'
import { handleFetchError } from '../handleError'

export const stripeConfig = async (): Promise<StripeConfig | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ORDER_API}/stripe/config`)

  if (!res.ok) {
    return res.text().then((error) => {
      console.error('Failed to GET stripeConfig')
      handleFetchError(error, res.statusText, 'stripePaymenIntent')
      return undefined
    })
  }

  return res.json()
}

export const stripePaymenIntent = async (body: { plan: string }): Promise<StripeIntent | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ORDER_API}/stripe/create-payment-intent`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    return res.text().then((error) => {
      handleFetchError(error, res.statusText, 'stripePaymenIntent')
      return undefined
    })
  }

  return res.json()
}

export const createOrder = async (body: CreateOrder): Promise<{ code: string } | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ORDER_API}/order`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    return res.text().then((error) => {
      handleFetchError(error, res.statusText, 'createOrder')
      return undefined
    })
  }

  return res.json()
}
