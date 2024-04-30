import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ImageTransition from '../ImageTransition'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('ImageTransition', () => {
  it('should render', () => {
    render(<ImageTransition src="/images/testImage.webp" alt="Image" className="" loading={undefined} position={0} />)
    const image = screen.getByRole('img')
    fireEvent.load(image)
    expect(screen.getByAltText('Image')).toBeInTheDocument()
  })

  it('shound render with position 1', () => {
    render(<ImageTransition src="/images/testImage.webp" alt="Image" className="" loading={undefined} position={1} />)
    const image = screen.getByRole('img')
    fireEvent.load(image)
    waitFor(() => expect(screen.getByAltText('Image')).toHaveClass('-translate-x-full'))
  })
})
