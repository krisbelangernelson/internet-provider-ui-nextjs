import { render } from '@testing-library/react'
import Alert from '../Alert'

describe('Alert', () => {
  it('should render default alert', () => {
    const { getByText } = render(<Alert>Alert</Alert>)
    expect(getByText('Alert')).toBeInTheDocument()
  })

  it('should render success alert', () => {
    const { getByText } = render(<Alert variant="success">Success</Alert>)
    expect(getByText('Success')).toHaveClass('text-green-800')
  })

  it('should render danger alert', () => {
    const { getByText } = render(<Alert variant="danger">Danger</Alert>)
    expect(getByText('Danger')).toHaveClass('text-red-800')
  })

  it('should render title', () => {
    const { getByText } = render(
      <Alert title="Title">Alert</Alert>,
    )
    expect(getByText('Title')).toBeInTheDocument()
  })
})
