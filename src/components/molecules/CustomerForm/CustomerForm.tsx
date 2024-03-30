'use client'

import { normalizeInputPhone } from '@/utils/utils'
import { MAIN_HEADERS, FORMS, APP_ERRORS } from '@/constants'
import useCustomerForm from './useCustomerForm'
import TextInput from '@/components/atoms/TextInput/TextInput'
import Alert from '@/components/atoms/Alert/Alert'

export default function CustomerForm() {
  const { data, handlers } = useCustomerForm()
  const { isError, errors, isPending, touched, values } = data
  const { handleChange, handleSubmit, setFieldValue, setValidateAfterSubmit } = handlers

  return (
    <div className="grid md:grid-cols-12">
      <div className="text-4xl my-4 md:col-start-5 md:col-span-4 text-center">{MAIN_HEADERS.createAccount}</div>
      <div className="md:col-start-5 md:col-span-4">
        <form onSubmit={handleSubmit}>
          <div className="flex-row mb-3">
            <div className="grid gap-4">
              <TextInput
                label={FORMS.firstName.label}
                name="firstName"
                type="text"
                placeholder="John"
                onChange={handleChange}
                value={values.firstName}
                isValid={errors.firstName === undefined && touched.firstName}
                isInvalid={errors.firstName !== undefined && touched.firstName}
                feedback={errors.firstName}
              />
              <TextInput
                label={FORMS.lastName.label}
                name="lastName"
                type="text"
                placeholder="Doe"
                onChange={handleChange}
                value={values.lastName}
                isValid={errors.lastName === undefined && touched.lastName}
                isInvalid={errors.lastName !== undefined && touched.lastName}
                feedback={errors.lastName}
              />
              <TextInput
                label={FORMS.email.label}
                name="email"
                type="email"
                placeholder="name@domain.com"
                onChange={handleChange}
                value={values.email}
                isValid={errors.email === undefined && touched.email}
                isInvalid={errors.email !== undefined && touched.email}
                feedback={errors.email}
              />
              <TextInput
                label={FORMS.phone.label}
                name="phone"
                type="tel"
                placeholder="555-555-5555"
                onChange={(e) => {
                  handleChange(e)
                  const { value } = e.target
                  void setFieldValue('phone', normalizeInputPhone(value))
                }}
                value={values.phone}
                isValid={errors.phone === undefined && touched.phone}
                isInvalid={errors.phone !== undefined && touched.phone}
                feedback={errors.phone}
              />
              <TextInput
                label={FORMS.password.label}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                isValid={errors.password === undefined && touched.password}
                isInvalid={errors.password !== undefined && touched.password}
                feedback={errors.password}
              />
              <TextInput
                label={FORMS.passwordConfirm.label}
                name="passwordConfirm"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={values.passwordConfirm}
                isValid={errors.passwordConfirm === undefined && touched.passwordConfirm}
                isInvalid={errors.passwordConfirm !== undefined && touched.passwordConfirm}
                feedback={errors.passwordConfirm}
              />
              <div className="grid mb-4">
                <div className="flex items-center">
                  <input name="terms" id="terms" type="checkbox" onChange={handleChange} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {FORMS.terms.label}
                  </label>
                </div>
                {errors.terms !== undefined && touched.terms && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.terms}</p>}
              </div>
              <div className="grid gap-2">
                <button
                  type="submit"
                  className="btn-primary"
                  onClick={() => {
                    setValidateAfterSubmit(true)
                  }}
                  disabled={isPending}
                >
                  {FORMS.buttons.next.label}
                </button>
                {isError && <Alert variant="danger">{APP_ERRORS.unexpectedError}</Alert>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
