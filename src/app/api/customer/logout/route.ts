import { cookies } from 'next/headers'

export async function GET() {
  cookies().delete('accessToken')

  return Response.json({ data: {} })
}
