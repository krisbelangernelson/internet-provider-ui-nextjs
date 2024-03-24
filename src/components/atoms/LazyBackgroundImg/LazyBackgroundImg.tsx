'use client'

import Image, { StaticImageData } from 'next/image'
import { useState, type ReactNode } from 'react'

interface Props {
  img: string
  children?: ReactNode
  style?: React.CSSProperties
  isDarkened?: boolean
}

export default function LazyBackgroundImg(props: Props) {
  const { img, children, style, isDarkened } = props
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <div
      style={{
        backgroundImage: `${isDarkened === true ? 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),' : ''}url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        transition: 'filter 0.5s',
        ...style,
      }}
    >

      {children}
    </div>
  )
}
