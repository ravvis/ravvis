import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme = createMuiTheme({
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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
