import { colors, background } from './colors';
import { buttonStyles } from './components/button';

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1280,
      lg: 1440,
      xl: 1920,
    },
  },
  background,
  colors,
  textFont: 'Open Sans',
  typography: {
    fontFamily: 'Open Sans',
    button: {
      textTransform: 'none',
    },
  },
  spacing: 1,
  shape: {
    borderRadius: 1,
  },
  palette: {
    primary: {
      main: colors.smalt,
    },
    secondary: {
      main: colors.pattensBlue,
    },
    ...colors,
  },
  components: {
    MuiButton: buttonStyles,
  },
});
