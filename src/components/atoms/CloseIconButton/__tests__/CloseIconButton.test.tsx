import { fireEvent, render, screen } from '@testing-library/react'
import CloseIconButton from '../CloseIconButton'
import '@/hooks/__mocks__/intersectionObserverMock'

const clickMock = jest.fn()

describe('CloseIconButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render', () => {
    render(<CloseIconButton onClick={clickMock} />)
    fireEvent.click(screen.getByText('Close modal'))
    expect(screen.getByText('Close modal')).toBeInTheDocument()
    expect(clickMock).toHaveBeenCalledTimes(1)
  })
})
