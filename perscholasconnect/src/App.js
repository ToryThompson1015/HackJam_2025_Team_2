import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/LoginPage/Login";
import Register from "./components/Pages/SignUp/Register";
import HomePageHero from "./components/Pages/HomePage/HeroSection/homepageHero";
import AboutPage from "./components/Pages/About/about";
import CreateProfilePage from "./components/Pages/CreateProfilePage/createProfile";
import UserProfilePage from "./components/Pages/UserProfilePage/userProfile";
import EventsPage from "./components/Pages/EventsPage/events";
import AlumniPage from "./components/Pages/Alumni/alumni";
import MentorshipPage from "./components/Pages/MentorshipPage/mentorship";
import NewLearnersPage from "./components/Pages/NewLearnersPage/newlearners";
import SignedInNavBar from "./components/SignedInNavBar/NavBar";

import Dashboard from "./components/Pages/Dashboard/dashboard";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        {location.pathname !== "/dashboard" && <SignedInNavBar />}

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePageHero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/createaccount" element={<CreateProfilePage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/meetup" element={<EventsPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/newlearners" element={<NewLearnersPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
