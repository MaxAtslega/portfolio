import Nav from '@/components/shared/Nav'
import { Container } from '@/components/shared/Container'
import { Roboto } from 'next/font/google'
import Footer from '@/components/shared/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Layout({ children }) {
  return (
    <div className={roboto.className}>
      <Nav />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}
