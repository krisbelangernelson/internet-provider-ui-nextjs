import { fireEvent, render, screen } from '@testing-library/react'
import ButtonToggle from '../ButtonToggle'
import '@/hooks/__mocks__/intersectionObserverMock'

const clickMock = jest.fn()

describe('ButtonToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render button and call onClick', () => {
    render(<ButtonToggle
      active={false}
      label="Button"
      name="button"
      onClick={clickMock}
    />)
    fireEvent.click(screen.getByText('Button'))
    expect(screen.getByText('Button')).toBeInTheDocument()
    expect(clickMock).toHaveBeenCalledTimes(1)
  })

  it('should render button with active and full', () => {
    render(<ButtonToggle
      active={true}
      label="Button"
      name="button"
      onClick={clickMock}
      full={true}
    />)
    expect(screen.getByText('Button')).toHaveClass('btn-primary')
  })
})
