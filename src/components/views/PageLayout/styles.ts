import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    body: {
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.colors.backgroundGrey,
      },
    },
  },
  box: {
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.spacing(1),
      boxShadow: "0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
  },
  topGradient: {
    background: `linear-gradient(to bottom, ${theme.colors.paleGrey}, ${theme.colors.white} 210px)`,
  },
}));

export default useStyles;
