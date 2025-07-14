import styled from "styled-components";

export const LeaderboardContainer = styled.div`
  background: #fff;
  color: #09507c;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 24px;
  margin: 32px auto;
  max-width: 700px;
`;

export const LeaderboardTitle = styled.h2`
  color: #f58832;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 18px;
  text-align: center;
`;

export const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;

  th,
  td {
    padding: 10px 8px;
    text-align: center;
  }

  th {
    background: #09507c;
    color: #fff;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background: #f3f3f3;
  }
`;
