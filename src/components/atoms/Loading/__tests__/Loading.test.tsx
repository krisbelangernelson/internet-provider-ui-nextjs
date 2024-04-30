import { render, screen } from '@testing-library/react'
import Loading from '../Loading'

describe('Loading', () => {
  it('should render', () => {
    render(<Loading><div>Loading</div></Loading>)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('should render centered', () => {
    render(<Loading centered><div>Loading</div></Loading>)
    expect(screen.getByTestId('loading-center')).toHaveClass('text-center')
  })
})
