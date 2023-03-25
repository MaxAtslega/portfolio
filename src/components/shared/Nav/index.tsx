import { Container } from '@/components/shared/Container'
import { Content, Info, NavItem, NavList, NLink, Mail } from '@/components/shared/Nav/Nav.styles'
import { GrMail } from 'react-icons/gr'
import React from 'react'

const Nav: React.FC = () => {
  return (
    <header>
      <Container>
        <Content>
          <Info>
            <span>Max</span>
            <Mail href={'mailto:hello@atslega.dev'}>
              <GrMail />
              <div>hello@atslega.dev</div>
            </Mail>
          </Info>
          <NavList>
            <NavItem>
              <NLink href={'https://atslega.dev/twitch'} alt={'Twitch'}>
                Twitch
              </NLink>
            </NavItem>
            <NavItem>
              <NLink href={'https://atslega.dev/discord'} alt={'Discord'}>
                Discord
              </NLink>
            </NavItem>
            <NavItem>
              <NLink href={'https://atslega.dev/github'} alt={'GitHub'}>
                GitHub
              </NLink>
            </NavItem>
          </NavList>
        </Content>
      </Container>
    </header>
  )
}

export default Nav
