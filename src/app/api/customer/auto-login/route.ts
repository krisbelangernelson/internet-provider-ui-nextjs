import logger from '@/utils/logger'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')?.value ?? ''
  let data
  let status = 200

  const res = await fetch(`${process.env.CUSTOMER_API}/auth/auto-login-check`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    await res.text().then((error) => {
      logger.error(error)
      data = error
      status = res.status
    })
  } else {
    // API must return status 204 or non empty object or .json()=Unexpected end of JSON input
    if (res.status === 204) data = {}
    else data = await res.json()
  }

  return Response.json({ ...data }, { status })
}
