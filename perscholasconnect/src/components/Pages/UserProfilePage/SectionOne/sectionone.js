import React from "react";
import badgeMaverick from "../../../../assets/images/blackcircle.png";
import badgeCaptain from "../../../../assets/images/redribbon.png";
import badgeLegend from "../../../../assets/images/blackshield.png";
import badgeCommander from "../../../../assets/images/blueribbon.png";
import "./styled.css";

const SectionOne = () => {
  return (
    <div className="showcase-container">
      <h2 className="showcase-title">Tory T's Dashboard</h2>
      <div className="showcase-flex">
        {/* Left Side */}
        <div className="showcase-card">
          <p className="showcase-name">Tory Thompson</p>
          <p>Preffered Name: "Mr. T"</p>
          <p>Per Scholas Staff</p>
          <p>Atlanta, GA</p>

          <div className="showcase-section">
            <p>Director, Technical Instruction</p>
            <p>The man with the plans</p>
            <p>IT-Support Program Graduate</p>
            <p>May 2017</p>
          </div>

          <div className="showcase-section">
            <p className="showcase-section-title">
              Additional Per Scholas Certifications:
            </p>
            <ul className="showcase-list">
              <li>AWS</li>

              <li>Google IT</li>
              <li>CompTIA</li>
            </ul>
          </div>

          <div className="showcase-section">
            <p className="showcase-section-title">About John:</p>
            <p>Passionate mentor and tech advocate.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="showcase-card">
          <h4 className="showcase-dashboard-title">Achievement Dashboard</h4>
          <p>
            <strong>Mentor Rating:</strong> ⭐⭐⭐⭐☆
          </p>
          <p className="showcase-badges-title">Badges Earned:</p>
          <div className="showcase-badges">
            <div className="badge badge-gray badge-vertical">
              <img
                src={badgeMaverick}
                alt="Mentoring Maverick badge"
                className="badge-img"
              />
              Mentoring Maverick
            </div>
            <div className="badge badge-red badge-vertical">
              <img
                src={badgeCaptain}
                alt="Community Captain badge"
                className="badge-img"
              />
              Community Captain
            </div>
            <div className="badge badge-yellow badge-vertical">
              <img
                src={badgeLegend}
                alt="Learning Legend badge"
                className="badge-img"
              />
              Learning Legend
            </div>
            <div className="badge badge-green badge-vertical">
              <img
                src={badgeCommander}
                alt="Career Commander badge"
                className="badge-img"
              />
              Career Commander
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
