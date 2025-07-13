import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import SignedOutNavBar from "../../SignedOutNavBar/NavBar";
import LoginPage from "../LoginPage/Login";
// import LoginImage from "../../../assets/images/SignIn.jpg";

import "./styled.css";

function CreateAccount() {
  const navigatetoUserProfile = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigatetoUserProfile("/userprofile");
  };
  return (
    <>
      <SignedOutNavBar />
      <div className="login-container">
        <div className="login-form">
          <h2>Let's get started!</h2>
          <p className="subtext">
            Please enter your account information below:
          </p>
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name" />
          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name" />
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Username or Preferred Name</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />{" "}
          <label>Confirm Password</label>
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
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>

        {/* <div className="login-image">
          <img src={LoginImage} alt="Students and Alumni working together" />
        </div> */}
      </div>
    </>
  );
}

export default CreateAccount;
