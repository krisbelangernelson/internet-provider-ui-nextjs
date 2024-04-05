import { cookies } from 'next/headers'

export async function GET() {
  console.log('GET auto-login')
  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')?.value ?? ''
  let data
  let status = 200

  try {
    const res = await fetch(`${process.env.CUSTOMER_API}/auth/auto-login-check`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    console.log('res', res)
    console.log('res.ok', res.ok)

    if (!res.ok) {
      console.log('fetch not ok')
      await res.text().then((error) => {
        console.log('error', error)
        data = error
        status = res.status
      })
    } else {
      if (res.status === 204) data = {}
      else data = await res.json()
    }
  } catch (error) {
    console.error('error2', error)
    data = { message: (error as Error).message }
    status = 500
  }
  console.log('data', data)

  return Response.json({ ...data }, { status })
}
