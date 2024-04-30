import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import TextInput from '../TextInput'

const onChange = jest.fn()

describe('TextInput', () => {
  it('should render the input with isValid and feedback', () => {
    render(<TextInput
      label="Label"
      name="TextInput"
      type="input"
      placeholder="Placeholder"
      onChange={onChange}
      value=""
      isValid
      feedback="Feedback" />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveClass('bg-green-50')
  })

  it('should render the input with isInvalid and feedback', () => {
    render(<TextInput
      label="Label"
      name="TextInput"
      type="input"
      placeholder="Placeholder"
      onChange={onChange}
      value=""
      isInvalid
      feedback="Feedback" />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveClass('bg-red-50')
  })

  it('should render with onChange', () => {
    render(<TextInput
      label="Label"
      name="input"
      type="input"
      placeholder="Placeholder"
      onChange={onChange}
      value="" />)
    const input = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'New Text' } })
    waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('New Text')
    })
  })
})
