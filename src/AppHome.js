import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import Login from "./Login";

function AppHome() {
  return (
    <Router>
      <div>
        {/* <div>helloooooo</div>
        <Link to="/">
          <button>login</button>
        </Link> */}

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={App} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppHome;
