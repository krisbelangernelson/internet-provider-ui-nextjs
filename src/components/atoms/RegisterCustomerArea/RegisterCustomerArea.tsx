import { REGISTER } from '@/constants'
import { useRouter } from 'next/navigation'

interface RegisterCustomerAreaProps {
  className?: string
}

export default function RegisterCustomerArea({ ...rest }: RegisterCustomerAreaProps) {
  const router = useRouter()

  return (
    <div {...rest}>
      <div>{REGISTER.customerArea.title}</div>
      <button
        onClick={() => {
          router.push(REGISTER.customerArea.link)
        }}
        className="mt-2 btn-primary"
      >
        {REGISTER.customerArea.label}
      </button>
    </div>
  )
}
