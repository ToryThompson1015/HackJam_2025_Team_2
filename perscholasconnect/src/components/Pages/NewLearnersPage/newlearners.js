import React from "react";
import SignedInNavBar from "../../SignedInNavBar/NavBar";
import alumniImg from "../../../assets/images/alumni.png"; // Update path as needed
import learnerImg from "../../../assets/images/learner.png"; // Update path as needed
import "./styled.css";

const alumniLeaderboard = [
  { name: "Alex", xp: 320 },
  { name: "Jordan", xp: 290 },
  { name: "Taylor", xp: 250 },
];

const learnerLeaderboard = [
  { name: "Sam", xp: 180 },
  { name: "Morgan", xp: 160 },
  { name: "Jamie", xp: 140 },
];

const Leaderboard = ({ data }) => (
  <table className="xp-leaderboard">
    <thead>
      <tr>
        <th>Name</th>
        <th>XP</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, idx) => (
        <tr key={idx}>
          <td>{entry.name}</td>
          <td>{entry.xp}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

function NewLearnersPage() {
  return (
    <>
      <SignedInNavBar />
      <div className="learners-page">
        <div className="learners-sections">
          {/* Alumni Section */}
          <div className="learner-section">
            <h2 className="learner-header">Alumni</h2>
            <img src={alumniImg} alt="Alumni" className="learner-img" />
            <Leaderboard data={alumniLeaderboard} />
          </div>
          {/* New Learner Section */}
          <div className="learner-section">
            <h2 className="learner-header">New Learner</h2>
            <img src={learnerImg} alt="New Learner" className="learner-img" />
            <Leaderboard data={learnerLeaderboard} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewLearnersPage;
