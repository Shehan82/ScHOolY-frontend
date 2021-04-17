import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";

function AppHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/home" exact component={App} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppHome;
