import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
  width: 100%;

  border-top: solid 3px ${(props) => props.theme.colors.background.light};
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.media.md} {
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`

export const Nav = styled.nav`
  ul {
    padding: 0;
    margin: 0 0 0 -1rem;
  }
  li {
    list-style: none;
    float: left;
    padding-left: 1rem;
  }

  ${(props) => props.theme.media.md} {
    padding-bottom: 1rem;
  }

  ${(props) => props.theme.media.xs} {
    li {
      width: 100%;
    }
  }
`
