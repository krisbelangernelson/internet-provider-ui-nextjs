import { renderHook } from '@testing-library/react'
import useIsLoggedIn from '../useIsLoggedIn'
import * as CustomerContext from '@/providers/customer/CustomerContext'

const customerContext = {
  clearCustomer: jest.fn(),
  clearServiceSelection: jest.fn(),
  setCustomer: jest.fn(),
  setServiceSelection: jest.fn(),
  state: {
    ...CustomerContext.initialState,
    customerInfo: {
      ...CustomerContext.initialState.customerInfo,
      accessToken: 'accessToken',
    },
  },
}

describe('useIsLoggedIn', () => {
  let customerMock: jest.SpyInstance

  beforeEach(() => {
    jest.clearAllMocks()
    customerMock = jest
      .spyOn(CustomerContext, 'useCustomerContext')
      .mockReturnValue(customerContext)
  })

  it('should return true if accessToken is not empty', () => {
    const { result } = renderHook(() => useIsLoggedIn())
    expect(result.current).toBe(true)
  })

  it('should return false if accessToken is empty', () => {
    customerMock.mockReturnValue({
      ...customerContext,
      state: {
        ...customerContext.state,
        customerInfo: {
          ...customerContext.state.customerInfo,
          accessToken: '',
        },
      },
    })
    const { result } = renderHook(() => useIsLoggedIn())
    expect(result.current).toBe(false)
  })
})
