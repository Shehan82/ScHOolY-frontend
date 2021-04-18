import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { auth } from "./components/firebase";

function AppHome() {
  console.log(auth.currentUser);
  console.log("appHome");
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" exact component={App} />

          <Route path="/signup" exact component={SignUp} />

          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppHome;
