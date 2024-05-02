import { fireEvent, render, screen } from '@testing-library/react'
import HelpMeChoose from '../HelpMeChoose'

describe('HelpMeChoose', () => {
  it('should render and open then close the modal', () => {
    render(<HelpMeChoose sortedOffers={[{
      id: 1,
      bandwidth_down: 1000,
      bandwidth_up: 1000,
      label: 'label',
      name: 'name',
      description: 'description',
      price: 1000,
      type: 'type',
      category: 'category',
      ideal_num_users: 'ideal_num_users',
      ideal_num_devices: 'ideal_num_devices',
    }]} />)

    expect(screen.getByText('Help me choose')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Help me choose'))

    fireEvent.click(screen.getByTestId('close-button'))
  })

  it('should render with no offers', () => {
    render(<HelpMeChoose sortedOffers={[]} />)

    expect(screen.queryByText('Choose Your Speed')).not.toBeInTheDocument()
  })

  it('should render null when sortedOffers is undefined', () => {
    render(<HelpMeChoose sortedOffers={undefined} />)

    expect(screen.queryByText('Help me choose')).not.toBeInTheDocument()
  })

  it('should render with disabledStyle', () => {
    render(<HelpMeChoose
      sortedOffers={[{
        id: 1,
        bandwidth_down: 1000,
        bandwidth_up: 1000,
        label: 'label',
        name: 'name',
        description: 'description',
        price: 1000,
        type: 'type',
        category: 'category',
        ideal_num_users: '1',
        ideal_num_devices: '1',
      },
      {
        id: 2,
        bandwidth_down: 50,
        bandwidth_up: 50,
        label: 'label2',
        name: 'name2',
        description: 'description2',
        price: 50,
        type: 'type',
        category: 'category',
        ideal_num_users: '2',
        ideal_num_devices: '2',
      }]}
      disabledStyle="text-gray-400" />)

    expect(screen.getByText('Help me choose')).toHaveClass('text-gray-400')
  })
})
