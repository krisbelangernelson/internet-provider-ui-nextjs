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
      console.log('error', error)
      data = error
      status = res.status
    })
  } else {
    data = await res.json()
  }

  return Response.json({ ...data }, { status })
}
