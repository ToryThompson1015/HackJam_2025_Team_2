import { useState } from "react";

const tabContent = [
  {
    title: "Lorem Ipsum 1",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis duis adipiscing sed risus fames...",
      "• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis duis adipiscing sed risus fames.",
      "• Metus eget integer aliquam adipiscing tortor enim tortor nunc.",
    ],
    stats: { applications: 56, interviews: 10, profileVisits: 150 },
  },
  {
    title: "Lorem Ipsum 2",
    paragraphs: [
      "Tab 2 content: Quisque dignissim, odio vitae facilisis ultricies, purus quam.",
      "• Cras convallis tellus ut ligula placerat, a fringilla metus tempor.",
      "• Nunc congue nisi vitae suscipit tellus.",
    ],
    stats: { applications: 64, interviews: 7, profileVisits: 102 },
  },
  {
    title: "Lorem Ipsum 3",
    paragraphs: [
      "Tab 3 content: Morbi in sem quis dui placerat ornare.",
      "• Praesent dapibus, neque id cursus faucibus.",
      "• Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    ],
    stats: { applications: 33, interviews: 12, profileVisits: 98 },
  },
];

export default function OverviewCard() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabContent[activeTab];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Loreum Ipsum</h2>

      {/* Tabs */}
      <div className="flex gap-8 border-b mb-6 text-gray-600 font-medium">
        {tabContent.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 border-b-2 transition-all ${
              activeTab === index
                ? "border-blue-600 text-blue-600"
                : "border-transparent hover:text-blue-500"
            }`}
          >
            Loreum Ipsum
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 space-y-4 mb-8 text-sm leading-relaxed">
        {current.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-violet-600 text-white text-center rounded-xl py-6 shadow">
          <p className="text-3xl font-bold">{current.stats.applications}</p>
          <p className="mt-1 text-sm">Application sent</p>
        </div>
        <div className="bg-white text-center rounded-xl py-6 shadow text-gray-800">
          <p className="text-3xl font-bold">{current.stats.interviews}</p>
          <p className="mt-1 text-sm">Interview Schedule</p>
        </div>
        <div className="bg-white text-center rounded-xl py-6 shadow text-gray-800">
          <p className="text-3xl font-bold">{current.stats.profileVisits}</p>
          <p className="mt-1 text-sm">Profile Visited</p>
        </div>
      </div>
    </div>
  );
}
