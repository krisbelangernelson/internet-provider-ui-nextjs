'use client'
import { Dispatch, SetStateAction } from 'react'

interface NavMobileProps {
  toggleMenu: boolean
  setToggleMenu: Dispatch<SetStateAction<boolean>>
}

export default function NavBurger(props: NavMobileProps) {
  const { setToggleMenu, toggleMenu } = props

  const burgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 primary-bg'

  return (
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
  )
}
