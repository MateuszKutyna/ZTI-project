import React from "react";
import { Redirect } from "react-router-dom";
import { SIGN_IN_PATH } from "../../../Routing/paths";

const Index: React.FC = () => <Redirect to={SIGN_IN_PATH} />;

export default Index;
