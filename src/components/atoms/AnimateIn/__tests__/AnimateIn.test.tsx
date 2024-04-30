import { render, screen } from '@testing-library/react'
import AnimateIn from '../AnimateIn'
import '@/hooks/__mocks__/intersectionObserverMock'

describe('AnimateIn', () => {
  it('should render', () => {
    render(<AnimateIn>AnimateIn</AnimateIn>)
    expect(screen.getByText('AnimateIn')).toBeInTheDocument()
  })
})
