import Internet from '@/components/pages/Internet/Internet'
import { Suspense } from 'react'
import Loading from '@/components/atoms/Loading/Loading'
import api from '@/utils/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plans',
  description: 'Check out the internet Plans from Ping!',
}

export default async function InternetPage() {
  const data = await api.findAllServices()

  return (
    <Suspense fallback={<Loading centered />}>
      <Internet data={data} />
    </Suspense>
  )
}
