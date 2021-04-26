import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../components/views/Index/Index";
import SignIn from "../components/views/SignIn";
import SignUp from "../components/views/SignUp";

import { SIGN_UP_PATH, SIGN_IN_PATH } from "./paths";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SIGN_UP_PATH} component={SignUp} />
      <Route path={SIGN_IN_PATH} component={SignIn} />
      <Route path="/" component={Index} />
    </Switch>
  );
};

export default Routes;
