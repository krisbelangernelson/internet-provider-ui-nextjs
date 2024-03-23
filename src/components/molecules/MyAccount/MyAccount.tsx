import variables from '@/styles/_variables.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/constants'
import Person from '@/assets/icons/person-circle.svg'

export default function MyAccount() {
  return (
    <div className="hover-color">
      <Link href={ROUTES.customerArea}>
        <Person style={{ fontSize: '4rem', color: variables.primary }} height="32px" width="32px" alt="My Account" />
      </Link>
    </div>
  )
}
