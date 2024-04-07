import { type ReactNode } from 'react'

interface FeaturesProps {
  children: ReactNode
  dark?: boolean
}

export default function Features(props: FeaturesProps) {
  const { children, dark } = props

  return (
    <section className={`section-${dark ? 'dark' : 'light'} features px-4 pt-3 lg:pt-[3rem] pb-4 lg:pb-[5rem] flex justify-center`}>
      <div className="container grid gap-5 lg:gap-[5rem] justify-center">
        {children}
      </div>
    </section>
  )
}
