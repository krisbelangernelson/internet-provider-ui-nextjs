import React, { useState } from 'react'
import NextImage, { StaticImageData } from 'next/image'

interface ImageTransitionProps {
  src: string | StaticImageData
  alt: string
  className: string
  loading: 'eager' | 'lazy' | undefined
  position: number
}

const ImageTransition = (props: ImageTransitionProps) => {
  const [isReady, setIsReady] = useState(false)

  return (
    <div className={`transition-opacity ease-in delay-300 duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <NextImage
        {...props}
        src={props.src}
        onLoad={() => { setIsReady(true) }}
        className={`${props.className} transition-transform ease-in delay-300 duration-500 ${isReady ? '' : `${props.position === 1 ? '-' : ''}translate-x-full`}`}
      />
    </div>
  )
}

export default ImageTransition
