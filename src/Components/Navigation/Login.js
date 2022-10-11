import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h3>Login</h3>

      <input type="text" placeholder="type ur id" />
      <input type="password" placeholder="password" />

      <h3>if you dont have an account</h3>
      <h3>create an account !</h3>
      <Link to="/signup">
        <h3>Sign UP</h3>
      </Link>
    </div>
  );
}
