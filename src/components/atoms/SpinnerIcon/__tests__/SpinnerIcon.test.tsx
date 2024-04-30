import { render, screen } from '@testing-library/react'
import SpinnerIcon from '../SpinnerIcon'

describe('SpinnerIcon', () => {
  it('should render the icon', () => {
    render(<SpinnerIcon />)
    expect(screen.getByTestId('spinner-icon')).toBeInTheDocument()
  })

  it('should render the icon with className and size', () => {
    render(<SpinnerIcon className="text-gray-200" size="10" />)
    expect(screen.getByTestId('spinner-icon')).toHaveClass('text-gray-200')
    expect(screen.getByTestId('spinner-icon')).toHaveClass('w-10')
  })
})
