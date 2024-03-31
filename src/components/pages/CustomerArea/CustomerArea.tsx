'use client'

import Loading from '@/components/atoms/Loading/Loading'
import LoginNoAccess from '@/components/atoms/LoginNoAccess/LoginNoAccess'
import Logout from '@/components/atoms/Logout/Logout'
import useIsLoggedIn from '@/hooks/useIsLoggedIn'
import { useNotificationContext } from '@/providers/notification/NotificationContext'
import RegisterCustomerArea from '@/components/atoms/RegisterCustomerArea/RegisterCustomerArea'
import api from '@/utils/api'
import { useEffect, useState } from 'react'
import { type CustomerArea } from '@/types/customer'

// TODO: consts
export default function CustomerArea() {
  const isLoggedIn = useIsLoggedIn()
  const { showErrorNotification } = useNotificationContext()
  const [isLoading, setIsLoading] = useState(false)
  const [customer, setCustomer] = useState<CustomerArea | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    void api.customerArea().then((data) => {
      if (data !== undefined) {
        setCustomer(data)
      }
      setIsLoading(false)
    }).catch((error) => {
      setError(error)
      setIsLoading(false)
    })
  }, [])

  if ((isLoading || customer === undefined) && !error) {
    return <Loading />
  }

  if (error) {
    showErrorNotification({ error })
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
                <div className="my-6">{JSON.stringify(customer)}</div>
                <Logout />
              </>
            )
            : (
              <>
                <LoginNoAccess />
                <RegisterCustomerArea className="mt-3" />
              </>
            )}
        </div>
      </div>
    </div>
  )
}
