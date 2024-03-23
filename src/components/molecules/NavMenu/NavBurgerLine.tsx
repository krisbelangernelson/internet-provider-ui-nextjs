'use client'

interface NavBurgerLineProps {
  burgerLine: string
  invert?: boolean
  toggleMenu: boolean
}

export default function NavBurgerLine(props: NavBurgerLineProps) {
  const { burgerLine, toggleMenu, invert } = props
  console.log('invert', invert)

  const inverted = () => invert === true ? '-' : ''

  return (
    <div
      className={`${burgerLine} ${toggleMenu
        ? `${inverted()}rotate-45 ${inverted()}translate-y-3 opacity-100`
        : 'opacity-100'}`}
    />
  )
}
