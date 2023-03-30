import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding-bottom: ${(props) => props.theme.spacing.custom(1)};
`

export const Title = styled.span`
  padding-bottom: ${(props) => props.theme.spacing.md};

  &:before {
    content: '/';
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.primary};
    padding-right: ${(props) => props.theme.spacing.xs};
  }
`
