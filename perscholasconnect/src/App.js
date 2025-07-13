import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./components/Pages/HomePage/HeroSection/homepageHero";
import Footer from "./components/Footer/Footer";
// import Login from './Pages/Login';
// import Register from './Pages/Register';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}
export default App;
