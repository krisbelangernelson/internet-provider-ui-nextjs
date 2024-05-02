import Link from 'next/link'
import { ROUTES } from '@/constants'
import Person from '@/components/atoms/PersonIcon/PersonIcon'

export default function MyAccount() {
  return (
    <div className="hover-color">
      <Link href={ROUTES.customerArea}>
        <Person className="text-[4rem] primary" />
      </Link>
    </div>
  )
}
