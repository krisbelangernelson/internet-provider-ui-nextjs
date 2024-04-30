import { render, screen } from '@testing-library/react'
import Error from '../Error'
import '@/hooks/__mocks__/intersectionObserverMock'

describe('Error', () => {
  it('should render with title', () => {
    render(<Error title="Error" />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('should render with message', () => {
    render(<Error title="Error" message="Message" />)
    expect(screen.getByText('Message')).toBeInTheDocument()
  })
})
