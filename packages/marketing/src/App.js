import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
export default function App({ history }) {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
