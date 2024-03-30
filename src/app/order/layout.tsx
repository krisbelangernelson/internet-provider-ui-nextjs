'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { MAIN_HEADERS, ROUTES } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import { useSearchParams } from 'next/navigation'
import useRedirect from '@/hooks/useRedirect'

interface Props {
  children: ReactNode
}

export default function OrderLayout({ children }: Props) {
  const {
    state: {
      serviceSelection: { serviceType: serviceTypeState, offerName: offerNameState },
    },
  } = useCustomerContext()
  const searchParams = useSearchParams()
  const validOrder = useRef(false)
  const verified = useRef(false)
  const [offerName, setOfferName] = useState(offerNameState)
  const [serviceType, setServiceType] = useState(serviceTypeState)

  // redirect if no plan data
  useRedirect(verified.current && !validOrder.current, ROUTES.internet)

  useEffect(() => {
    const offer = searchParams.get('offer_name') ?? offerName
    const service = searchParams.get('service_type') ?? serviceType
    validOrder.current = offer !== '' && service !== ''
    verified.current = true
    setOfferName(offer)
    setServiceType(service)
  }, [])

  const title = (
    <>
      {MAIN_HEADERS.ordering}
      {' '}
      <span className="primary">
        {serviceType?.toUpperCase()}
        -
        {offerName?.toUpperCase()}
      </span>
    </>
  )

  return (
    <div className="container mx-auto mt-6">
      <div className="text-3xl text-center">{title}</div>
      {children}
    </div>
  )
}
