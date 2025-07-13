import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/LoginPage/Login";
import Register from "./components/Pages/SignUp/Register";
import HomePageHero from "./components/Pages/HomePage/HeroSection/homepageHero";
import AboutPage from "./components/Pages/About/about";
import CreateProfilePage from "./components/Pages/CreateProfilePage/createProfile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePageHero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/createaccount" element={<CreateProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
