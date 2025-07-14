// src/Pages/UserProfilePage/UserProfile.js
import React from "react";
import SectionOne from "../UserProfilePage/SectionOne/sectionone";
import SectionTwo from "../UserProfilePage/SectionTwo/sectiontwo";
import SignedInNavBar from "../../SignedInNavBar/NavBar";

import "./styled.css";

const UserProfile = () => {
  return (
    <>
      <SignedInNavBar />
      <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center gap-8 p-6">
        <SectionOne />
        <SectionTwo />
      </div>
    </>
  );
};

export default UserProfile;
