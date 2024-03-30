import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact support from Ping!',
}

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Contact
      </div>
    </main>
  )
}
