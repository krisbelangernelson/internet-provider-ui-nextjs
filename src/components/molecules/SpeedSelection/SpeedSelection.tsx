'use client'

import SpeedCard from '@/components/molecules/SpeedCard/SpeedCard'
import { type InternetService } from '@/types/InternetService'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

interface SpeedSelectionProps {
  serviceSelected: string
  speedOffers: InternetService[]
}

export default function SpeedSelection(props: SpeedSelectionProps) {
  const { serviceSelected, speedOffers } = props
  const router = useRouter()
  const { setServiceSelection } = useCustomerContext()

  const handleSpeedSelection = (offerId: number, offerName: string): void => {
    if (serviceSelected !== '' && offerId !== null) {
      setServiceSelection({ serviceType: serviceSelected, offerId, offerName })
      router.push(ROUTES.order)
    }
  }

  if (serviceSelected === '') return <></>

  return (
    <div className="flex flex-col mx-auto gap-8">
      {speedOffers.map(offer => (
        <SpeedCard
          key={offer.id}
          offer={offer}
          handleSpeedSelection={handleSpeedSelection}
        />
      ))}
    </div>
  )
}
