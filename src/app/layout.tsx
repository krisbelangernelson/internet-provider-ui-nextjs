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
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col h-dvh">
          {/* <StickyAlert text={alertMsg} variant="danger" /> */}
          <Header />
          <main id="page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
