import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <span className="text-amber-400">P</span>ortfolio
        </h1>

        {/* Navigation */}
        <nav className="space-x-10">
          <Link
            to="/"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/skill"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
          >
            Skill
          </Link>
          <Link
            to="/project"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
          >
            Project
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
