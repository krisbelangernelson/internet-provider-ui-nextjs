import { ROUTES, FORMS } from '@/constants'
import { useRouter } from 'next/navigation'

// TODO: consts
export default function LoginNoAccess() {
  const router = useRouter()

  return (
    <>
      <div>You must login to access this area.</div>
      <button
        onClick={() => {
          router.push(ROUTES.login)
        }}
        className="mt-2 btn-primary"
      >
        {FORMS.buttons.login.label}
      </button>
    </>
  )
}
