import FamilyImg from '@public/assets/images/family.jpg'
import GamingImg from '@public/assets/images/gaming.jpg'
import WorkImg from '@public/assets/images/student.jpg'
import FeaturesItem from './FeaturesItem'
import Features from './Features'

interface FeaturesSpeedProps {
  dark: boolean
}

export default function FeaturesSpeed(props: FeaturesSpeedProps) {
  const { dark } = props

  return (
    <Features dark={dark}>
      <FeaturesItem
        imgSrc={FamilyImg}
        imageOrder={2}
        textOrder={1}
        heading="Fun for the whole family"
        subHeading="Keep everyone in your family connected with our unlimited data plans. Stream movies, watch educational videos, play online games, and stay connected with loved ones without worrying about exceeding data limits."
      />
      <FeaturesItem
        imgSrc={GamingImg}
        imageOrder={1}
        textOrder={2}
        heading="Blaze your way to wins"
        subHeading="Experience low latency and ultra-fast speeds for a smooth and uninterrupted gaming experience. Dominate the competition with lag-free gameplay and reliable connections, allowing you to react quickly and perform at your best."
      />
      <FeaturesItem
        imgSrc={WorkImg}
        imageOrder={2}
        textOrder={1}
        heading="Optimize your productivity"
        subHeading="Stay productive and connected with colleagues no matter where your work takes you. Our reliable internet service allows you to participate in video conferencing calls, access cloud-based applications, and collaborate seamlessly with your team, all with a stable and secure connection."
      />
    </Features>
  )
}
