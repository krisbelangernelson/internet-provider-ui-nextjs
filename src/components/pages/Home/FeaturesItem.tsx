'use client'

import { ROUTES } from '@/constants'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:gap-4">
      <div className={`sm:w-[32rem] lg:order-${imageOrder}`}>
        <Image
          loading="lazy"
          src={imgSrc}
          className="rounded-md shadow-lg"
          alt="Feature image"
        />
      </div>
      <div className={`sm:w-[32rem] text-start p-3 lg:p-5 lg:order-${textOrder}`}>
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
