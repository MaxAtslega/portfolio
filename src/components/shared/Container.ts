import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  min-width: 70%;

  margin-left: auto;
  margin-right: auto;

  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
`
