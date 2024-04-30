import { render, screen } from '@testing-library/react'
import LazyBackgroundImg from '../LazyBackgroundImg'

describe('LazyBackgroundImg', () => {
  it('should render', () => {
    render(<LazyBackgroundImg img="/images/testImage.webp" />)
    expect(screen.getByTestId('background-img')).toBeInTheDocument()
  })

  it('should render with darkened', () => {
    render(<LazyBackgroundImg img="/images/testImage.webp" isDarkened />)
    expect(screen.getByTestId('background-img')).toHaveStyle(`background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(/images/testImage.webp)`)
  })
})
