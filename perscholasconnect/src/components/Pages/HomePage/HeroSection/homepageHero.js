import React from "react";
import heroImage from "../../../../assets/images/heroImage.jpg";
import "./styled.css";

function HomePageHero() {
  return (
    <>
      <div className="HeroContainer">
        <img src={heroImage} alt="Hero" className="HeroImage" />
        <div className="HeroText">
          <h1>Welcome back to Per Scholas Connects, Tory!</h1>
          <p>Your journey to success starts here.</p>
        </div>
      </div>

      <div className="image-row">
        <img
          src="https://mentoringuniversity.com/wp-content/uploads/2024/08/Essential-Guide-to-Mentoring.jpg"
          alt="Students Working"
        />
        <img
          src="https://www.interfolio.com/wp-content/uploads/Blog_MentoringStudentsGuide-scaled.jpg"
          alt="Mentor with Student"
        />
      </div>
    </>
  );
}
export default HomePageHero;
