// components/HeaderView.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeaderView = ({ logoSrc, profileImgSrc, menuLinks }) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logoSrc} alt="Budget Logo" className="h-20 w-30" />
        <span className="text-sm font-semibold text-pink-800">Budget &</span>
        <span className="text-sm font-semibold text-purple-800">Save Money</span>
      </div>

      {/* Middle Section: Search Bar and Menu */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="flex items-center bg-gray p-2 rounded-md shadow-sm border-2">
          <i className="fas fa-search text-gray-400"></i>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none"
          />
        </div>

        {/* Menu Links */}
        <nav className="flex items-center space-x-5">
          {menuLinks.map((link, index) => (
            <Link key={index} to={link.path} className="text-gray-500 hover:font-bold hover:no-underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right Section: Notifications and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative">
          <i className="fas fa-bell text-gray-600"></i>
          {/* Optionally add a notification badge */}
        </button>

        {/* Profile Picture */}
        <img
          src={profileImgSrc}
          alt="Profile"
          className="h-8 w-8 rounded-md"
        />
      </div>
    </header>
  );
};

export default HeaderView;
