import { NAV_MENU } from '@/constants'
import Link from 'next/link'

export default function NavLinks() {
  return (
    <>
      {NAV_MENU.map((nav, index) => {
        if (index !== 0) {
          return (
            <Link key={nav.label} href={nav.link} className="md:px-4 md:py-2">{nav.label}</Link>
          )
        }
        return null
      })}
    </>
  )
}
