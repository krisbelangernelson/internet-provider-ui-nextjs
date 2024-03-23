'use client'

interface NavBurgerLineProps {
  burgerLine: string
  toggleMenu: boolean
}

export default function NavBurgerLine(props: NavBurgerLineProps) {
  const { burgerLine, toggleMenu } = props

  return (
    <div
      className={`${burgerLine} ${toggleMenu
        ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
        : 'opacity-50 group-hover:opacity-100'}`}
    />
  )
}
