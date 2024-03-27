import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function useRedirect(condition: boolean, location: string) {
  const router = useRouter()

  useEffect(() => {
    if (condition) {
      router.push(location)
    }
  }, [condition, location, router])
}
