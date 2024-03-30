import { CustomerExists, CustomerExistsResponse, CustomerLoginBody, CustomerRegister, CustomerResponse, RegisterResponse } from '@/types/customer'
import { handleFetchError } from '../handleError'

export const loginCustomer = async (body: CustomerLoginBody): Promise<CustomerResponse | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_API}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    return res.text().then((error) => {
      handleFetchError(error, res.statusText, 'customerExists')
      return undefined
    })
  }

  return res.json()
}

export const customerExists = async (body: CustomerExists): Promise<CustomerExistsResponse | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_API}/customer/exists`, {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    return res.text().then((error) => {
      handleFetchError(error, res.statusText, 'customerExists')
      return undefined
    })
  }

  return res.json()
}

export const registerCustomer = async (body: CustomerRegister): Promise<RegisterResponse | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_API}/auth/register`, {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    return res.text().then((error) => {
      handleFetchError(error, res.statusText, 'registerCustomer')
      return undefined
    })
  }

  return res.json()
}
