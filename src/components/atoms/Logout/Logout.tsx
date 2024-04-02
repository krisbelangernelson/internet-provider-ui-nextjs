import { useCustomerContext } from '@/providers/customer/CustomerContext'
import api from '@/utils/api'
import { useRouter } from 'next/navigation'

// TODO: consts
export default function Logout() {
  const router = useRouter()
  const { clearCustomer } = useCustomerContext()

  return (
    <button
      onClick={() => {
        void api.logout().then(() => {
          // router.refresh()
          router.push('/')
          clearCustomer()
        })
      }}
      className="btn-primary"
    >
      Logout
    </button>
  )
}
