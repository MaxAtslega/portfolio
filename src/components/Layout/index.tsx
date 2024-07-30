'use client'

import Nav from '@/components/shared/Nav'
import { Roboto } from 'next/font/google'
import Footer from '@/components/shared/Footer'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <body className={roboto.className}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </body>
  )
}
