import React, { useMemo } from "react";

import { Box, BoxProps, Container } from "@material-ui/core";

import useStyles from "./styles";

interface Props extends BoxProps {
  withBottomPadding?: boolean;
  withTopPadding?: boolean;
  withTopGradient?: boolean;
}

const PageLayout: React.FC<Props> = ({
  className,
  withBottomPadding = false,
  withTopPadding = false,
  withTopGradient = false,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" disableGutters>
      <Box
        className={`${classes.box} ${
          (withTopGradient && classes.topGradient) || ""
        } ${className ?? ""}`}
        mt={4}
        pt={withTopPadding ? 6.5 : 0}
        pb={withBottomPadding ? 10 : 0}
        {...props}
      />
    </Container>
  );
};

export default PageLayout;
