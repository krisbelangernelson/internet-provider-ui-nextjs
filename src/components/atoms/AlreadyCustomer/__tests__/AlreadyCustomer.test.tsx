import { render } from '@testing-library/react'
import AlreadyCustomer from '../AlreadyCustomer'

describe('AlreadyCustomer', () => {
  it('should render', () => {
    const { getByText } = render(<AlreadyCustomer />)
    expect(getByText('Already a customer?')).toBeInTheDocument()
  })
})
