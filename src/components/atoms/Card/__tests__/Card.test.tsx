import { fireEvent, render, screen } from '@testing-library/react'
import Card from '../Card'
import '@/hooks/__mocks__/intersectionObserverMock'

const clickMock = jest.fn()

describe('Card', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render', () => {
    render(<Card header="" onClick={clickMock} footer="">Card</Card>)
    fireEvent.click(screen.getByText('Card'))
    expect(screen.getByText('Card')).toBeInTheDocument()
    expect(clickMock).toHaveBeenCalledTimes(1)
  })
})
