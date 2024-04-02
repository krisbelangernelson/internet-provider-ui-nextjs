'use client'

import Loading from '@/components/atoms/Loading/Loading'
import LoginNoAccess from '@/components/atoms/LoginNoAccess/LoginNoAccess'
import Logout from '@/components/atoms/Logout/Logout'
import useIsLoggedIn from '@/hooks/useIsLoggedIn'
import RegisterCustomerArea from '@/components/atoms/RegisterCustomerArea/RegisterCustomerArea'
import api from '@/utils/api'
import { useEffect, useState } from 'react'
import { type CustomerArea } from '@/types/customer'
import Alert from '@/components/atoms/Alert/Alert'
import { useCustomerContext } from '@/providers/customer/CustomerContext'

// TODO: consts
export default function CustomerArea() {
  const isLoggedIn = useIsLoggedIn()
  const [isLoading, setIsLoading] = useState(false)
  const [areaData, setAreaData] = useState<CustomerArea | null>(null)
  const [error, setError] = useState('')
  const { state: { customerInfo } } = useCustomerContext()

  useEffect(() => {
    // TODO: issue with double call of API...
    if (isLoggedIn && areaData?.id === undefined) {
      setIsLoading(true)
      void api.customerArea(customerInfo.accessToken).then((data) => {
        if (data !== undefined) {
          setAreaData(data)
        }
        setIsLoading(false)
      }).catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
    }
  }, [isLoggedIn, areaData?.id])

  if ((isLoading || areaData === undefined) && !error) {
    return <Loading centered />
  }

  return (
    <div className="grid justify-center mt-6">
      <div className="text-4xl text-center">Customer Area</div>
      <div className="flex flex-row my-4">
        <div className="flex-col text-center">
          {isLoggedIn
            ? (
              <>
                <div className="text-3xl">Your Service</div>
                <div className="my-6">{areaData && JSON.stringify(areaData)}</div>
                <Logout />
              </>
            )
            : (
              <>
                <LoginNoAccess />
                <RegisterCustomerArea className="mt-3" />
              </>
            )}
          {error && <div className="mt-3"><Alert variant="danger">{error}</Alert></div>}
        </div>
      </div>
    </div>
  )
}
