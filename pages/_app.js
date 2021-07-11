import '../src/index.css';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Head from "next/head";
import pink from "@material-ui/core/colors/pink";

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: "dark",
    primary: {
      main: '#4db6ac'
    },
    secondary: pink,
    background: {
      default: '#0b0e11',
      paper: '#242c37'
    }
  },
});

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ravindra's personal homepage - Developer / Explorer</title>
    </Head>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  </>)
}
