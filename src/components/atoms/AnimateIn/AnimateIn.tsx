'use client'

import { useElementOnScreen } from '@/hooks/useElementOnScreen'
import { PropsWithChildren, useRef } from 'react'
import './AnimateIn.css'

export default function AnimateIn({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)
  useElementOnScreen(ref, true, '0px')

  return (
    <div
      ref={ref}
      className="transition-box bottom"
    >
      {children}
    </div>
  )
}
