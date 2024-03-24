import FamilyImg from '@public/assets/icons/family.png'
import GamingImg from '@public/assets/icons/controller.png'
import WorkImg from '@public/assets/icons/working.png'
import FeaturesSummaryItem from './FeatureSummaryItem'
import FeaturesSummary from './FeaturesSummary'

interface FeaturesSummarySpeedProps {
  dark: boolean
}

export default function FeaturesSummarySpeed(props: FeaturesSummarySpeedProps) {
  const { dark } = props

  return (
    <FeaturesSummary dark={dark}>
      <h1 className="primary mb-4">Unleash the Potential</h1>
      <div className="item-container grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-8 gap-4 lg:gap-4">
        <FeaturesSummaryItem
          imgSrc={FamilyImg}
          heading="Perfect for Families"
          subHeading="Connect everyone with unlimited data plans for uninterrupted entertainment."
        />
        <FeaturesSummaryItem
          imgSrc={GamingImg}
          heading="Unleash the Gamer Within"
          subHeading="Experience low latency and smooth gameplay for ultimate victory."
        />
        <FeaturesSummaryItem
          imgSrc={WorkImg}
          heading="Work From Anywhere"
          subHeading="Stay productive with a reliable connection for video conferencing and remote work."
        />
      </div>
    </FeaturesSummary>
  )
}
