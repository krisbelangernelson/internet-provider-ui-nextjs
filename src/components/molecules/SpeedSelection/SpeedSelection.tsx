'use client'

import { useEffect, useState } from 'react'
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
  const [speedSelected, setSpeedSelected] = useState<number | null>(null)

  const handleSpeedSelection = (offerId: number, offerName: string): void => {
    setSpeedSelected(offerId)
    if (serviceSelected !== '' && offerId !== null) {
      setServiceSelection({ serviceType: serviceSelected, offerId, offerName })
      router.push(ROUTES.order)
    }
  }

  useEffect(() => {
    setSpeedSelected(null)
  }, [serviceSelected])

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
