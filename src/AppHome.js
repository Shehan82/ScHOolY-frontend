import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { auth } from "./components/firebase";
import ChangeStudentDetails from "./components/Home/ChangeStudentDetails";

function AppHome() {
  auth.onAuthStateChanged((user) => {
    console.log(user);
  });

  console.log(auth.currentUser);
  console.log("appHome");
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={App} />
          {/* <Route path="/home/updateStudent" component={ChangeStudentDetails} /> */}

          <Route path="/signup" exact component={SignUp} />

          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppHome;
