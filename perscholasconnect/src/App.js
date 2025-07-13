import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SignedInNavBar from "./components/NavBar/NavBar";
import Homepage from "./components/Pages/HomePage/HeroSection/homepageHero";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/LoginPage/Login";
import Register from "./components/Pages/SignUp/Register";
import Dashboard from "./components/Pages/Dashboard/dashboard";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/dashboard" && <SignedInNavBar />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
