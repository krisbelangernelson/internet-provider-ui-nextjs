import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import NavMenu from '../NavMenu'

describe('NavMenu', () => {
  it('should render', () => {
    render(<NavMenu />)
    expect(screen.getAllByText('Ping!')[0]).toBeInTheDocument()
  })

  it('shouldl click on burger', () => {
    render(<NavMenu />)
    const burger = screen.getByTestId('nav-burger')
    fireEvent.click(burger)
    waitFor(() => {
      expect(screen.getByTestId('nav-mobile')).toHaveClass('h-0')
      expect(screen.queryByTestId('nav-mobile')).not.toHaveClass('h-full')
    })
  })
})
