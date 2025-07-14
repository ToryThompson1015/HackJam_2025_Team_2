import React, { useState } from "react";
import SignedInNavBar from "../../SignedInNavBar/NavBar";
import heroImg from "../../../assets/images/hero.png";
import "./styled.css";

const courses = [
  "Software Engineering",
  "AWS re/Start",
  "End User Desktop Support",
  "IT Support",
  "IT Data Center Technician",
  "IT Support & Security Fundamentals",
  "Salesforce Administrator",
  "Help Desk",
  "TEK Data Center",
  "Future Powered by TEKSystems Course",
];

const roles = [
  "Alumni",
  "Community Mentor",
  "New Learner",
  "Per Scholas Staff",
  "Corporate Partner",
];

const genders = [
  "She",
  "He",
  "They",
  "Ze",
  "Xe",
  "Ver",
  "Per",
  "E/Ey",
  "Fae",
  "Aer/Aers",
  "Elle",
];

const mentors = [
  {
    name: "Alex",
    gender: "He",
    zip: "30303",
    course: "AWS re/Start",
    role: "Alumni",
  },
  {
    name: "Taylor",
    gender: "She",
    zip: "10001",
    course: "Software Engineering",
    role: "Community Mentor",
  },
  {
    name: "Sam",
    gender: "They",
    zip: "90210",
    course: "IT Support",
    role: "New Learner",
  },
];

function MentorshipPage() {
  const [filters, setFilters] = useState({
    gender: "",
    zip: "",
    course: "",
    role: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredMentors = mentors.filter((mentor) => {
    return (
      (filters.gender === "" || mentor.gender === filters.gender) &&
      (filters.zip === "" || mentor.zip.includes(filters.zip)) &&
      (filters.course === "" || mentor.course === filters.course) &&
      (filters.role === "" || mentor.role === filters.role)
    );
  });

  return (
    <>
      <SignedInNavBar />
      <div className="mentorship-page">
        <div className="mentorship-hero">
          <img src={heroImg} alt="Mentorship Hero" />
          <h1>Find Your Mentor or Mentee</h1>
          <p>
            Filter by gender, zip code, course, and role to find your best
            match!
          </p>
        </div>
        <form className="mentorship-filter-form">
          <select name="gender" value={filters.gender} onChange={handleChange}>
            <option value="">All Genders</option>
            {genders.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={filters.zip}
            onChange={handleChange}
          />
          <select name="course" value={filters.course} onChange={handleChange}>
            <option value="">All Courses</option>
            {courses.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select name="role" value={filters.role} onChange={handleChange}>
            <option value="">All Roles</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </form>
        <div className="mentorship-results">
          {filteredMentors.length === 0 ? (
            <p>No matches found.</p>
          ) : (
            filteredMentors.map((mentor, idx) => (
              <div className="mentor-card" key={idx}>
                <h3>{mentor.name}</h3>
                <p>
                  <strong>Gender:</strong> {mentor.gender}
                </p>
                <p>
                  <strong>Zip:</strong> {mentor.zip}
                </p>
                <p>
                  <strong>Course:</strong> {mentor.course}
                </p>
                <p>
                  <strong>Role:</strong> {mentor.role}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default MentorshipPage;
