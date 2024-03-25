import { ReactNode } from 'react'
import { HELP_CHOOSE_HEADERS } from '@/constants'
import { InternetService } from '@/types/InternetService'

interface ModalProps {
  onHide: () => void
  show: boolean
  offers: InternetService[]
}

type Values = Array<string | number>

export default function SpeedDetailsModal(props: ModalProps) {
  const { offers, onHide, show } = props

  // Transpose array, rows become columns and vice versa
  const groupedOffers = offers.reduce((acc: Record<string, Values>, offer) => {
    const keys = Object.keys(offer)
    const values = Object.values(offer) as Values
    keys.forEach((key, index) => {
      if (acc[key] !== undefined) {
        acc[key] = [...acc[key], values[index]]
      }
      else {
        acc[key] = [values[index]]
      }
    })
    return acc
  }, {})

  const renderRowContent = (header: string): ReactNode => {
    let content
    if (header === HELP_CHOOSE_HEADERS[0]) {
      content = groupedOffers.ideal_num_users.map(numUsers => (
        <td key={numUsers} className="text-center">
          {numUsers}
        </td>
      ))
    }
    else if (header === HELP_CHOOSE_HEADERS[1]) {
      content = groupedOffers.ideal_num_devices.map(numDevices => (
        <td key={numDevices} className="text-center">
          {numDevices}
        </td>
      ))
    }
    else {
      content = groupedOffers.bandwidth_down.map((bandwidth, j) => {
        if (header === HELP_CHOOSE_HEADERS[5]) {
          if (Number(bandwidth) <= 70) {
            return (
              <td key={bandwidth} className="text-center">
                N
              </td>
            )
          }
        }
        return (
          <td key={bandwidth} className="text-center">
            Y
          </td>
        )
      })
    }
    return content
  }

  return (
    <>
      <div id="overlay" className={`fixed ${show ? '' : 'hidden'} z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60`}></div>

      <div
        id="dialog"
        className={`${show ? '' : 'hidden'} fixed z-50 md:top-[20rem] left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[56rem] bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg`}
      >
        <div className="flex items-center justify-between py-2 md:py-2 rounded-t dark:border-gray-600">
          <h1 className="text-2xl font-semibold">Choose Your Speed</h1>
          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={() => { onHide() }}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="py-5 border-t border-b border-gray-300">
          <p>
            The speed you want depends on how many people are going to be using the connection, in addition to how many
            devices each person will be using. Here is a table to make sense of what your needs are and the speed you
            should probably choose. All packages have unlimited download and upload limits.
          </p>
          <table className="min-w-full mt-4">
            <thead className="border-b">
              <tr>
                <th></th>
                {groupedOffers.bandwidth_down.map((bandwidth, index) => (
                  <th key={bandwidth} style={{ fontWeight: 'normal' }}>
                    <div className="text-center">
                      <div className="text-4xl" style={{ margin: 0 }}>
                        {bandwidth}
                      </div>
                      <div className="text-xl">Mbps</div>
                      <hr style={{ margin: '3px 0' }} />
                      <div>
                        <span className="text-lg">{groupedOffers.bandwidth_up[index]}</span>
                        {' '}
                        Mbps
                      </div>
                      <div>Upload</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HELP_CHOOSE_HEADERS.map(header => (
                <tr key={header}>
                  <td>{header}</td>
                  {renderRowContent(header)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button id="close" className="px-5 py-2 btn-primary text-white cursor-pointer rounded-md" onClick={() => { onHide() }}>
            Close
          </button>
        </div>
      </div>
    </>
  )
}