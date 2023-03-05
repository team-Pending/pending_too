import React from "react";
import { useState } from "react";
import Mediaphile from "../Mediaphile";

const LoginForm = () => {
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };
  const handleSwitchToSignUp = () => {
    setSignUp(true);
  };
  const handleSwitchToLogin = () => {
    setSignUp(false);
  };
  if (signUp) {
    return (
      <div className="login-form">
        <h2>Sign Up!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email Address"
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <button type="submit">Signup</button>
          <button onClick={handleSwitchToLogin}>Back to Login</button>
        </form>
        <div className="title-container">
          <Mediaphile />
        </div>
      </div>
    );
  }
  return (
    <div className="login-form">
      <h2>Login!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <button type="submit">Login</button>
        <button onClick={handleSwitchToSignUp}>Sign up Instead</button>
      </form>
      <div className="title-container">
        <Mediaphile />
      </div>
    </div>
  );
};

export default LoginForm;
