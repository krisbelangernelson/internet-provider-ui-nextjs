import { type FormikErrors, useFormik } from 'formik'
import { type Dispatch, type SetStateAction, useState, type FormEvent, type BaseSyntheticEvent, useRef } from 'react'
import { normalizeInputPhone, keepDigits } from '@/utils/utils'
import type {
  CustomerRegister,
  CustomerFormikValues,
  CustomerFormikErrors,
  CustomerFormikTouched,
} from '@/types/customer'
import { customerFormSchema } from '@/utils/validationSchemas'
import { ROUTES, VALIDATIONS } from '@/constants'
import { useCustomerContext } from '@/providers/customer/CustomerContext'
import { useNotificationContext } from '@/providers/notification/NotificationContext'
import { useRouter } from 'next/navigation'
import api from '@/utils/api'

interface UseCustomerForm {
  data: {
    errors: CustomerFormikErrors
    isError: boolean
    isPending: boolean
    touched: CustomerFormikTouched
    values: CustomerFormikValues
  }
  handlers: {
    handleChange: (e: BaseSyntheticEvent) => void
    handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void
    setFieldValue: (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<FormikErrors<CustomerFormikValues>>
    setValidateAfterSubmit: Dispatch<SetStateAction<boolean>>
  }
}

const useCustomerForm = (): UseCustomerForm => {
  const router = useRouter()
  const customerData = useRef<CustomerRegister | null>(null)
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [isError, setIsError] = useState(false)
  const {
    setCustomer,
    state: { customerInfo },
  } = useCustomerContext()
  const { showErrorNotification } = useNotificationContext()

  const formik = useFormik({
    validationSchema: customerFormSchema,
    onSubmit: async (values, { setFieldError }) => {
      const phoneClean = keepDigits(values.phone)
      const result = await api.customerExists({
        email: values.email,
        phone: phoneClean,
      }).catch((error) => {
        showErrorNotification({ error: error.message })
      })

      const { emailExists, phoneExists } = result ?? {}

      if (emailExists === undefined && phoneExists === undefined) return

      if (!emailExists && !phoneExists) {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: phoneClean,
          password: values.password,
        }

        customerData.current = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: phoneClean,
        }

        setIsPending(true)
        setIsError(false)
        api.registerCustomer(data).then((data) => {
          if (data !== undefined) {
            setCustomer({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              phone: phoneClean,
              id: data.id,
              accessToken: '',
            })
            setIsPending(false)
            router.push(ROUTES.orderPayment)
          }
        }).catch((error) => {
          setIsError(true)
          setIsPending(false)
          showErrorNotification({ error: error.message })
        })
      } else if (emailExists && phoneExists) {
        setFieldError('email', VALIDATIONS.email.exists)
        setFieldError('phone', VALIDATIONS.phone.exists)
      } else if (emailExists && !phoneExists) {
        setFieldError('email', VALIDATIONS.email.exists)
      } else if (phoneExists && !emailExists) {
        setFieldError('phone', VALIDATIONS.phone.exists)
      }
    },
    initialValues: {
      firstName: customerInfo?.firstName ?? '',
      lastName: customerInfo?.lastName ?? '',
      email: customerInfo?.email ?? '',
      phone: normalizeInputPhone(customerInfo?.phone ?? ''),
      password: '',
      passwordConfirm: '',
      terms: false,
    },
    validateOnChange: validateAfterSubmit,
  })

  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = formik

  return {
    data: {
      isError,
      errors,
      isPending,
      touched,
      values,
    },
    handlers: {
      handleChange,
      handleSubmit,
      setFieldValue,
      setValidateAfterSubmit,
    },
  }
}

export default useCustomerForm
