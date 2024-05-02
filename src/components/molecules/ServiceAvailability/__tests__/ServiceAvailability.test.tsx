import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ServiceAvailability from '../ServiceAvailability'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import * as CustomerContext from '@/providers/customer/CustomerContext'

const mockedUseRouter = useRouter as jest.Mock<AppRouterInstance>

const pushMock = jest.fn()
jest.mock('next/navigation')

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

describe('ServiceAvailability', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
    jest
      .spyOn(CustomerContext, 'useCustomerContext')
      .mockReturnValue(customerContext)
    mockedUseRouter.mockImplementation(() => ({ ...jest.requireActual('next/navigation'), push: pushMock }))
  })

  it('should render', () => {
    render(<ServiceAvailability />)
    expect(screen.getByText('Service Availability')).toBeInTheDocument()
  })

  it('should render with redirect for missing service type', () => {
    jest
      .spyOn(CustomerContext, 'useCustomerContext')
      .mockReturnValue({
        ...customerContext,
        state: {
          ...customerContext.state,
          serviceSelection: {
            serviceType: '',
            offerName: 'offerName',
            offerId: 1,
          },
        },
      })
    render(<ServiceAvailability />)
    expect(pushMock).toHaveBeenCalledWith('/internet')
  })

  it('should input adrres, click search, click next', async () => {
    render(<ServiceAvailability />)
    const input = screen.getByTestId('address')
    fireEvent.change(input, { target: { value: 'New Text' } })
    const button = screen.getByText('Search')
    fireEvent.click(button)
    await waitFor(() => {
      expect(screen.getByText('Your address qualifies for this service!')).toBeInTheDocument()
      const buttonNext = screen.getByText('Next')
      fireEvent.click(buttonNext)
    })
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/order/customer')
    })
  })
})
