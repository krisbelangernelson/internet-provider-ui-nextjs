import { cookies } from 'next/headers'
import { CustomerLoginBody } from '@/types/customer'

export async function POST(request: Request) {
  const body: CustomerLoginBody = await request.json()
  let data
  let status = 200

  const res = await fetch(`${process.env.CUSTOMER_API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    await res.text().then((error) => {
      console.log('error', error)
      data = error
      status = res.status
    })
  } else {
    data = await res.json()
    cookies().set('accessToken', data.accessToken, {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    })
  }

  return Response.json({ ...data }, { status })
}
