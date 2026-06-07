import React from "react";
import { Link } from "react-router-dom";
import emblem from "../assets/emblem.jpg";

const Navbar = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "Blog", path: "/blog" },
    { name: "Hotel SOPs", path: "/hotel-sop-manual.html" }   // ✅ FIXED
    { name: "Pricing", path: "/pricing" },
    { name: "Resume Builder", path: "/resumebuilder" },
    { name: "Samples Vault", path: "/samplesvault" },
    { name: "Employer Portal", path: "/employerportal" },
    { name: "Pay Portal", path: "/payportal" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#ffffff",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {/* Logo */}
      <img
        src={emblem}
        alt="logo"
        style={{
          width: "50px",
          height: "50px",
          marginBottom: "10px"
        }}
      />

      {/* Navigation Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center"
        }}
      >
        {pages.map((p) => (
          <Link
            key={p.name}
            to={p.path}
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              width: "140px",
              textDecoration: "none",
              textAlign: "center",
              background: "#f7f7f7",
              fontWeight: "bold"
            }}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;