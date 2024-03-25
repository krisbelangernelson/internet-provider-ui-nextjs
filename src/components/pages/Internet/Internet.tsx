'use client'

import { useState, useMemo } from 'react'
import ServiceSelection from '@/components/molecules/ServiceSelection/ServiceSelection'
import SpeedSelection from '@/components/molecules/SpeedSelection/SpeedSelection'
// import { useQuery } from '@tanstack/react-query'
// import internetService from '@/services/internetService'
import { INTERNET_PAGE } from '@/constants'
import Loading from '@/components/atoms/SpinnerIcon/SpinnerIcon'
import HelpMeChoose from '@/components/molecules/HelpMeChoose/HelpMeChoose'
import { InternetService } from '@/types/InternetService'
// import Error from '@/components/atoms/Error/Error'

interface InternetProps {
  data: InternetService[]
}

export default function Internet(props: InternetProps) {
  const { data } = props
  const [serviceSelected, setServiceSelected] = useState<string>('')

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ['internet-services'],
  //   queryFn: internetService.findAll,
  //   enabled: true,
  //   retry: false,
  // })

  const sortedOffers = useMemo(() => {
    if (data !== undefined) {
      let sorted = data.sort((offerA, offerB) => {
        const a = offerA.bandwidth_down
        const b = offerB.bandwidth_down
        return Number(a) - Number(b)
      })
      if (serviceSelected !== '') {
        sorted = sorted.filter(offer => offer.category === serviceSelected)
      }
      return sorted
    }
  }, [data, serviceSelected])

  const disabledStyle = useMemo(() => {
    if (serviceSelected === '') return 'disabled-look'
    return ''
  }, [serviceSelected])

  // if ((isLoading || sortedOffers === undefined) && !isError) {
  //   return <Loading />
  // }
  if (sortedOffers === undefined) {
    return <Loading />
  }

  // if (isError || sortedOffers === undefined) {
  //   // return <Error title="API Error" error={error} caller="Internet" />
  //   throw new Error('API Error')
  // }

  return (
    <div className="container md:w-[48rem] my-4 mx-auto  px-6">
      <div className="flex flex-row mb-2 align-items-center">
        <div className="flex-col">{INTERNET_PAGE.featuredOffer}</div>
      </div>
      <div className="flex flex-row mb-2 align-items-center">
        <div className="flex-col">
          <span className="text-3xl">{INTERNET_PAGE.chooseService}</span>
        </div>
      </div>
      <div className="my-6">
        <ServiceSelection serviceSelected={serviceSelected} setServiceSelected={setServiceSelected} />
      </div>
      <div className={`grid md:grid-cols-2 mb-2 ${disabledStyle}`}>
        <div className="flex flex-col">
          <span className="text-3xl">{INTERNET_PAGE.chooseSpeed}</span>
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
