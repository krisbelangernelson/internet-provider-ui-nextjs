'use client'

import { ROUTES } from '@/constants'
import { useIsVisible } from '@/hooks/useIsVisible'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

interface FeaturesItemProps {
  imgSrc: StaticImageData
  heading: string
  subHeading: string
  textOrder: number
  imageOrder: number
}

export default function FeaturesItem(props: FeaturesItemProps) {
  const { imgSrc, heading, subHeading, textOrder, imageOrder } = props
  const router = useRouter()
  const ref1 = useRef() as React.MutableRefObject<HTMLDivElement>
  const isVisible1 = useIsVisible(ref1)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:gap-4">
      <div className={`sm:w-[32rem] md:order-${imageOrder} transition-opacity ease-in duration-700 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`} ref={ref1}>
        <Image
          loading="lazy"
          src={imgSrc}
          className="rounded-md shadow-lg"
          alt="Feature image"
        />
      </div>
      <div className={`sm:w-[32rem] text-start p-3 lg:p-5 md:order-${textOrder}`}>
        <h2>{heading}</h2>
        <p>{subHeading}</p>
        <button
          className="btn-primary mt-3"
          onClick={() => {
            router.push(ROUTES.internet)
          }}
        >
          Start your journey
        </button>
      </div>
    </div>
  )
}
