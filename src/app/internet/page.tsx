import Internet from '@/components/pages/Internet/Internet'
import { Suspense } from 'react'
import CustomerProvider from '@/providers/customer/CustomerProvider'

const findAll = async () => {
  const res = await fetch(`${process.env.INTERNET_API}/internet-services`)

  if (!res.ok) {
    throw new Error('Failed to GET findAll for internet-services')
  }

  return res.json()
}

export default async function InternetPage() {
  const data = await findAll()

  return (
    <Suspense fallback={<p>Loading data...</p>}>
      <CustomerProvider><Internet data={data} /></CustomerProvider>
    </Suspense>
  )
}
