import { fireEvent, render, screen } from '@testing-library/react'
import MyAccount from '../MyAccount'

describe('MyAccount', () => {
  it('should render', () => {
    render(<MyAccount />)

    expect(screen.getByTestId('person')).toHaveClass('primary')
  })
})
