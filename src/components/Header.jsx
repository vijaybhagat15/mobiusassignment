import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobilenavLinks from "./Mobilenavelinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-300 via-blue-400 to-blue-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/images/logo/headerlogo.png" 
            alt="Mobius logo" 
            className="w-12" 
          />
          <span className="text-white font-dm-sans font-semibold text-2xl">
            MobiusEngine
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 text-white font-dm-sans font-normal text-base">
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
      className={`hover:text-gray-300 transition ${
        location.pathname === item.path ? "font-bold underline" : ""
      }`}
    >
      {item.name}
    </Link>
  ))}

  {/* Dropdown Menu */}
  <div className="relative group">
    <button className="flex items-center gap-1 hover:text-gray-300 transition">
      More <span>▼</span>
    </button>
    <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible">
      <Link to="/option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Option 1
      </Link>
      <Link to="/option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Option 2
      </Link>
    </div>
  </div>
</nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-primary focus:outline-none ml-auto text-white"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary shadow-lg lg:hidden">
          <MobilenavLinks setMenuOpen={setMenuOpen} />
        </div>
      )}
        {/* Get Started Button */}
        <div className="ml-4">
          <Link to="/get-started">
            <button className="hidden lg:flex bg-white text-[#0649E7] font-semibold px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
              Get Started →
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
