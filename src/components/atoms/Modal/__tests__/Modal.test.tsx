import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Modal from '../Modal'

const onHide = jest.fn()

describe('Modal', () => {
  it('should render the title', () => {
    render(
      <Modal
        title="Test"
        onHide={onHide}
        show={true}>
        Children
      </Modal>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should render the children', () => {
    render(
      <Modal
        title="Test"
        onHide={onHide}
        show={true}>
        Children
      </Modal>)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('should render the close button', () => {
    render(
      <Modal
        title="Test"
        onHide={onHide}
        show={true}>
        Children
      </Modal>)
    expect(screen.getByRole('button', { name: 'Close modal' })).toBeInTheDocument()
  })

  it('should close the modal when the close button is clicked', async () => {
    render(
      <Modal title="Test" onHide={onHide} show={true}>
        Children
      </Modal>)
    fireEvent.click(screen.getByRole('button', { name: 'Close modal' }))
    waitFor(() => expect(onHide).toHaveBeenCalled())
  })

  it('should close the modal from the close-button testid', async () => {
    render(
      <Modal title="Test" onHide={onHide} show={true}>
        Children
      </Modal>)
    fireEvent.click(screen.getByTestId('close-button'))
    waitFor(() => expect(onHide).toHaveBeenCalled())
  })

  it('should hide the overlay when show is false', () => {
    render(
      <Modal title="Test" onHide={onHide} show={false}>
        Children
      </Modal>)
    expect(screen.getByTestId('overlay')).toHaveClass('hidden')
  })

  it('should hide the dialog when width is fit', () => {
    render(
      <Modal title="Test" onHide={onHide} show={true} width="fit">
        Children
      </Modal>)
    expect(screen.getByTestId('dialog')).toHaveClass('md:max-w-fit')
  })
})
