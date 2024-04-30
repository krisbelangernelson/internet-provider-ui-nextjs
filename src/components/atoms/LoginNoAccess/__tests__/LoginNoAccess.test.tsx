import { fireEvent, render, screen } from '@testing-library/react'
import LoginNoAccess from '../LoginNoAccess'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const mockedUseRouter = useRouter as jest.Mock<AppRouterInstance>
const pushMock = jest.fn()
jest.mock('next/navigation')

mockedUseRouter.mockImplementation(() => ({ ...jest.requireActual('next/navigation'), push: pushMock }))

describe('LoginNoAccess', () => {
  it('should render', () => {
    render(<LoginNoAccess />)
    fireEvent.click(screen.getByText('Login'))
    expect(pushMock).toHaveBeenCalledWith('/login')
  })
})
