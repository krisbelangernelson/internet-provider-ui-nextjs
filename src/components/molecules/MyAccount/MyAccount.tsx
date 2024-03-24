import Link from 'next/link'
import { ROUTES } from '@/constants'
import Person from '@public/assets/icons/person-circle.svg'

export default function MyAccount() {
  return (
    <div className="hover-color">
      <Link href={ROUTES.customerArea}>
        <Person className="text-[4rem] primary" height="32px" width="32px" alt="My Account" />
      </Link>
    </div>
  )
}
