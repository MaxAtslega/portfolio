import { createGlobalStyle } from 'styled-components'
import normalize from '@/styles/normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font: ${(props) => props.theme.fontSizes.md};
    height: 100vh;

    color: ${(props) => props.theme.colors.neutral};
    background: ${(props) => props.theme.colors.background.default};
  }
`

export default GlobalStyle
