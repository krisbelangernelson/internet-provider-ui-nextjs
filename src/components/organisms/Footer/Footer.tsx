'use client'

import { useCustomerContext } from '@/providers/customer/CustomerContext'
import Copyright from './Copyright'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'
import api from '@/utils/api'
import { useEffect } from 'react'
import { useNotificationContext } from '@/providers/notification/NotificationContext'

export default function Footer() {
  const { setCustomer, state: { customerInfo } } = useCustomerContext()
  const { showErrorNotification } = useNotificationContext()

  useEffect(() => {
    if (!customerInfo.accessToken) {
      void api.autoLoginCheck().then((customer) => {
        if (customer?.accessToken !== undefined) {
          setCustomer(customer)
        }
      }).catch((error: Error) => {
        showErrorNotification({ error: error.message })
      })
    }
  }, [customerInfo.accessToken])

  return (
    <footer className="mt-auto section-dark">
      <DesktopFooter />
      <MobileFooter />
      <Copyright />
    </footer>
  )
}
