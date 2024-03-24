'use client'
import NavLinks from './NavLinks'
import NavHome from './NavHome'
import NavBurger from './NavBurger'
import { useState } from 'react'

export default function NavMobile() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="lg:hidden flex flex-row justify-between order-1">
      <NavBurger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <div className={`fixed z-40 w-full mt-[3rem] section-dark overflow-hidden flex-col gap-12 origin-top duration-500 ${!toggleMenu ? 'h-0' : 'h-full'}`}>
        <div className="px-8 pt-6">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <NavHome />
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
