import { ROUTES } from '@/constants'
import { redirect } from 'next/navigation'

export default function Order() {
  redirect(ROUTES.internet)
}
