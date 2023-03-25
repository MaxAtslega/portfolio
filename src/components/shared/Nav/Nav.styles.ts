import styled, { DefaultTheme } from 'styled-components'
import Link from 'next/link'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;

  span {
    color: ${(props) => props.theme.colors.primary};
    padding-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.custom(6)};
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

export const Mail = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.neutral};

  svg {
    padding-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm};
  }

  &:hover {
    opacity: 0.8;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: end;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const NavItem = styled.li`
  list-style: none;
  padding-left: ${(props) => props.theme.spacing.md};
`

export const NLink = styled(Link)`
  color: ${(props) => props.theme.colors.neutral};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`
