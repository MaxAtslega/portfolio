import styled from 'styled-components'

export const Container = styled.section`
  padding-bottom: ${(props) => props.theme.spacing.custom(3)};
`

export const Title = styled.span`
  margin-bottom: ${(props) => props.theme.spacing.md};

  &:before {
    content: '/';
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.primary};
    padding-right: ${(props) => props.theme.spacing.xs};
  }
`
