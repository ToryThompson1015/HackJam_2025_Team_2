import React from "react";
import toryProfile from "../../assets/images/staffprofile.jpg";
import "./styles.css";

function NavBar() {
  return (
    <div className="App">
      <nav className="Navbar">
        <div className="MainNav">
          <div className="Nav-header">
            <h1>Per Scholas Connects</h1>
          </div>

          <div className="Nav-Links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact">About</a>
              </li>
              <li>
                <a href="/contact">Alumni</a>
              </li>
              <li>
                <a href="/about">Mentorship</a>
              </li>
              <li>
                <a href="/contact">New Learners</a>
              </li>
              <li>
                <a href="/contact">Events</a>
              </li>

              <li>
                <a href="/dashboard">Dashboard</a>
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