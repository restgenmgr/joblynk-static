import React from 'react';
import { Link } from 'react-router-dom';
import emblem from "../assets/emblem.jpg";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const pages = [
    { name: "Home", path: "/", description: "Landing page overview" },
    { name: "About", path: "/about", description: "About us and mission" },
    { name: "Jobs", path: "/jobs", description: "Available job listings" },
    { name: "Contact", path: "/contact", description: "Reach out to us" },
    { name: "Pricing", path: "/pricing", description: "Our service plans" },
    { name: "Resume Builder", path: "/resumebuilder", description: "Create resumes easily" },
    { name: "Samples Vault", path: "/samplesvault", description: "View sample resumes" },
    { name: "Employer Portal", path: "/employerportal", description: "For employers" },
    { name: "Pay Portal", path: "/payportal", description: "Payments and subscriptions" },
  ];

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"} p-4 flex items-center justify-between`}>
      {/* Emblem on top-left */}
      <div className="flex items-center gap-2">
        <img src={emblem} alt="Emblem" className="w-12 h-12 rounded-full" />
        <span className="font-bold text-xl">NigelThomas</span>
      </div>

      {/* 9 Button Frames */}
      <div className="flex gap-3">
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.path}
            title={page.description}
            className="px-3 py-2 border rounded hover:bg-blue-500 hover:text-white transition"
          >
            {page.name}
          </Link>
        ))}
      </div>

      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="ml-4 px-3 py-2 border rounded"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
