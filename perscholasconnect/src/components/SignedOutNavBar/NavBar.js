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
<<<<<<< HEAD:perscholasconnect/src/components/SignedOutNavBar/NavBar.js
                <Link to="/createaccount">Profile</Link>
=======
                <a href="/dashboard">Dashboard</a>
>>>>>>> 46fa5c2f16063759c308871dd6e950a5ced4a62b:perscholasconnect/src/components/NavBar/NavBar.js
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