import SpeedImg from '@public/assets/icons/page-speed.png'
import WifiImg from '@public/assets/icons/wifi.png'
import SupportImg from '@public/assets/icons/support.png'
import FeaturesSummaryItem from './FeatureSummaryItem'

export default function FeaturesSummary() {
  return (
    <section className="section-light features-summary">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-col text-center my-4">
          <h1 className="primary mb-4">Unleash the Potential</h1>
          <div className="item-container grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-8 gap-4 lg:gap-4">
            <FeaturesSummaryItem
              imgSrc={SpeedImg}
              heading="Ultra-Fast Speeds"
              subHeading="Stream 4K content, download in seconds, and game without lag."
            />
            <FeaturesSummaryItem
              imgSrc={WifiImg}
              heading="Unbreakable Wi-Fi"
              subHeading="Enjoy seamless whole-home coverage with our advanced routers."
            />
            <FeaturesSummaryItem
              imgSrc={SupportImg}
              heading="24/7 Reliable Support"
              subHeading="Our dedicated team is always here to assist you."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
