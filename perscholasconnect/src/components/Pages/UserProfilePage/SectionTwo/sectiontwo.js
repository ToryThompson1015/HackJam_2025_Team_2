import React from "react";
import "./styled.css";

const SectionTwo = () => {
  return (
    <div className="milestones-container">
      <h2 className="milestones-title">Celebrate Your Milestones</h2>

      {/* Metrics */}
      <div className="milestones-metrics">
        <div>
          <h4 className="milestones-metric-number">1</h4>
          <p>Internship</p>
        </div>
        <div>
          <h4 className="milestones-metric-number">325</h4>
          <p>Jobs Applied</p>
        </div>
        <div>
          <h4 className="milestones-metric-number">5</h4>
          <p>Interviews Completed</p>
        </div>
        <div>
          <h4 className="milestones-metric-number">1</h4>
          <p>Promotion</p>
        </div>
        <div>
          <h4 className="milestones-metric-number">3</h4>
          <p>Certifications Received</p>
        </div>
        <div>
          <h4 className="milestones-metric-number">2</h4>
          <p>Years Job Anniversary</p>
        </div>
      </div>

      {/* Career Goals */}
      <div>
        <h5 className="milestones-goals-title">Career Goals</h5>
        <ul className="milestones-goals-list">
          <li className="goal-complete">✅ Promotion</li>
          <li className="goal-complete">✅ Increased Responsibility</li>
          <li className="goal-incomplete">⬜ New Certification</li>
          <li className="goal-incomplete">⬜ Salary Increase</li>
          <li className="goal-incomplete">⬜ Attend 5 Networking Events</li>
        </ul>
      </div>
    </div>
  );
};

export default SectionTwo;
