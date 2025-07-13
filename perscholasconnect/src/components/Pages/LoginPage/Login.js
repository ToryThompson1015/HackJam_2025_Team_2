import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import SignedOutNavBar from "../../SignedOutNavBar/NavBar";
import CreateAccountPage from "../SignUp/Register";
import LoginImage from "../../../assets/images/SignIn.jpg";

import "./Login.css";

function Login() {
  const navigatetoHomepage = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigatetoHomepage("/home");
  };
  return (
    <>
      <SignedOutNavBar />
      <div className="login-container">
        <div className="login-form">
          <h2>Welcome back!</h2>
          <p className="subtext">Please enter your email and password</p>

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button className="primary-btn" onClick={handleSubmit}>
            Submit
          </button>

          <div className="divider">
            <hr />
            <span>Continue with</span>
            <hr />
          </div>

          <button className="social-btn google">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
            />
            Login with Google
          </button>

          <p className="register-text">
            Don’t have an account? <Link to={CreateAccountPage}>Sign Up</Link>
          </p>
        </div>

        <div className="login-image">
          <img src={LoginImage} alt="Students and Alumni working together" />
        </div>
      </div>
    </>
  );
}

export default Login;
