'use client'

import { useState, useMemo } from 'react'
import ServiceSelection from '@/components/molecules/ServiceSelection/ServiceSelection'
import SpeedSelection from '@/components/molecules/SpeedSelection/SpeedSelection'
import { INTERNET_PAGE } from '@/constants'
import HelpMeChoose from '@/components/molecules/HelpMeChoose/HelpMeChoose'
import { InternetService } from '@/types/InternetService'
import Loading from '@/components/atoms/Loading/Loading'

interface InternetProps {
  data: InternetService[]
}

export default function Internet(props: InternetProps) {
  const { data } = props
  const [serviceSelected, setServiceSelected] = useState<string>('')

  const sortedOffers = useMemo(() => {
    if (data !== undefined) {
      if (serviceSelected !== '') {
        let sorted = data.sort((offerA, offerB) => {
          const a = Number(offerA.bandwidth_down)
          const b = Number(offerB.bandwidth_down)
          return a - b
        })
        sorted = sorted.filter(offer => offer.category === serviceSelected)
        return sorted
      }
      return []
    }
  }, [data, serviceSelected])

  const disabledStyle = useMemo(() => {
    if (serviceSelected === '') return 'disabled-look'
    return ''
  }, [serviceSelected])

  if (sortedOffers === undefined) {
    return <Loading />
  }

  return (
    <div className="container md:w-[48rem] my-4 mx-auto  px-6">
      <div className="flex flex-row mb-2 align-items-center">
        <div className="flex-col">{INTERNET_PAGE.featuredOffer}</div>
      </div>
      <div className="flex flex-row mb-2 align-items-center">
        <div className="flex-col">
          <span className="text-2xl md:text-3xl">{INTERNET_PAGE.chooseService}</span>
        </div>
      </div>
      <div className="my-6">
        <ServiceSelection serviceSelected={serviceSelected} setServiceSelected={setServiceSelected} />
      </div>
      <div className={`grid md:grid-cols-2 mb-2 ${disabledStyle}`}>
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl">{INTERNET_PAGE.chooseSpeed}</span>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="flex justify-content-end fs-6 pe-1">
            <HelpMeChoose sortedOffers={sortedOffers} disabledStyle={disabledStyle} />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <SpeedSelection serviceSelected={serviceSelected} speedOffers={[...sortedOffers].reverse()} />
      </div>
    </div>
  )
}
