import React from "react";
import "./styled.css";
import certImg from "../../../../assets/images/certification.png";
import courseImg from "../../../../assets/images/course.png";
import planImg from "../../../../assets/images/plan.png";
import eventImg from "../../../../assets/images/social-event.png";

const SectionThree = () => {
  return (
    <div className="recommendations-container">
      <div className="recommendations-grid">
        <div className="recommendation-card">
          <img
            src={certImg}
            alt="Certification"
            className="recommendation-img"
          />
          <h3 className="recommendation-title">
            Professional Certification Recommendations
          </h3>
        </div>
        <div className="recommendation-card">
          <img src={courseImg} alt="Course" className="recommendation-img" />
          <h3 className="recommendation-title">
            Per Scholas Course Suggestions
          </h3>
        </div>
        <div className="recommendation-card">
          <img
            src={planImg}
            alt="Learning Plan"
            className="recommendation-img"
          />
          <h3 className="recommendation-title">
            Learning and Interview Prep Plans
          </h3>
        </div>
        <div className="recommendation-card">
          <img
            src={eventImg}
            alt="Social Event"
            className="recommendation-img"
          />
          <h3 className="recommendation-title">Skill-building Social Events</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
