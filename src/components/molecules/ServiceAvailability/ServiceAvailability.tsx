'use client'

import { useState, type ChangeEvent } from 'react'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import { ROUTES, MAIN_HEADERS, SERVICE_AVAILABILITY, FORMS } from '@/constants'
import { useRouter } from 'next/navigation'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import useRedirect from '@/hooks/useRedirect'
import TextInput from '@/components/atoms/TextInput/TextInput'
import Alert from '@/components/atoms/Alert/Alert'

// TODO: make an autocomplete with real addresses
// https://apidocs.geoapify.com/playground
// https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/#autocomplete

// TODO: verify if address exists as order
export default function ServiceAvailability() {
  const router = useRouter()
  const [isSearching, setIsSearching] = useState(false)
  const [isFound, setIsFound] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [address, setAddress] = useState('')
  const {
    state: {
      serviceSelection: { serviceType },
    },
  } = useCustomerContext()

  useRedirect(serviceType === '', ROUTES.internet)

  const onClickSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setIsFound(true)
      setHasSearched(true)
    }, 1000)
  }

  const onClickNext = () => {
    router.push(ROUTES.orderCustomer)
  }

  const handleAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setAddress(value)
  }

  return (
    <div className="grid md:grid-cols-12">
      <h2 className="text-4xl my-4 md:col-start-5 md:col-span-4 text-center">{MAIN_HEADERS.serviceAvailability}</h2>
      <div className="md:col-start-5 md:col-span-4 justify-self-center">
        <div className="justify-start px-3">
          <div className="mb-2 justify-self-start">{SERVICE_AVAILABILITY.verifyLabel}</div>
          <div className="gap-3 justify-self-start">
            <div className="mb-5 flex flex-row gap-4">
              <div className="">
                <TextInput
                  label="Address"
                  name="address"
                  type="address"
                  placeholder="Enter address"
                  onChange={handleAddress}
                  value={address}
                />
              </div>
              <div className="self-end mb-[0.2rem]">
                {!isFound
                  ? (
                    <ButtonSpinner
                      onClick={onClickSearch}
                      isDisabled={isSearching || address === ''}
                      isLoading={isSearching}
                      buttonLabel={FORMS.buttons.search.label}
                      loadingLabel={FORMS.buttons.search.loadingLabel}
                    />
                  )
                  : (
                    <button type="submit" className="btn-primary" onClick={onClickNext}>
                      {FORMS.buttons.next.label}
                    </button>
                  )}
              </div>
            </div>

          </div>
          <div>
            {hasSearched && (
              <Alert variant="success">{SERVICE_AVAILABILITY.qualifiedLabel}</Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
