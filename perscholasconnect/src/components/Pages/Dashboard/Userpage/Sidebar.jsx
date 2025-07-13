import {
  FaHome,
  FaBell,
  FaBriefcase,
  FaFileAlt,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard, MdOutlineWork, MdSettings } from "react-icons/md";

export default function Sidebar() {
  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, path: "/" },
    { label: "Notifications", icon: <FaBell />, path: "/notifications" },
    { label: "Jobs", icon: <FaBriefcase />, path: "/jobs" },
    {
      label: "Job Applications",
      icon: <MdOutlineWork />,
      path: "/applications",
    },
    { label: "Uploaded Jobs", icon: <FaFileAlt />, path: "/uploaded" },
    { label: "Profile", icon: <FaUserCircle />, path: "/profile" },
    { label: "Settings", icon: <MdSettings />, path: "/settings" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-10">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-gray-200">
        <h1 className="text-xl font-bold text-indigo-600">Bankster</h1>
      </div>

      {/* Menu Items */}
      <nav className="p-6 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center gap-3 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 px-4 py-2 rounded-md transition"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Divider */}
      <hr className="my-4 border-gray-200 mx-6" />

      {/* Logout */}
      <div className="px-6">
        <a
          href="/logout"
          className="flex items-center gap-3 text-red-500 hover:bg-red-100 px-4 py-2 rounded-md transition"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </aside>
  );
}
