// src/Pages/UserProfilePage/SectionOne/SectionOne.js
import React from "react";

const SectionOne = () => {
  return (
    <div className="bg-yellow-300 p-6 rounded-md shadow-md w-full max-w-6xl">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Showcase Your Success</h2>
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Side */}
      <div className="flex-1 bg-white border border-gray-300 p-4 rounded">
        <p className="font-bold text-lg">John Smith</p>
        <p>Alumni</p>
        <p>Atlanta, GA</p>

        <div className="mt-4">
          <p>Software Engineering Graduate</p>
          <p>3–5 years post graduation</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Additional Per Scholas Certifications:</p>
          <ul className="list-disc ml-5">
            <li>AWS</li>
            <li>Google IT</li>
            <li>CompTIA</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-semibold">About John:</p>
          <p>Passionate mentor and tech advocate.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white border border-gray-300 p-4 rounded">
        <h4 className="text-xl font-semibold mb-2">John's Achievement Dashboard</h4>
        <p><strong>Mentor Rating:</strong> ⭐⭐⭐⭐☆</p>
        <p className="mt-4 font-semibold">Badges Earned:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Mentoring Maverick</span>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Community Captain</span>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">Learning Legend</span>
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Career Commander</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SectionOne;

