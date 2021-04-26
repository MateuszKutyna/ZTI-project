import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

import SignInView from "./SignInView";
import { SignInFormState } from "./SignInView/SignInForm";

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSignIn = async ({ email, password }: SignInFormState) => {};

  return <SignInView loading={loading} onSignIn={onSignIn} />;
};

export default SignIn;
