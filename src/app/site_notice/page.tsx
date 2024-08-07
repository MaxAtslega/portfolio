'use client'

import { NextPage } from 'next'
import { Container } from '@/components/shared/Container'

const SiteNotice: NextPage = () => {
  return (
    <Container>
      <h1>Site Notice</h1>
      <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
      <p>
        Max Atslega
        <br />
        Holzhofstra&szlig;e 14C
        <br />
        32791 Lage
      </p>

      <h2>Contact</h2>
      <p>
        Phone: 05232 9287212
        <br />
        E-mail: hello@atslega.dev
      </p>
    </Container>
  )
}

export default SiteNotice
