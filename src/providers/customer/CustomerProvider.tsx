'use client'

import { useState, type ReactNode } from 'react'
import { initialState, CustomerContext } from '@/providers/customer/CustomerContext'
import type { ServiceSelection, CustomerState, CustomerResponse } from '@/types/customer'

interface CustomerProviderProps {
  children: ReactNode
  customState?: CustomerState
}

export default function CustomerProvider(props: CustomerProviderProps) {
  const { children, customState = initialState } = props
  const [state, setState] = useState(customState)

  const stateReducer = {
    clearCustomer: () => {
      setState((state: CustomerState) => ({ ...state, ...initialState }))
    },
    setCustomer: (customerInfo: CustomerResponse) => {
      setState((state: CustomerState) => ({ ...state, customerInfo }))
    },
    setServiceSelection: (serviceSelection: ServiceSelection) => {
      setState((state: CustomerState) => ({ ...state, serviceSelection }))
    },
  }

  return <CustomerContext.Provider value={{ ...stateReducer, state }}>{children}</CustomerContext.Provider>
}
