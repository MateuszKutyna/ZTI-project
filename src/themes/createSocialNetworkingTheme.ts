import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core";

import colors, { Colors } from "./colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    colors: Colors;
  }
  interface ThemeOptions {
    colors?: Colors;
  }
}

const createSocialNetworkingTheme = (options: ThemeOptions): Theme => {
  return createMuiTheme({
    colors,
    ...options,
  });
};

export default createSocialNetworkingTheme;
