import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import PageLayout from "../../PageLayout";
import SignUpForm, { SignUpFormState } from "./SignUpForm";
import { SIGN_IN_PATH } from "../../../../Routing/paths";

interface Props {
  loading: boolean;
  onSignUp(formData: SignUpFormState): void;
}

const SignUpView: React.FC<Props> = ({ loading, onSignUp }) => {
  const history = useHistory();
  return (
    <PageLayout withBottomPadding withTopPadding>
      <Container maxWidth="xs">
        <Box px={2} boxSizing="border-box">
          <Typography color="textPrimary" gutterBottom variant="h6">
            Create your account
          </Typography>
          <Typography gutterBottom>
            Enjoy a fast and simple registration.
          </Typography>
        </Box>
        <SignUpForm loading={loading} onSubmit={onSignUp} />
        <Button onClick={() => history.push(SIGN_IN_PATH)}>Sign In</Button>
      </Container>
    </PageLayout>
  );
};

export default SignUpView;
