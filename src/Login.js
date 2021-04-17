import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Login.css";
import axios from "./axios";
import { auth } from "./components/firebase";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const sendData = () => {
    console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        seterror(err.message);
      });
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setemail(e.target.value);
        }}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        type="password"
        name=""
        id=""
        placeholder="password"
      />
      <Link to={`/home`}>
        <button onClick={sendData}>ksjfsjkhdf</button>
      </Link>
    </div>
  );
}

export default Login;
