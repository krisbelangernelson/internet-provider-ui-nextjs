import Internet from '@/components/pages/Internet/Internet'
import { Suspense } from 'react'
import Loading from '@/components/atoms/Loading/Loading'
import { findAllServices } from '@/utils/api'

export default async function InternetPage() {
  const data = await findAllServices()

  return (
    <Suspense fallback={<Loading centered />}>
      <Internet data={data} />
    </Suspense>
  )
}
