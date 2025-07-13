import { Link } from "react-router-dom";
import React from "react";
import logoImage from "../../assets/images/logo.jpg";
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
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Alumni</Link>
              </li>
              <li>
                <Link to="/">Mentorship</Link>
              </li>
              <li>
                <Link to="/">New Learners</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>

              <li>
                <Link to="/">My Profile</Link>
              </li>
            </ul>
          </div>
          <button className="LogOutButton">Sign In</button>
        </div>
      </nav>
      <header className="App-header"></header>
    </div>
  );
}

export default NavBar;
