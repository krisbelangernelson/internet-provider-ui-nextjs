import { FORMS, ROUTES } from '@/constants'
import Link from 'next/link'

export default function AlreadyCustomer() {
  return (
    <div className="flex justify-center">
      Already a customer?
      <span className="ms-1">
        <Link
          href={`${ROUTES.login}?from=${ROUTES.orderPayment}`}
        >
          {FORMS.buttons.login.label}
        </Link>
        {' '}
        instead.
      </span>

    </div>
  )
}
