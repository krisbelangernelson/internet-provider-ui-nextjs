import { render, screen } from '@testing-library/react'
import PersonIcon from '../PersonIcon'

describe('PersonIcon', () => {
  it('should render the icon', () => {
    render(<PersonIcon />)
    expect(screen.getByTestId('person')).toHaveClass('person-circle')
  })
})
