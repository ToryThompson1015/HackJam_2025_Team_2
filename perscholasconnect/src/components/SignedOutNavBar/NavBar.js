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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/createaccount">Alumni</Link>
              </li>
              <li>
                <Link to="/createaccount">Mentorship</Link>
              </li>
              <li>
                <Link to="/createaccount">Learners</Link>
              </li>
              <li>
                <Link to="/createaccount">Events</Link>
              </li>

              <li>
                <Link to="/createaccount">Profile</Link>
                <a href="/dashboard">Dashboard</a>
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
