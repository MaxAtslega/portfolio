import { Container } from '@/components/shared/Container'
import {
  Content,
  Info,
  NavItem,
  NavList,
  NLink,
  Mail,
  MenuButton,
  MobileMenuContainer,
} from '@/components/shared/Nav/Nav.styles'
import { GrMail } from 'react-icons/gr'
import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { useRouter } from 'next/router'
import social from '@/constants/soical'

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header>
      <Container>
        <Content>
          <Info onClick={() => router.push('/')}>
            <span>Max</span>
            <Mail href={'mailto:hello@atslega.dev'}>
              <GrMail />
              <div>hello@atslega.dev</div>
            </Mail>
          </Info>
          <MobileMenuContainer>
            <MenuButton style={menuOpen ? { opacity: '.6' } : {}} onClick={() => setMenuOpen(!menuOpen)}>
              <HiMenu />
            </MenuButton>
          </MobileMenuContainer>
          <NavList style={menuOpen ? { left: 0 } : { left: '-70%' }}>
            <NavItem>
              <NLink href={social.twitch}>Twitch</NLink>
            </NavItem>
            <NavItem>
              <NLink href={social.discord}>Discord</NLink>
            </NavItem>
            <NavItem>
              <NLink href={social.github}>GitHub</NLink>
            </NavItem>
          </NavList>
        </Content>
      </Container>
    </header>
  )
}

export default Nav
