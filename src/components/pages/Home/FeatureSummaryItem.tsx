import Image, { StaticImageData } from 'next/image'

interface FeaturesSummaryItemProps {
  imgSrc: StaticImageData
  heading: string
  subHeading: string
}

export default function FeaturesSummaryItem(props: FeaturesSummaryItemProps) {
  const { imgSrc, heading, subHeading } = props
  return (
    <div className="">
      <div className="grid grid-cols-12">

        <Image src={imgSrc} loading="lazy" alt="Feature image" className="col-span-3 text-end mt-2 justify-self-end me-4" />

        <div className="col-span-9 text-start">
          <h4>{heading}</h4>
          <p>{subHeading}</p>
        </div>
      </div>
    </div>
  )
}
