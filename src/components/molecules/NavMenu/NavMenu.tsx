import MyAccount from '@/components/molecules/MyAccount/MyAccount'
import { useState } from 'react'
import NavLinks from './NavLinks'
import NavHome from './NavHome'

import NavMobile from './NavMobile'

export default function NavRoot() {
  return (
    <nav className="w-100 px-8 md:px-auto flex justify-between">
      <NavMobile />
      <div className="order-2 h-16 mx-auto md:px-4 container flex items-center lg:justify-between justify-end flex-wrap md:flex-nowrap text-lg">
        <div className="hidden lg:flex primary font-bold md:order-1">
          <NavHome />
        </div>
        <div className="w-full md:w-auto hidden lg:flex md:order-2">
          <div className="flex font-semibold justify-between">
            <NavLinks />
          </div>
        </div>
        <div className="order-3 md:order-3">
          <MyAccount />
        </div>
      </div>

    </nav>
  )
}
