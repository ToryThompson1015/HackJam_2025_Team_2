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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/alumni">Alumni</a>
              </li>
              <li>
                <a href="/mentorship">Mentorship</a>
              </li>
              <li>
                <a href="/newlearners">Learners</a>
              </li>
              <li>
                <a href="/contactmeetup">Events</a>
              </li>

              <li>
                <a href="/userprofile">Profile</a>
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
