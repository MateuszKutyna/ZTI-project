import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { SIGN_IN_PATH } from "../../../Routing/paths";

const SignUp: React.FC = () => {
  const history = useHistory();

  return (
    <Box>
      <Typography>SignUp</Typography>
      <Button onClick={() => history.push(SIGN_IN_PATH)}>Sign In</Button>
    </Box>
  );
};

export default SignUp;
