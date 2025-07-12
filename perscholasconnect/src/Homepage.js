import React from 'react';
import './App.css';

function Homepage() {
  return (
    <>
      

      {/* Mission Section */}
      <section className="mission-block">
        <div className="mission-left">
          <h2>Our<br />Mission</h2>
        </div>
        <div className="mission-right">
          <div className="mission-item">
            <span className="number">1</span>
            <p>
              Strengthen the Per Scholas alumni network and foster collaborative relationships
              with new learners to build a stronger community.
            </p>
          </div>
          <hr />
          <div className="mission-item">
            <span className="number">2</span>
            <p>
              Motivate Per Scholas graduates to continually improve their skills through
              gamification and engagement.
            </p>
          </div>
          <hr />
          <div className="mission-item">
            <span className="number">3</span>
            <p>
              Earn more experience and encourage post-graduate achievements by incentivizing
              the experiences earned.
            </p>
          </div>
        </div>
      </section>

      {/* Image Row */}
      <div className="image-row">
        <img 
          src="https://mentoringuniversity.com/wp-content/uploads/2024/08/Essential-Guide-to-Mentoring.jpg" 
          alt="Students Working" 
        />
        <img 
          src="https://www.interfolio.com/wp-content/uploads/Blog_MentoringStudentsGuide-scaled.jpg" 
          alt="Mentor with Student" 
        />
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Per Scholas Connect. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Contact Us</a>
        </p>
      </div>
    </>
  );
}

export default Homepage;
