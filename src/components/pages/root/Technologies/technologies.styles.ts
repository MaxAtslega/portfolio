import styled from 'styled-components'

export const Container = styled.div`
  p {
    margin-top: ${(props) => props.theme.spacing.custom(1)};
    margin-bottom: ${(props) => props.theme.spacing.custom(0.5)};
  }
`

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${(props) => props.theme.spacing.xs};
  margin: 0 -${(props) => props.theme.spacing.xs};
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: ${(props) => props.theme.colors.background.light};
  margin-left: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.xs};

  svg {
    padding-right: ${(props) => props.theme.spacing.xs};
    color: ${(props) => props.color};
  }
`
