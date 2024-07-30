'use client'

import SEO from '@/components/shared/SEO'
import GlobalStyle from '@/styles/globalStyles'
import { theme } from '@/constants/theme'
import { ThemeProvider } from 'styled-components'
import Layout from '@/components/Layout'
import StyledComponentsRegistry from '@/lib/registry'

import React from 'react'

export default function App({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SEO title="Start" />
        <Layout>
          {children}
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
    </html>
  )
}
