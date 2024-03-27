'use client'

import { ReactNode } from 'react'
import { MAIN_HEADERS } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

interface Props {
  children: ReactNode
}

export default function OrderLayout({ children }: Props) {
  const {
    state: {
      serviceSelection: { serviceType, offerName },
    },
  } = useCustomerContext()

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
