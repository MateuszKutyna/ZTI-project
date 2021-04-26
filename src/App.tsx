import React from "react";
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import defaultTheme from "./themes/defaultTheme";
import AwsConfig from "./aws-exports";

import Routes from "./Routing/Routes";

// Amplify.configure(AwsConfig);

const App: React.FC = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <Routes />
    </Router>
  </MuiThemeProvider>
);

export default App;

// export default withAuthenticator(App);
