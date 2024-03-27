import { FORMS, ROUTES } from '@/constants'
import Link from 'next/link'

export default function AlreadyCustomer() {
  return (
    <div>
      Already a customer?
      {' '}
      <Link
        href={`${ROUTES.login}?from=${ROUTES.orderPayment}`}
      >
        {FORMS.buttons.login.label}
      </Link>
      {' '}
      instead
    </div>
  )
}
