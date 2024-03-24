'use client'
import { Dispatch, SetStateAction } from 'react'
import NavBurgerLine from './NavBurgerLine'

interface NavBurgerProps {
  toggleMenu: boolean
  setToggleMenu: Dispatch<SetStateAction<boolean>>
}

export default function NavBurger(props: NavBurgerProps) {
  const { setToggleMenu, toggleMenu } = props

  const burgerLine = 'h-1 w-6 my-1 rounded-full transition ease transform duration-300 bg-primary'

  return (
    <div className="flex items-center justify-center">
      <button
        className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <NavBurgerLine burgerLine={burgerLine} toggleMenu={toggleMenu} />
        <div
          className={`${burgerLine} ${toggleMenu ? 'opacity-0' : 'opacity-100'}`}
        />
        <NavBurgerLine burgerLine={burgerLine} invert={true} toggleMenu={toggleMenu} />
      </button>
    </div>
  )
}
