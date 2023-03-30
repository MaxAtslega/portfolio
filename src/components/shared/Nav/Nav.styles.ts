import styled, { DefaultTheme } from 'styled-components'
import Link from 'next/link'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Info = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;
  cursor: pointer;

  span {
    color: ${(props) => props.theme.colors.primary};
    user-select: none;

    &:before {
      content: '<';
      color: ${(props) => props.theme.colors.neutral};
    }

    &:after {
      content: ' />';
      color: ${(props) => props.theme.colors.neutral};
    }
  }
`

export const MobileMenuContainer = styled.div`
  display: none;

  ${(props) => props.theme.media.sm} {
    display: block;
  }
`

export const MenuButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.neutral};

  &:hover {
    opacity: 0.6;
  }
`

export const Mail = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.neutral};
  padding-left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.custom(6)};

  svg {
    padding-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm};
  }

  &:hover {
    opacity: 0.8;
  }

  ${(props) => props.theme.media.sm} {
    display: none;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: end;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;

  ${(props) => props.theme.media.sm} {
    position: fixed;
    top: 0;
    width: 70%;
    height: 100vh;
    flex-direction: column;
    justify-content: start;
    z-index: 100;
    background: ${(props) => props.theme.colors.background.light};

    transition: all 0.25s;
  }
`

export const NavItem = styled.li`
  list-style: none;
  padding-left: ${(props) => props.theme.spacing.md};

  ${(props) => props.theme.media.sm} {
    padding-left: ${(props) => props.theme.spacing.sm};
    padding-top: ${(props) => props.theme.spacing.sm};
  }
`

export const NLink = styled(Link)`
  color: ${(props) => props.theme.colors.neutral};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`
