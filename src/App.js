import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./views/Menu";
import Checkout from "./views/Checkout";

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}
