import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import useCheckoutForm from '../useCheckoutForm'
import * as CustomerContext from '@/providers/customer/CustomerContext'
import * as stripe from '@stripe/react-stripe-js'

const mockStripe = stripe as jest.Mocked<typeof stripe>
jest.mock('@stripe/react-stripe-js')

jest.spyOn(mockStripe, 'useElements').mockImplementation(() => ({
  ...jest.requireActual('@stripe/react-stripe-js').useElements(),
  submit: () => { },
}))

const customerContext = {
  clearCustomer: jest.fn(),
  clearServiceSelection: jest.fn(),
  setCustomer: jest.fn(),
  setServiceSelection: jest.fn(),
  state: {
    ...CustomerContext.initialState,
    serviceSelection: {
      serviceType: 'serviceType',
      offerName: 'offerName',
      offerId: 1,
    },
  },
}

describe('useCheckoutForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(CustomerContext, 'useCustomerContext')
      .mockReturnValue(customerContext)
    // @ts-expect-error ignore missing properties
    jest.spyOn(mockStripe, 'useStripe').mockImplementation(() => ({
      confirmPayment: jest.fn().mockResolvedValue({ error: { type: 'card_error', message: 'Error' } }),
    }))
    // @ts-expect-error ignore missing properties
    jest.spyOn(mockStripe, 'useElements').mockImplementation(() => ({
      submit: () => { },
    }))
  })

  it('should submit data and payment card_error', async () => {
    const Comp = () => {
      const { data, handlers } = useCheckoutForm('123')
      const handleChange = () => {
        handlers.setAddress({
          line1: 'line1',
          line2: null,
          city: 'city',
          state: 'state',
          country: 'country',
          postal_code: 'j8j 1u1',
        })
      }
      return (
        <form onSubmit={handlers.handleSubmit}>
          <div data-testid="data">{data.message}</div>
          <input type="input" name="address" data-testid="address" value="" onChange={handleChange} />
          <button type="submit" data-testid="submit">
            Pay Now
          </button>
        </form>
      )
    }

    render(<Comp />)
    fireEvent.change(screen.getByTestId('address'), { target: { value: 'New Text' } })

    waitFor(() => {
      expect(screen.getByTestId('address')).toHaveValue('New Text')
    })

    const button = screen.getByTestId('submit')
    fireEvent.click(button)

    waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument()
    })
  })

  it('should submit data, line2 present, and payment card_error', async () => {
    const Comp = () => {
      const { data, handlers } = useCheckoutForm('123')
      const handleChange = () => {
        handlers.setAddress({
          line1: 'line1',
          line2: 'line2',
          city: 'city',
          state: 'state',
          country: 'country',
          postal_code: 'j8j 1u1',
        })
      }
      return (
        <form onSubmit={handlers.handleSubmit}>
          <div data-testid="data">{data.message}</div>
          <input type="input" name="address" data-testid="address" value="" onChange={handleChange} />
          <button type="submit" data-testid="submit">
            Pay Now
          </button>
        </form>
      )
    }

    render(<Comp />)
    fireEvent.change(screen.getByTestId('address'), { target: { value: 'New Text' } })

    waitFor(() => {
      expect(screen.getByTestId('address')).toHaveValue('New Text')
    })

    const button = screen.getByTestId('submit')
    fireEvent.click(button)

    waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument()
    })
  })

  it('should submit data with unrecognized error', async () => {
    // @ts-expect-error ignore missing properties
    jest.spyOn(mockStripe, 'useStripe').mockImplementation(() => ({
      confirmPayment: jest.fn().mockResolvedValue({ error: { type: 'other_error', message: 'Error other' } }),
    }))
    const Comp = () => {
      const { data, handlers } = useCheckoutForm('123')
      return (
        <form onSubmit={handlers.handleSubmit}>
          <div data-testid="data">{data.message}</div>
          <input type="input" name="address" data-testid="address" />
          <button type="submit" data-testid="submit">
            Pay Now
          </button>
        </form>
      )
    }

    render(<Comp />)
    fireEvent.change(screen.getByTestId('address'), { target: { value: 'New Text' } })

    waitFor(() => {
      expect(screen.getByTestId('address')).toHaveValue('New Text')
    })

    const button = screen.getByTestId('submit')
    fireEvent.click(button)

    waitFor(() => {
      expect(screen.getByText('Error other')).toBeInTheDocument()
    })
  })

  it('should submit data with missing customerId and offerId', async () => {
    jest
      .spyOn(CustomerContext, 'useCustomerContext')
      .mockReturnValue({
        ...customerContext,
        state: {
          ...customerContext.state,
          serviceSelection: {
            serviceType: 'serviceType',
            offerName: 'offerName',
            offerId: null,
          },
        },
      })
    const Comp = () => {
      const { data, handlers } = useCheckoutForm(undefined)
      return (
        <form onSubmit={handlers.handleSubmit}>
          <div data-testid="data">{data.message}</div>
          <input type="input" name="address" data-testid="address" />
          <button type="submit" data-testid="submit">
            Pay Now
          </button>
        </form>
      )
    }

    render(<Comp />)
    fireEvent.change(screen.getByTestId('address'), { target: { value: 'New Text' } })

    waitFor(() => {
      expect(screen.getByTestId('address')).toHaveValue('New Text')
    })

    const button = screen.getByTestId('submit')
    fireEvent.click(button)

    waitFor(() => {
      expect(screen.getByText('Error other')).toBeInTheDocument()
    })
  })

  it('should submit data with unrecognized error, message undefined', async () => {
    // @ts-expect-error ignore missing properties
    jest.spyOn(mockStripe, 'useStripe').mockImplementation(() => ({
      confirmPayment: jest.fn().mockResolvedValue({ error: { type: 'card_error' } }),
    }))
    const Comp = () => {
      const { data, handlers } = useCheckoutForm('123')
      return (
        <form onSubmit={handlers.handleSubmit}>
          <div data-testid="data">{data.message}</div>
          <input type="input" name="address" data-testid="address" />
          <button type="submit" data-testid="submit">
            Pay Now
          </button>
        </form>
      )
    }

    render(<Comp />)
    fireEvent.change(screen.getByTestId('address'), { target: { value: 'New Text' } })

    waitFor(() => {
      expect(screen.getByTestId('address')).toHaveValue('New Text')
    })

    const button = screen.getByTestId('submit')
    fireEvent.click(button)

    waitFor(() => {
      expect(screen.getByText('error.message undefined')).toBeInTheDocument()
    })
  })
})
