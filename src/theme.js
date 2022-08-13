import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4573FF',
    },
    secondary: {
      main: '#7345ff',
    },
    error: {
      main: '#ff4573',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
