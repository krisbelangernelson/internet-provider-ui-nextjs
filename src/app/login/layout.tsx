'use client'

import { ReactNode } from 'react'
import { MAIN_HEADERS } from '@/constants'

interface Props {
  children: ReactNode
}

export default function LoginLayout({ children }: Props) {
  return (
    <div className="container mx-auto mt-6">
      <div className="text-3xl text-center">{MAIN_HEADERS.customerLogin}</div>
      {children}
    </div>
  )
}
