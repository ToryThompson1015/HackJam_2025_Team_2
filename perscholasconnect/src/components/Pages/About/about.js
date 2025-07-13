import React from "react";
import SignedOutNavBar from "../../SignedOutNavBar/NavBar";
import aboutImage from "../../../assets/images/about.jpg";
import "./styled.css";

function About() {
  return (
    <>
      <SignedOutNavBar />
      <div className="PSMissionGraphic">
        <img src={aboutImage} alt="PerScholas Mission and Values" />
      </div>

      <section className="mission-block">
        <div className="mission-right">
          <div className="mission-item">
            <div className="number">Our Mission</div>
            <p>
              Strenghten the Per Scholas alumni network and foster collaborative
              relationships with the new learners to build a stronger community
            </p>
            <p>
              Motivate Per Scholas graduates to continually improve their tech
              and soft-skills through gamification and engagement
            </p>
            <p>
              Encourage post-graduate achievements by incentivizing the
              experiences earned through learning new skills, perfecting tech
              education and being active in this community
            </p>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
}
export default About;
