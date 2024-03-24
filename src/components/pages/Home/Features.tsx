import SpeedImg from '@public/assets/images/speed.jpg'
import WifiImg from '@public/assets/images/connect-wifi.jpg'
import SupportImg from '@public/assets/images/support.jpg'
import FeaturesItem from './FeaturesItem'
import { type ReactNode } from 'react'

interface FeaturesProps {
  children: ReactNode
  dark?: boolean
}

export default function Features(props: FeaturesProps) {
  const { children, dark } = props

  return (
    <section className={`section-${dark ? 'dark' : 'light'} features py-8 px-4 pt-3 lg:pt-5 pb-4 lg:pb-12 flex justify-center`}>
      <div className="container grid gap-3 lg:gap-5 justify-center">
        {children}
      </div>
    </section>
  )
}
