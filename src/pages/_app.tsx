import type { AppProps } from 'next/app'

import SEO from '@/components/shared/SEO'
import GlobalStyle from '@/styles/globalStyles'
import { theme } from '@/constants/theme'
import { ThemeProvider } from 'styled-components'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title="Start" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
