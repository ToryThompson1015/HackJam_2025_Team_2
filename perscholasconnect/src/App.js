import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignedInNavBar from "./components/NavBar/NavBar";
import Homepage from "./components/Pages/HomePage/HeroSection/homepageHero";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/LoginPage/Login";
import Register from "./components/Pages/SignUp/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SignedInNavBar />
      <Homepage />
      <Register />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>0000





      
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
      {/* <Login />
      <Footer />
      <Register/> */}
    </div>
  );
}
export default App;
