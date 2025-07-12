import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Pages/Login';      // <-- you'll create this next
import Register from './Pages/Register';  // <-- and this too
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-section">
          <h1>Per Scholas Connect</h1>
        </div>
        <div className="nav-buttons">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>
      </div>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
