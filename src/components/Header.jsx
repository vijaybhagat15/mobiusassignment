import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-300 via-blue-400 to-blue-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          {/* Replace this div with an <img> if you have a logo */}
            <img src="images/logo/headerlogo.png" alt="mobius logo" className="w-12" />
          <span className="text-white font-dm-sans font-medium text-[24px]">MobuisEngine</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-white font-dm-sans font-normal text-[18px]">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About Us</Link>
          <Link to="/plans" className="hover:text-gray-300 transition">Plans</Link>
          <Link to="/testimonials" className="hover:text-gray-300 transition">Testimonials</Link>
          <Link to="/privacy-policy" className="hover:text-gray-300 transition">Privacy Policy</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-gray-300 transition">
              More
              <span>▼</span>
            </button>
            {/* Dropdown (optional) */}
            <div className="absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
              <Link to="/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</Link>
              <Link to="/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</Link>
            </div>
          </div>
        </nav>

        {/* Get Started Button */}
        <div>
          <Link to="/get-started">
            <button className="bg-white text-[#0649E7] font-semibold px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition">
              Get Started →
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
