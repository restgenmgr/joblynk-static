import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Hotel SOPs", path: "/hotel-sop-manual.html" },
    { name: "Pay Portal", path: "/pay" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#ffffff", padding: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {pages.map((p) => (
          <Link key={p.name} to={p.path} style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "10px", width: "140px", textDecoration: "none", textAlign: "center", background: "#f7f7f7", fontWeight: "bold", color: "#000" }}>
            {p.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;