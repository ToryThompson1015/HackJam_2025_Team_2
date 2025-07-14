import React, { useState } from "react";
import SignedInNavBar from "../../SignedInNavBar/NavBar";
import Leaderboard from "./Leaderboard/Leaderboard";
import "./styled.css";

const boardList = [
  { key: "mentors", title: "Mentors MeetUp" },
  { key: "algo", title: "Algorithm Alley" },
  { key: "resources", title: "Resource Sharing" },
  { key: "certs", title: "Certification Central" },
  { key: "learners", title: "New Learners Link" },
  { key: "matching", title: "Mentorship Matching" },
];

const initialMessages = {
  mentors: [{ name: "Alex", text: "Welcome to Mentors MeetUp!" }],
  algo: [{ name: "Jordan", text: "Let's discuss algorithms!" }],
  resources: [{ name: "Taylor", text: "Share your favorite resources here." }],
  certs: [{ name: "Sam", text: "What certifications are you working on?" }],
  learners: [{ name: "Jamie", text: "Connect with new learners here!" }],
  matching: [
    { name: "Morgan", text: "Looking for a mentor or mentee? Post here!" },
  ],
};

const AlumniPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputs, setInputs] = useState({
    mentors: { name: "", text: "" },
    algo: { name: "", text: "" },
    resources: { name: "", text: "" },
    certs: { name: "", text: "" },
    learners: { name: "", text: "" },
    matching: { name: "", text: "" },
  });

  const handleInputChange = (board, field, value) => {
    setInputs({
      ...inputs,
      [board]: { ...inputs[board], [field]: value },
    });
  };

  const handleSubmit = (e, board) => {
    e.preventDefault();
    const { name, text } = inputs[board];
    if (name && text) {
      setMessages({
        ...messages,
        [board]: [{ name, text }, ...messages[board]],
      });
      setInputs({
        ...inputs,
        [board]: { name: "", text: "" },
      });
    }
  };

  return (
    <>
      <SignedInNavBar />
      <div className="alumni-page-container">
        <h2 className="alumni-title">Alumni Message Boards</h2>
        <Leaderboard />
        <div className="boards-grid">
          {boardList.map((board) => (
            <div className="board-card" key={board.key}>
              <h3 className="board-title">{board.title}</h3>
              <form
                className="message-form"
                onSubmit={(e) => handleSubmit(e, board.key)}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={inputs[board.key].name}
                  onChange={(e) =>
                    handleInputChange(board.key, "name", e.target.value)
                  }
                  className="message-input"
                  required
                />
                <textarea
                  placeholder="Write a message..."
                  value={inputs[board.key].text}
                  onChange={(e) =>
                    handleInputChange(board.key, "text", e.target.value)
                  }
                  className="message-textarea"
                  required
                />
                <button type="submit" className="message-submit">
                  Post
                </button>
              </form>
              <div className="message-board">
                {messages[board.key].map((msg, idx) => (
                  <div className="message" key={idx}>
                    <strong>{msg.name}:</strong> {msg.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlumniPage;
