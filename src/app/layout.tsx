import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { type ReactNode } from 'react'
import Header from '@/components/organisms/Header/Header'
import Footer from '@/components/organisms/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ping! ISP',
  description: 'Blaze your path on the net.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          {/* <StickyAlert text={alertMsg} variant="danger" /> */}
          <Header />
          <main id="page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
