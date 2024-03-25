'use client'

import { type InternetService } from '@/types/InternetService'
import Card from '@/components/atoms/Card/Card'

interface SpeedCardProps {
  offer: InternetService
  handleSpeedSelection: (offerId: number, offerName: string) => void
}

export default function SpeedCard(props: SpeedCardProps) {
  const { offer, handleSpeedSelection } = props

  return (
    <>
      <Card
        header={offer.label}
        footer={offer.description}
        onClick={() => {
          handleSpeedSelection(offer.id, offer.name)
        }}
      >
        <h2>
          {offer.bandwidth_down.toLocaleString('en-US')}
          {' '}
          <span className="text-2xl">Mbps</span>
        </h2>
        <h5 className="mt-2">
          {offer.bandwidth_up.toLocaleString('en-US')}
          {' '}
          Mbps Upload
        </h5>
        <p>
          <span className="text-2xl">
            $
            {offer.price}
          </span>
          /month
        </p>
      </Card>
    </>
  )
}
