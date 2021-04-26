import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import SignUpView from "./SignUpView";

const SignUp: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);

  const onSignUp = async () => {};

  return <SignUpView loading={loading} onSignUp={onSignUp} />;
};

export default SignUp;
