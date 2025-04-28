import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Mobilenavelinks({ setMenuOpen }) {
  const location = useLocation();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full bg-white shadow-lg rounded-b-xl flex flex-col items-center space-y-4 p-6 lg:hidden border-[1px] border-blue-500"
      >
        {/* Navigation Links */}
        {[
  { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Plans", path: "/plans" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex justify-between text-blue-800 items-center w-full px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
              location.pathname === item.path
                ? "text-blue-600 bg-blue-50 border-[1px] border-blue-500"
                : "text-primary hover:text-secondary hover:bg-gray-100"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
            <span className="text-blue-900 transition-transform duration-300 group-hover:translate-x-1">
              &gt;
            </span>
          </Link>
        ))}

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6">
          {[
            { icon: "fab fa-facebook-f", link: "#" },
            { icon: "fab fa-youtube", link: "#" },
            { icon: "fab fa-twitter", link: "#" },
            { icon: "fab fa-linkedin-in", link: "#" },
            { icon: "fab fa-instagram", link: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-blue-900 text-xl hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Mobilenavelinks;
