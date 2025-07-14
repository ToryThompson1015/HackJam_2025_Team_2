import React from "react";
import {
  LeaderboardContainer,
  LeaderboardTitle,
  LeaderboardTable,
} from "./styled";

const alumniData = [
  { name: "Alex", mentoringPoints: 120, skillPoints: 80 },
  { name: "Jordan", mentoringPoints: 95, skillPoints: 110 },
  { name: "Taylor", mentoringPoints: 80, skillPoints: 70 },
  { name: "Sam", mentoringPoints: 60, skillPoints: 90 },
];

const Leaderboard = () => (
  <LeaderboardContainer>
    <LeaderboardTitle>Alumni Leaderboard</LeaderboardTitle>
    <LeaderboardTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mentoring Points</th>
          <th>Skill Points</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {alumniData
          .sort(
            (a, b) =>
              b.mentoringPoints +
              b.skillPoints -
              (a.mentoringPoints + a.skillPoints)
          )
          .map((alum, idx) => (
            <tr key={idx}>
              <td>{alum.name}</td>
              <td>{alum.mentoringPoints}</td>
              <td>{alum.skillPoints}</td>
              <td>{alum.mentoringPoints + alum.skillPoints}</td>
            </tr>
          ))}
      </tbody>
    </LeaderboardTable>
  </LeaderboardContainer>
);

export default Leaderboard;
