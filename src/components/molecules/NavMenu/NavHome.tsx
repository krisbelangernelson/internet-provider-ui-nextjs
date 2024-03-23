import { NAV_MENU } from '@/constants'
import Link from 'next/link'

export default function NavHome() {
  return (
    <>
      <Link href={NAV_MENU[0].link} className="md:px-4 md:py-2">{NAV_MENU[0].label}</Link>
    </>
  )
}
