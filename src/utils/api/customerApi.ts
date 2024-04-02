import { CustomerArea, CustomerExists, CustomerExistsResponse, CustomerLoginBody, CustomerRegister, CustomerResponse, RegisterResponse } from '@/types/customer'
import { handleFetchError } from '../handleError'
import logger from '../logger'

export const loginCustomer = async (body: CustomerLoginBody): Promise<CustomerResponse | undefined> => {
  const res = await fetch('/api/customer/login', {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    return res.text().then((error) => {
      handleFetchError(error, res.statusText, 'loginCustomer')
      return undefined
    })
  }

  return res.json()
}

export const customerExists = async (body: CustomerExists): Promise<CustomerExistsResponse | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_API}/customer/exists`, {
    method: 'POST',
    body: JSON.stringify(body),
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

export const autoLoginCheck = async (): Promise<CustomerResponse | undefined> => {
  const res = await fetch('/api/customer/auto-login')

  if (!res.ok) {
    return res.text().then((error) => {
      logger.warn('Failed to GET /auth/auto-login-check')
      handleFetchError(error, res.statusText, 'autoLoginCheck')
      return undefined
    })
  }

  return res.json()
}

export const customerArea = async (token: string): Promise<CustomerArea | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_API}/customer/area`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    return res.text().then((error) => {
      logger.warn('Failed to GET /customer/area')
      handleFetchError(error, res.statusText, 'customerArea')
      return undefined
    })
  }

  return res.json()
}

export const logout = async (): Promise<object | undefined> => {
  const res = await fetch('/api/customer/logout', {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    return res.text().then((error) => {
      logger.warn('Failed to GET /auth/logout')
      logger.error(error)
      return {}
    })
  }

  return res.json()
}
