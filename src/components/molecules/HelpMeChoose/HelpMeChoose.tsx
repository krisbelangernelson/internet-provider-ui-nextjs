'use client'

import { useState } from 'react'
import SpeedDetailsModal from '@/components/molecules/SpeedDetailsModal/SpeedDetailsModal'
import { INTERNET_PAGE } from '@/constants'
import type { InternetService } from '@/types/InternetService'

interface HelpMeChooseProps {
  sortedOffers: InternetService[] | undefined
  disabledStyle?: string
}

export default function HelpMeChoose(props: HelpMeChooseProps) {
  const { sortedOffers, disabledStyle } = props
  const [modalShow, setModalShow] = useState(false)

  if (!sortedOffers) return null

  return (
    <>
      <a
        href="#"
        className={`fw-bold ${disabledStyle !== undefined && disabledStyle}`}
        onClick={() => {
          setModalShow(true)
        }}
      >
        {INTERNET_PAGE.helpChoose}
      </a>

      <SpeedDetailsModal
        show={modalShow}
        onHide={() => {
          setModalShow(false)
        }}
        offers={sortedOffers}
      />
    </>
  )
}
