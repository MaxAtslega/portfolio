import { AppBar as MuiAppBar, Container } from "@mui/material"
import styled from "styled-components"

import Link from "next/link"

const Nav = styled.div`
  display: flex;
  padding: 10px 0;

  @media only screen and (max-width: 620px) {
    justify-content: center;
  }
`
interface StyledLinkProps {
  theme: any
}

const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: none;
  color: #ffffff;
  margin-right: 20px;

  &:hover {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`

const AppBar = styled(MuiAppBar)`
  background: none;
  box-shadow: none;
`

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Nav>
          <Link href={"/"} passHref>
            <StyledLink>Start</StyledLink>
          </Link>
          <Link href={"/blog"} passHref>
            <StyledLink>Blog</StyledLink>
          </Link>
          <Link href={"https://start.atslega.network"} passHref>
            <StyledLink>Services</StyledLink>
          </Link>
          <Link href={"https://status.atslega.network"} passHref>
            <StyledLink>Status</StyledLink>
          </Link>
        </Nav>
      </Container>
    </AppBar>
  )
}
