import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import NotificationModal from '../NotificationModal'

const close = jest.fn()

describe('NotificationModal', () => {
  it('should render the modal', () => {
    const data = { title: 'Title', message: 'Message' }
    render(
      <NotificationModal close={close} show={false} data={data} />,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Message')).toBeInTheDocument()
  })
})
