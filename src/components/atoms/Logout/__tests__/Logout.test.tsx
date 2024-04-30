import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Logout from '../Logout'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import * as CustomerContext from '@/providers/customer/CustomerContext'

const mockedUseRouter = useRouter as jest.Mock<AppRouterInstance>
const pushMock = jest.fn()
jest.mock('next/navigation')
mockedUseRouter.mockImplementation(() => ({ ...jest.requireActual('next/navigation'), push: pushMock }))

jest.mock('@/utils/api', () => ({
  logout: jest.fn().mockResolvedValue({}),
}))

const clearCustomerMock = jest.fn()
const customerContext = {
  clearCustomer: clearCustomerMock,
  clearServiceSelection: jest.fn(),
  setCustomer: jest.fn(),
  setServiceSelection: jest.fn(),
  state: {
    ...CustomerContext.initialState,
  },
}

describe('Logout', () => {
  jest
    .spyOn(CustomerContext, 'useCustomerContext')
    .mockReturnValue(customerContext)

  it('should render', () => {
    render(<Logout />)
    fireEvent.click(screen.getByText('Logout'))
    waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/logout')
      expect(clearCustomerMock).toHaveBeenCalled()
    })
  })
})
