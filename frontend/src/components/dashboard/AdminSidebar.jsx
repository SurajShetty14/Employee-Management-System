import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Three-dot icon

export const AdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className={`flex h-screen ${isOpen ? "w-72" : "w-16"} transition-all duration-300`}>
      {/* Sidebar */}
      <div
        className={`bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg flex flex-col ${
          isOpen ? "w-72" : "w-16"
        } transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-20 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white shadow-lg px-4">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div
              className={`w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center shadow-md ${
                !isOpen && "hidden"
              }`}
            >
              <span className="font-extrabold text-lg tracking-wider">E</span>
            </div>
            {/* Title */}
            {isOpen && (
              <h1 className="text-lg font-semibold tracking-wide uppercase">
                Employee MS
              </h1>
            )}
          </div>
          {/* Three-Dot Toggle */}
          <button
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`mt-6 flex flex-col px-4 ${isOpen ? "space-y-4" : "space-y-2"}`}>
          {[
            { to: "admin-dashboard", icon: FaTachometerAlt, label: "Dashboard" },
            { to: "admin-dashboard", icon: FaUsers, label: "Employee" },
            { to: "admin-dashboard", icon: FaBuilding, label: "Department" },
            { to: "admin-dashboard", icon: FaCalendarAlt, label: "Leave" },
            { to: "admin-dashboard", icon: FaMoneyBillWave, label: "Salary" },
            { to: "admin-dashboard", icon: FaCogs, label: "Setting" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-indigo-500 hover:text-white"
                } transition duration-300 ${
                  !isOpen && "justify-center"
                }`} // Center icons when sidebar is collapsed
            >
              <item.icon className="text-lg" />
              {isOpen && (
                <span
                  className={`${
                    item.bold
                      ? "font-semibold text-gray-900 dark:text-gray-100"
                      : ""
                  }`}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
