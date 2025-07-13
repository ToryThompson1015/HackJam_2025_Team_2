import { Link } from "react-router-dom";
import React from "react";
import logoImage from "../../assets/images/logo.jpg";
import toryProfile from "../../assets/images/staffprofile.jpg";
import "./styles.css";

function NavBar() {
  return (
    <div className="App">
      <nav className="Navbar">
        <div className="MainNav">
          <div className="Nav-logo">
            <img src={logoImage} alt="PerScholasConnectsLogo" />
          </div>

          <div className="Nav-Links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/alumni">Alumni</Link>
              </li>
              <li>
                <Link to="/mentorship">Mentorship</Link>
              </li>
              <li>
                <Link to="/newlearners">Learners</Link>
              </li>
              <li>
                <Link to="/contactmeetup">Events</Link>
              </li>
              <li>
                <Link to="/userprofile">Profile</Link>
              </li>
            </ul>
          </div>
          <div className="Profile">
            <img src={toryProfile} alt="Profile" className="ProfileImage" />
          </div>
          <button className="LogOutButton">Logout</button>
        </div>
      </nav>
      <header className="App-header"></header>
    </div>
  );
}

export default NavBar;
