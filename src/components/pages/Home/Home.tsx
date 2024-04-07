import HeroSection from './HeroSection'
import WhyChooseUs from './WhyChooseUs'
import FeaturesSummaryUnleash from './FeaturesSummaryUnleash'
import FeaturesUnleash from './FeaturesUnleash'
import FeaturesSummarySpeed from './FeaturesSummarySpeed'
import FeaturesSpeed from './FeaturesSpeed'
import Testimonials from './Testimonials'
import GetConnected from './GetConnected'

export default function Home() {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <HeroSection />
      <WhyChooseUs />
      <FeaturesSummaryUnleash />
      <FeaturesUnleash />
      <FeaturesSummarySpeed dark={true} />
      <FeaturesSpeed dark={true} />
      <Testimonials />
      <GetConnected />
    </div>
  )
}
