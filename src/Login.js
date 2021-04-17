import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Login.css";
import axios from "./axios";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const sendData = () => {};
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
      <Link to={`/`}>
        <button onClick={sendData}>ksjfsjkhdf</button>
      </Link>
    </div>
  );
}

export default Login;
