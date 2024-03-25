'use client'

import { type Dispatch, type SetStateAction } from 'react'
import ButtonToggle from '@/components/atoms/ButtonToggle/ButtonToggle'
import { SERVICES_AVAILABLE } from '@/constants'

interface ServiceSelectionProps {
  serviceSelected: string
  setServiceSelected: Dispatch<SetStateAction<string>>
}

export default function ServiceSelection(props: ServiceSelectionProps) {
  const { serviceSelected, setServiceSelected } = props
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {SERVICES_AVAILABLE.map(service => (
        <ButtonToggle
          key={service.name}
          active={serviceSelected === service.name}
          onClick={setServiceSelected}
          label={service.label}
          name={service.name}
          full
        />
      ))}
    </div>
  )
}
