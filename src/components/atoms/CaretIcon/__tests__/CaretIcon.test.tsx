import { render, screen } from '@testing-library/react'
import CaretIcon from '../CaretIcon'
import '@/hooks/__mocks__/intersectionObserverMock'

describe('CaretIcon', () => {
  it('should render', () => {
    render(<CaretIcon aria-label="Caret" />)
    expect(screen.getByLabelText('Caret')).toBeInTheDocument()
  })
})
