import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome back!</h2>
        <p className="subtext">Login to access all your data</p>

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email address" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="primary-btn">Create an account</button>

        <div className="divider">
          <hr />
          <span>Continue with</span>
          <hr />
        </div>

        <button className="social-btn google">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
          Login with Google
        </button>

        <button className="social-btn facebook">
          <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" />
          Login with Facebook
        </button>

        <p className="register-text">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </div>

      <div className="login-image">
        <img
          src="https://images.unsplash.com/photo-1581349482160-ef2c7d1e9f6c?auto=format&fit=crop&w=800&q=80"
          alt="Styled model"
        />
      </div>
    </div>
  );
}

export default Login;
