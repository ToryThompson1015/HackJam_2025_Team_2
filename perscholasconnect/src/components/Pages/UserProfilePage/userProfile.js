import React from "react";
import SectionOne from "../UserProfilePage/SectionOne/sectionone";
import SectionTwo from "../UserProfilePage/SectionTwo/sectiontwo";
import SectionThree from "../UserProfilePage/SectionThree/sectionthree";
import SignedInNavBar from "../../SignedInNavBar/NavBar";
import "./styled.css";

const UserProfile = () => {
  return (
    <>
      <SignedInNavBar />
      <div className="user-profile-wrapper">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
};

export default UserProfile;
