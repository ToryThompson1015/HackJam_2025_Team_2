import React, { useState } from "react";
import SignedInNavBar from "../../SignedInNavBar/NavBar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styled.css";

const events = [
  { date: "2025-07-14", title: "HackJam Awards Ceremony: Atlanta, GA" },
  {
    date: "2025-07-16",
    title: "Alumni + New Learners Monthly Meetup: Atlanta, GA",
  },
  {
    date: "2025-07-22",
    title: "Mentorship + New Learners Interview Prep: Virtual",
  },
  { date: "2025-07-25", title: "New Learners Algo Session: Virtual" },
  { date: "2025-07-30", title: "Community Mentor Tech Talk: Andrew" },
  { date: "2025-08-1", title: "Corportate Partner Virtual Job Fair: CGI" },
];

function EventsPage() {
  const [date, setDate] = useState(new Date());

  // Date formatting
  const selectedDate = date.toISOString().split("T")[0];

  // Highlight events on cal
  const todaysEvents = events.filter((event) => event.date === selectedDate);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const d = date.toISOString().split("T")[0];
      if (events.find((event) => event.date === d)) {
        return "event-day";
      }
    }
    return null;
  };
  return (
    <>
      <SignedInNavBar />
      <div className="events-page-flex">
        <div className="all-events-list">
          <h3>All Upcoming Events</h3>
          <ul>
            {events.map((event, idx) => (
              <li key={idx}>
                <strong>{event.date}:</strong> {event.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="events-calendar-container">
          <h2>Event Calendar</h2>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
          />
          <p>Selected date: {date.toDateString()}</p>
          <div>
            <h3>Events on this day:</h3>
            {todaysEvents.length > 0 ? (
              <ul className="todays-events-list">
                {todaysEvents.map((event, idx) => (
                  <li key={idx}>{event.title}</li>
                ))}
              </ul>
            ) : (
              <p>No events for this day.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default EventsPage;
