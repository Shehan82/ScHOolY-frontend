import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./css/Login.css";
import axios from "./axios";
import { auth } from "./components/firebase";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const history = useHistory();

  useEffect(() => {
    console.log(auth.currentUser);
  }, []);

  const sendData = () => {
    // console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/home");
      })
      .catch((err) => {
        seterror(err.message);
      });

    return <Redirect to="/signup" />;
  };
  return (
    <div className="container">
      <div className="box_container">
        <div className="box_header">
          <h3>ScHOolY - LOG IN</h3>
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

          {/* <Link to={`/home`}> */}
          <button className="btnInner" onClick={sendData}>
            Login
          </button>
          {/* </Link> */}
          <div className="text_container">
            <h4 className="text">
              Don't have an account?{" "}
              <Link className="btn" to="/signup">
                <span className="spn">SignUp here</span>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
