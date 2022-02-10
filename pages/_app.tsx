import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import Container from "@mui/material/Container"
import { ThemeProvider } from "styled-components"
import Footer from "@components/Footer"
import theme from "@styles/theme"
import { CssBaseline } from "@mui/material"
import Header from "@components/Header"

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 12, mb: 6 }}>
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} />
        </AnimatePresence>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
