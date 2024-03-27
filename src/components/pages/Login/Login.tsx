'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
// import { handleAxiosError } from '@/utils/handleError'
import { loginFormSchema } from '@/utils/validationSchemas'
import { ROUTES, MAIN_HEADERS, FORMS } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import Alert from '@/components/atoms/Alert/Alert'
import TextInput from '@/components/atoms/TextInput/TextInput'
import { loginCustomer } from '@/utils/api'
import { useRouter, useSearchParams } from 'next/navigation'

const Login = () => {
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)
  const searchParams = useSearchParams()
  const from = searchParams.get('from') ?? ROUTES.customerArea
  const { setCustomer } = useCustomerContext()

  const formik = useFormik({
    validationSchema: loginFormSchema,
    onSubmit: ({ email, password }) => {
      setIsPending(true)
      loginCustomer({ email, password }).then((data) => {
        setCustomer(data)
        setIsPending(false)
        router.push(from)
      }).catch((error) => {
        setError(error.message)
        setIsPending(false)
      })
    },
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: validateAfterSubmit,
  })

  const { handleSubmit, handleChange, values, touched, errors } = formik

  return (
    <div className="flex justify-center my-6">
      <form onSubmit={handleSubmit} className="w-64">
        <div>
          <div className="grid gap-4">
            <TextInput
              label={FORMS.email.label}
              name="email"
              type="email"
              placeholder={FORMS.email.placeholder}
              onChange={handleChange}
              value={values.email}
              isValid={errors.email === undefined && touched.email}
              isInvalid={errors.email !== undefined && touched.email}
              feedback={errors.email}
            />
            <TextInput
              label={FORMS.password.label}
              name="password"
              type="password"
              placeholder={FORMS.password.placeholder}
              onChange={handleChange}
              value={values.password}
              isValid={errors.password === undefined && touched.password}
              isInvalid={errors.password !== undefined && touched.password}
              feedback={errors.password}
            />
            <div className="grid">
              <ButtonSpinner
                onClick={() => {
                  setValidateAfterSubmit(true)
                }}
                isDisabled={isPending}
                isLoading={isPending}
                buttonLabel={FORMS.buttons.login.label}
                loadingLabel={FORMS.buttons.login.loadingLabel}
              />
              {error !== '' && <Alert variant="danger">{error}</Alert>}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
