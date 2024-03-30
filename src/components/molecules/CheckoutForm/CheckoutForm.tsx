import { PaymentElement, AddressElement } from '@stripe/react-stripe-js'
import ButtonSpinner from '@/components/atoms/ButtonSpinner/ButtonSpinner'
import './CheckoutForm.scss'
import { FORMS } from '@/constants'
import useCheckoutForm from './useCheckoutForm'

interface CheckoutFormProps {
  customerId: string | undefined
}

// TODO: Prefill address form?
// https://docs.stripe.com/elements/address-element/collect-addresses?platform=web#prefill-address-form
export default function CheckoutForm({ customerId }: CheckoutFormProps) {
  const { data, handlers } = useCheckoutForm(customerId)
  const { message, isProcessing, stripe, elements } = data
  const { handleSubmit, setAddress } = handlers

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <AddressElement
        options={{ mode: 'billing', allowedCountries: ['CA'] }}
        onChange={(event) => {
          const address = event.value.address
          setAddress(address)
        }}
      />
      <PaymentElement id="payment-element" className="mt-2" />
      <ButtonSpinner
        isDisabled={stripe == null || elements == null}
        isLoading={isProcessing}
        buttonLabel={FORMS.buttons.payment.label}
        loadingLabel={FORMS.buttons.payment.loadingLabel}
      />
      {message != null && <div id="payment-message">{message}</div>}
    </form>
  )
}
