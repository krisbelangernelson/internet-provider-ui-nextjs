import { CustomerLoginBody, CustomerResponse } from '@/types/customer'

export const findAllServices = async () => {
  const res = await fetch(`${process.env.INTERNET_API}/internet-services`)

  if (!res.ok) {
    console.error('Failed to GET findAll for internetApi')
    throw new Error('API error')
  }

  return res.json()
}

export const loginCustomer = async (body: CustomerLoginBody): Promise<CustomerResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_API}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    return res.text().then((text) => {
      try {
        const errObj = JSON.parse(text)
        throw new Error(errObj.message)
      } catch (error) {
        console.error(res.statusText)
        console.error(error)
        throw new Error('API error')
      }
    })
  }

  return res.json()
}
