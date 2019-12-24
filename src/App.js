import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./views/Menu";
import Checkout from "./views/Checkout";
import PizzaLogo from "./components/PizzaLogo";
import LoginModal from "./components/LoginModal";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
    textTransform: "uppercase",
  },
  toolbar: theme.mixins.toolbar,
}));

export default function App() {
  const styles = useStyles();

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <PizzaLogo />
          <Typography
            variant="h4"
            className={styles.title}
            component={Link}
            to="/"
          >
            Pizza test
          </Typography>
          <LoginModal />
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <div className={styles.toolbar} />
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
