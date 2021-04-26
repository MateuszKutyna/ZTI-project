import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import PageLayout from "../../PageLayout";

import SignInForm, { SignInFormState } from "./SignInForm";
import { SIGN_UP_PATH } from "../../../../Routing/paths";

interface Props {
  loading: boolean;
  onSignIn(formData: SignInFormState): void;
}

const SignInView: React.FC<Props> = ({ loading, onSignIn }) => {
  const history = useHistory();
  return (
    <PageLayout withBottomPadding withTopPadding>
      <Container maxWidth="xs">
        <Box px={2} boxSizing="border-box">
          <Typography color="textPrimary" gutterBottom variant="h6">
            Sign in
          </Typography>
        </Box>
        <SignInForm loading={loading} onSubmit={onSignIn} />
        <Button
          onClick={() => {
            history.push(SIGN_UP_PATH);
          }}>
          Sign Up
        </Button>
      </Container>
    </PageLayout>
  );
};

export default SignInView;
