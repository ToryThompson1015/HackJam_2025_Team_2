import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignedOutNavBar from "../../SignedOutNavBar/NavBar";
import LoginPage from "../LoginPage/Login";
import SignUpImage from "../../../assets/images/signup.png";

import "./styled.css";

function CreateAccount() {
  const navigatetoUserProfile = useNavigate();

  const [role, setRole] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigatetoUserProfile("/userprofile");
  };
  return (
    <>
      <SignedOutNavBar />
      <div className="signin-container">
        <div className="signin-form">
          <div className="signup-image">
            <img src={SignUpImage} alt="Hand with pen" />
          </div>
          <h2>Let's get started!</h2>
          <p className="subtext">
            Please enter your account information below:
          </p>
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name" />
          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name" />
          <label>Username or Preferred Name</label>
          <input
            type="username"
            placeholder="Enter a user name or your preferred name"
          />
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option>
            <option value="she">She</option>
            <option value="he">He</option>
            <option value="they">They</option>
            <option value="ze/zie">Ze</option>
            <option value="xe">Xe</option>
            <option value="ver">Ver</option>
            <option value="per">Per</option>
            <option value="e/ey">E/Ey</option>
            <option value="fae">Fae</option>
            <option value="aer">Aer/Aers</option>
            <option value="elle">Elle</option>
          </select>
          <label>Zip Code</label>
          <input type="zipcode" placeholder="Enter your zip code" />
          <label>Role to Per Scholas:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select your role</option>
            <option value="alumni">Alumni</option>
            <option value="mentor">Community Mentor</option>
            <option value="learner">New Learner</option>
            <option value="learner">Per Scholas Staff</option>
            <option value="learner">Corporate Partner</option>
          </select>
          <label>
            Course graduated from or currently enrolled as new learner:
          </label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select the course you graduated from</option>
            <option value="SE">Software Engineering</option>
            <option value="AWS">AWS re/Start</option>
            <option value="DekstopSupport">End User Desktop Support</option>
            <option value="IT">IT Support</option>
            <option value="DataTech">IT Data Center Technician</option>
            <option value="Security">IT Support & Security Fundamentals</option>
            <option value="Salesforce">Salesforce Administrator</option>
            <option value="HelpDesk">Help Desk</option>
            <option value="TEKData">TEK Data Center</option>
            <option value="TEKFuture">
              Future Powered by TEKSystems Course
            </option>
          </select>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />{" "}
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
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
      </div>
    </>
  );
}

export default CreateAccount;
