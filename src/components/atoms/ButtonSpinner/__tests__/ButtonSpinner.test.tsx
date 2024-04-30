import { render, screen } from '@testing-library/react'
import ButtonSpinner from '../ButtonSpinner'
import '@/hooks/__mocks__/intersectionObserverMock'

describe('ButtonSpinner', () => {
  it('should render', () => {
    render(<ButtonSpinner buttonLabel="Button" isDisabled={false} isLoading={false} loadingLabel="" />)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('should render with isDisabled', () => {
    render(<ButtonSpinner buttonLabel="Button" isDisabled={true} isLoading={false} loadingLabel="" />)
    expect(screen.getByText('Button')).toBeInTheDocument()
    expect(screen.getByText('Button')).toHaveClass('btn-primary-disabled')
  })

  it('should render with isLoading', () => {
    render(<ButtonSpinner buttonLabel="Button" isDisabled={false} isLoading={true} loadingLabel="Loading" />)
    expect(screen.queryByText('Button')).not.toBeInTheDocument()
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})
