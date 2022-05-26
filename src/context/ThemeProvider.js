import { createTheme, ThemeProvider as TP } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      light: 'rgba(0, 150, 136, 0.05)',
      main: '#009688',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#fff',
      dark: '#F4F4F4',
    },
  },
});

export const ThemeProvider = TP;