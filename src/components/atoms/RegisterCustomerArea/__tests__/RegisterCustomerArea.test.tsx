import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import RegisterCustomerArea from '../RegisterCustomerArea'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const onSubmit = jest.fn()

const mockedUseRouter = useRouter as jest.Mock<AppRouterInstance>

const pushMock = jest.fn()
jest.mock('next/navigation')

mockedUseRouter.mockImplementation(() => ({ ...jest.requireActual('next/navigation'), push: pushMock }))

describe('RegisterCustomerArea', () => {
  it('should render the form', () => {
    render(
      <RegisterCustomerArea />,
    )
    expect(screen.getByRole('button', { name: 'Explore Plans' })).toBeInTheDocument()
  })

  it('should submit the form when the button is clicked', async () => {
    render(
      <RegisterCustomerArea />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Explore Plans' }))
    waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(pushMock).toHaveBeenCalledWith('/internet')
  })
})
