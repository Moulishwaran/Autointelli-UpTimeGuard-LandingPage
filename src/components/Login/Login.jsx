// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import photo from "../../assets/uptimegaurd.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const navigate = useNavigate();
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Arjunajj" && password === "password") {
      setError("");
      navigate("/lostpassword");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="card-login-card">
      <form onSubmit={handleSubmit} className="onsubmit">
        <h4 className="login-onphoto">
          <img src={photo} alt="logo" className="logo-img" />
          Uptime Guard
        </h4>

        <h1 className="welcome-login">Welcome back!</h1>
        <div className="login-input">
          <label htmlFor="email" className="login-mail">
            Enter Your e-mail
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. info@example.com"
            onChange={handleUsernameChange}
          />
          {error && <div className="login-required">Email is required</div>}

          <label htmlFor="password" className="login-password">
            Enter Your Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="******"
            onChange={handlePasswordChange}
          />
          {error && (
            <div className="login-requiredpassword">Password is required</div>
          )}

          <button type="submit" className="btn btn-success login-submit-btn">
            Login
          </button>

          <div className="login-remember">
            <label htmlFor="rememberMe">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <span style={{ marginLeft: "5px" }}>Remember Me</span>
            </label>
            <p className="login-lost">
              <a href="lost" className="login-anchor">
                Lost Password?
              </a>
            </p>
          </div>
        </div>

        <div className="login-terms">
          <a href="resister" className="login-anchorjoin">
            Join now,{" "}
          </a>
          <a href="resister" className="login-anchorjoin">
            Create your FREE account
          </a>
        </div>
        <p className="login-uptime">UptimeGaurd @ 2024. All Rights Reserved.</p>
      </form>
    </div>
  );
}

export default Login;
