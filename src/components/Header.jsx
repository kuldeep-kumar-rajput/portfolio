import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-700 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <span className="text-amber-400">P</span>ortfolio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
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

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700 px-6 pb-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/skill"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skill
          </Link>
          <Link
            to="/project"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-amber-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
