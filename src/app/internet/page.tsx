import Internet from '@/components/pages/Internet/Internet'
import { Suspense } from 'react'
import CustomerProvider from '@/providers/customer/CustomerProvider'
import Loading from '@/components/atoms/Loading/Loading'
import { findAllServices } from '@/utils/utils'

export default async function InternetPage() {
  const data = await findAllServices()

  return (
    <Suspense fallback={<Loading centered />}>
      <CustomerProvider><Internet data={data} /></CustomerProvider>
    </Suspense>
  )
}
