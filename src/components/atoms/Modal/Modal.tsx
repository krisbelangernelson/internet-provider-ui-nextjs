import CloseButton from '@/components/atoms/CloseIconButton/CloseIconButton'
import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  onHide: () => void
  show: boolean
  title: string
  width?: string
}

export default function Modal(props: ModalProps) {
  const { children, onHide, show, title, width } = props

  return (
    <>
      <div id="overlay" className={`fixed ${show ? '' : 'hidden'} z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60`}></div>

      <div
        id="dialog"
        className={`${show ? '' : 'hidden'} fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:min-w-min md:max-w-${width === 'fit' ? 'fit' : 'screen-sm'} max-h-screen bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg outline-none overflow-x-auto overflow-y-auto`}
      >
        <div className="flex items-center justify-between py-0 md:py-2 rounded-t dark:border-gray-600">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <CloseButton onClick={() => { onHide() }} />
        </div>
        <div className="py-5 border-t border-b border-gray-300">
          {children}
        </div>
        <div className="flex justify-end">
          <button id="close" className="px-5 py-2 btn-primary text-white cursor-pointer rounded-md" onClick={() => { onHide() }}>
            Close
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>
    </>
  )
}
