import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import { darkScrollbar } from "@mui/material"

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
        },
      },
    },
  },
  typography: {
    fontFamily: '"Oxygen", monospace',
    fontSize: 13,
    h1: {
      fontSize: "2em",
      fontWeight: 600,
      color: "#FE5E41",
      marginBottom: "0.3rem",
    },
    h2: {
      fontSize: "1.6em",
      fontWeight: 600,
      color: "#FE5E41",
      marginBottom: "0.6em",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 400,
      color: "#ffffff",
      marginBottom: "0.5em",
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      color: "#9a9a9a",
      fontSize: 14,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#C9CACC",
    },
    secondary: {
      main: "#FE5E41",
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
