import React from "react";
import Sidebar from "./Userpage/Sidebar";
import Navbar from "./Userpage/Navbar";
import ProfileCard from "./Userpage/ProfileCard";
import OverviewCard from "./Userpage/OverviewCard";
import StatsChart from "./Userpage/StatsChart";
import Footer from "./Userpage/Footer";

export default function dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64">
        <Navbar />

        <main className="p-6 flex gap-3">
          <div className="flex-[0_0_65%]">
            <OverviewCard />
          </div>
          <div className="flex-[0_0_35%]">
            <ProfileCard />
          </div>
        </main>
        <StatsChart />
        <Footer />
      </div>
    </div>
  );
}
