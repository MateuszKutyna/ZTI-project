import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { SIGN_UP_PATH } from "../../../Routing/paths";

const SignIn: React.FC = () => {
  const history = useHistory();

  return (
    <Box>
      <Typography>SignIn</Typography>
      <Button onClick={() => history.push(SIGN_UP_PATH)}>Sign Up</Button>
    </Box>
  );
};

export default SignIn;
