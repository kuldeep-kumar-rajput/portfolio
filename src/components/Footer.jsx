import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[oklch(14%_0.028_261.692)] text-gray-200 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <img
            src="download.jpg" // replace with your logo path
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-2xl font-bold">KULDEEP KUMAR</span>
        </div>

        {/* Tagline / Short Description */}
        <p className="text-center md:text-left text-gray-300">
          Frontend Developer | Built with React & Tailwind CSS
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-100 text-lg text-center md:text-left">
          <Link
            to="/project"
            className="hover:text-amber-400 transition-colors"
          >
            Project
          </Link>
          <Link to="/about" className="hover:text-amber-400 transition-colors">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-amber-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/kuldeep-kumar-rajput"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kuldeep-kumar-bb63253346"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kuldeepk78079@gmail.com"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 text-center mt-8">
        © {new Date().getFullYear()} Kuldeep Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
