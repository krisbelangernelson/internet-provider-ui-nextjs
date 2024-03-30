import type { NotificationData } from '@/types/notification'
import Modal from '@/components/atoms/Modal/Modal'

interface NotificationModalProps {
  close: () => void
  show: boolean
  data: NotificationData
}

export default function NotificationModal({ close, show, data }: NotificationModalProps) {
  const { title, message } = data

  return (
    <Modal show={show} onHide={close} title={title}>
      {message}
    </Modal>
  )
}
