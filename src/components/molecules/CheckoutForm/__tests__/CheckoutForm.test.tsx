import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import CheckoutForm from '../CheckoutForm'
import { Stripe, StripeElements } from '@stripe/stripe-js'
import useCheckoutForm from '../useCheckoutForm'

jest.mock('@stripe/react-stripe-js', () => ({
  PaymentElement: () => (null),
  AddressElement: ({ onChange }: { onChange: (event: any) => void }) => (
    <div>
      <input
        type="input"
        id="address"
        name="address"
        placeholder="placeholder"
        onChange={(e) => {
          onChange({ value: { address: e.target.value } })
        }}
        value=""
        data-testid="input" />
    </div>
  ),
}))

jest.mock('../useCheckoutForm')
const mockUseCheckoutForm = useCheckoutForm as jest.MockedFunction<typeof useCheckoutForm>
const mockSetAddress = jest.fn()

describe('CheckoutForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseCheckoutForm.mockReturnValue({
      data: {
        message: null,
        isProcessing: false,
        stripe: {} as Stripe,
        elements: {} as StripeElements,
      },
      handlers: {
        handleSubmit: jest.fn(),
        setAddress: mockSetAddress,
      },
    })
  })

  it('should render', async () => {
    mockUseCheckoutForm.mockReturnValue({
      data: {
        message: 'error',
        isProcessing: false,
        stripe: null,
        elements: null,
      },
      handlers: {
        handleSubmit: jest.fn(),
        setAddress: mockSetAddress,
      },
    })

    render(<CheckoutForm customerId="123" />)
    waitFor(() => {
      expect(screen.getByText('Pay Now')).toBeInTheDocument()
    })
  })

  it('should render and change input', async () => {
    render(<CheckoutForm customerId="123" />)
    const input = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'New Text' } })

    const button = screen.getByText('Pay Now')
    fireEvent.click(button)

    waitFor(() => {
      expect(mockSetAddress).toHaveBeenCalledWith({ line2: 'New Text' })
    })
  })
})
