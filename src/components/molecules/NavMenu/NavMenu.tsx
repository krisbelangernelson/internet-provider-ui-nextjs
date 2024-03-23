'use client'
import MyAccount from '@/components/molecules/MyAccount/MyAccount'
import { useState } from 'react'
import NavLinks from './NavLinks'
import NavHome from './NavHome'

export default function NavMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const burgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 primary-bg'

  return (
    <nav className="w-100 px-8 md:px-auto">
      <div className="h-16 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap text-lg">
        <div className="hidden lg:flex primary font-bold">
          <NavHome />
        </div>
        <div className="w-full md:w-auto hidden lg:flex">
          <div className="flex font-semibold justify-between">
            <NavLinks />
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <div className="flex items-center justify-center">
            <button
              className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group primary-border"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <div
                className={`${burgerLine} ${toggleMenu
                  ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'}`}
              />
              <div
                className={`${burgerLine} ${toggleMenu ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`}
              />
              <div
                className={`${burgerLine} ${toggleMenu
                  ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'}`}
              />
            </button>
          </div>
        </div>
        <div className="">
          <MyAccount />
        </div>
      </div>
      <div className={`fixed z-40 w-full section-dark overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? 'h-0' : 'h-full'}`}>
        <div className="px-8 pt-6">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <NavHome />
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}
