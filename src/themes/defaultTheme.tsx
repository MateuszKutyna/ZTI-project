import createSocialNetworkingTheme from "./createSocialNetworkingTheme";
import colors from "./colors";

const defaultTheme = createSocialNetworkingTheme({
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.black,
    },
    background: {
      default: colors.white,
    },
  },
  typography: {},
  overrides: {},
});

export default defaultTheme;
