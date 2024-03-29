import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./css/Login.css";
import axios from "./axios";
import { auth } from "./components/firebase";
import Button from "@material-ui/core/Button";

function SignUp() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const history = useHistory();

  const sendData = () => {
    console.log(email, password);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        seterror(err.message);
      });
  };
  return (
    <div className="container">
      <div className="box_container">
        <div className="box_header">
          <h3>ScHOolY - SIGN UP</h3>
        </div>
        {error ? (
          <div className="error_div">{error}</div>
        ) : (
          <div className="notError_div"></div>
        )}

        <div className="box_content">
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            id="email"
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            name=""
            id="password"
            placeholder="Password"
          />

          <button className="btnInner" onClick={sendData}>
            SignUp
          </button>

          <div className="text_container">
            <h4 className="text">
              Alredy have an account?{" "}
              <Link className="btn" to="/">
                <span className="spn">Login here</span>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
