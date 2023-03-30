import React from 'react'
import { FooterContainer, Content, Nav } from '@/components/shared/Footer/footer.styles'
import { Container } from '@/components/shared/Container'
import { NLink } from '@/components/shared/Nav/Nav.styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Content>
          <Nav>
            <ul>
              <li>
                <NLink href={'/site_notice'}>Site Notice</NLink>
              </li>
              <li>
                <NLink href={'/privacy_policy'}>Privacy Policy</NLink>
              </li>
            </ul>
          </Nav>
          <span>
            Copyright © 2023 <NLink href={'https://atslega-media.de'}>AtslegaMedia</NLink>
          </span>
        </Content>
      </Container>
    </FooterContainer>
  )
}

export default Footer
