// src/Pages/UserProfilePage/SectionTwo/SectionTwo.js
import React from "react";

const SectionTwo = () => {
  return (
    <div className="bg-blue-700 text-white p-6 rounded-md w-full max-w-6xl mx-auto mt-6 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Celebrate Your Milestones
      </h2>

      {/* Metrics */}
      <div className="flex flex-wrap justify-center text-center gap-6 mb-6">
        <div>
          <h4 className="text-2xl font-bold">1</h4>
          <p>Internship</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold">325</h4>
          <p>Jobs Applied</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold">5</h4>
          <p>Interviews Completed</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold">1</h4>
          <p>Promotion</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold">3</h4>
          <p>Certifications Received</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold">2</h4>
          <p>Years Job Anniversary</p>
        </div>
      </div>

      {/* Career Goals */}
      <div>
        <h5 className="text-xl font-semibold mb-2">Career Goals</h5>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li className="bg-green-600 px-3 py-1 rounded-full">✅ Promotion</li>
          <li className="bg-green-600 px-3 py-1 rounded-full">
            ✅ Increased Responsibility
          </li>
          <li className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
            ⬜ New Certification
          </li>
          <li className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
            ⬜ Salary Increase
          </li>
          <li className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
            ⬜ Attend 5 Networking Events
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionTwo;
