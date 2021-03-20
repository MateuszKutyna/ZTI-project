import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import defaultTheme from "./themes/defaultTheme";

import Routes from "./Routing/Routes";

const App: React.FC = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <Routes />
    </Router>
  </MuiThemeProvider>
);

export default App;
