import { fireEvent, render, screen } from '@testing-library/react'
import FooterAccordian from '../FooterAccordian'

describe('FooterAccordian', () => {
  it('should find the first item', () => {
    render(<FooterAccordian items={[{ label: 'Link', link: '/' }, { label: 'Link2', link: '/link2' }]} />)
    const item = screen.getByText('Link')
    expect(item).toBeInTheDocument()
  })

  it('should click on the first item', () => {
    render(<FooterAccordian items={[{ label: 'Link', link: '/' }]} />)
    const item = screen.getByText('Link')
    fireEvent.click(item)
    expect(item).toBeInTheDocument()
  })
})
