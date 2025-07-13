import React from "react";
import "./styled.css";

function About() {
  return (
    <>
      <section className="mission-block">
        <div className="mission-left">
          <h2>
            Our
            <br />
            Mission
          </h2>
        </div>
        <div className="mission-right">
          <div className="mission-item">
            <span className="number">1</span>
            <p>
              Strengthen the Per Scholas alumni network and foster collaborative
              relationships with new learners to build a stronger community.
            </p>
          </div>
          <hr />
          <div className="mission-item">
            <span className="number">2</span>
            <p>
              Motivate Per Scholas graduates to continually improve their skills
              through gamification and engagement.
            </p>
          </div>
          <hr />
          <div className="mission-item">
            <span className="number">3</span>
            <p>
              Earn more experience and encourage post-graduate achievements by
              incentivizing the experiences earned.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
