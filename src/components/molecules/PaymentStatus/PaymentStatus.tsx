'use client'

import { type ReactElement } from 'react'
import { ROUTES, FORMS } from '@/constants'
import Loading from '@/components/atoms/Loading/Loading'
import usePaymentStatus from './usePaymentStatus'
import useIsLoggedIn from '@/hooks/useIsLoggedIn'
import { useRouter } from 'next/navigation'
import Alert from '@/components/atoms/Alert/Alert'

export default function PaymentStatus() {
  const { isProcessing, paymentStatus } = usePaymentStatus()
  const router = useRouter()
  const isLoggedIn = useIsLoggedIn()

  if (isProcessing) {
    return (
      <Loading>
        <>Processing...</>
      </Loading>
    )
  }

  const renderFailed = (): ReactElement => (
    <>
      <hr />
      <div className="d-flex justify-content-end">
        <button
          onClick={() => {
            router.back()
          }}
          className="btn-danger-outline"
        >
          {FORMS.buttons.payment.failed}
        </button>
      </div>
    </>
  )

  const renderLogin = (): ReactElement => (
    <button
      onClick={() => {
        router.push(ROUTES.login)
      }}
      className="btn-success-outline"
    >
      {FORMS.buttons.login.label}
    </button>
  )

  const renderCustomerArea = (): ReactElement => (
    <button
      onClick={() => {
        router.push(ROUTES.login)
      }}
      className="btn-success-outline"
    >
      {FORMS.buttons.login.label}
    </button>
  )

  const renderButton = (): ReactElement => {
    if (paymentStatus.isError) return renderFailed()
    else if (isLoggedIn) return renderCustomerArea()
    else return renderLogin()
  }

  return (
    <Alert variant={paymentStatus.isError ? 'danger' : 'success'} title={paymentStatus.title}>
      <p className="my-4">{paymentStatus.message}</p>
      {renderButton()}
    </Alert>
  )
}
