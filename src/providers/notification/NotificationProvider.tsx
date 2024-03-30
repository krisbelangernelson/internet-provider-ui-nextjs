'use client'

import { useState } from 'react'
import { NotificationContext, initialState } from './NotificationContext'
import type { NotificationState, NotificationData, NotificationError } from '@/types/notification'
import NotificationModal from '@/components/atoms/Notification/NotificationModal'

interface NotificationProviderProps {
  children: React.ReactNode
  customState?: NotificationState
}

export default function NotificationProvider(props: NotificationProviderProps) {
  const { children, customState = initialState } = props
  const [state, setState] = useState(customState)

  const stateReducer = {
    closeNotification: (): void => {
      setState(state => ({ ...state, show: false }))
    },
    resetNotification: () => {
      setState(state => ({ ...state, ...initialState }))
    },
    showErrorNotification: (data: NotificationError) => {
      setState(state => ({
        ...state,
        show: true,
        data: {
          title: data.title ?? 'Error',
          message: data.error,
        },
        isError: true,
      }))
    },
    showSuccessNotification: (data: NotificationData | null) => {
      setState(state => ({ ...state, show: true, data }))
    },
  }

  const { show, data } = state

  return (
    <NotificationContext.Provider value={{ ...stateReducer, state }}>
      {children}
      {show && data !== null && (
        <NotificationModal close={stateReducer.closeNotification} show={show} data={data} />
      )}
    </NotificationContext.Provider>
  )
}
