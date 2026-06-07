import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to JobLynk.live</h1>

      <p>
        JobLynk.live is a professional job platform connecting candidates with
        real opportunities across industries including hospitality, logistics,
        retail, and emerging digital sectors.
      </p>

      <p>
        With over 10,000+ job listings and 50,000+ registered candidates, we
        help individuals build careers and companies find the right talent.
      </p>

      <p>
        Our platform offers resume tools, career guidance, blog insights,
        employer portals, and industry-specific SOP resources to help you stay
        competitive in today’s job market.
      </p>

      <p>
        Whether you are starting your career or upgrading your skills,
        JobLynk.live is designed to support your growth journey.
      </p>

      {/* ✅ ADD THIS SECTION BELOW */}

      <h2 style={{ marginTop: "30px" }}>Explore 14 Career Sectors</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "15px"
      }}>

        <a href="/cruise-line-operations.html" target="_blank">Cruise Line Operations</a>
        <a href="/luxury-hotels-india.html" target="_blank">Luxury Hotels - India</a>
        <a href="/middle-east-hospitality.html" target="_blank">Middle East Hospitality</a>
        <a href="/food-beverage-management.html" target="_blank">F&B Management</a>
        <a href="/front-office.html" target="_blank">Front Office Excellence</a>
        <a href="/housekeeping-admin.html" target="_blank">Housekeeping Admin</a>
        <a href="/culinary-arts.html" target="_blank">Culinary Arts</a>
        <a href="/revenue-sales.html" target="_blank">Revenue & Sales</a>
        <a href="/hr-training.html" target="_blank">HR & Training</a>
        <a href="/engineering-tech.html" target="_blank">Engineering & Tech</a>
        <a href="/maritime-deck.html" target="_blank">Maritime Deck Dept</a>
        <a href="/maritime-engine.html" target="_blank">Maritime Engine Dept</a>
        <a href="/wellness-spa.html" target="_blank">Wellness & Spa</a>
        <a href="/retail-casino.html" target="_blank">Retail & Casino</a>

      </div>
    </div>
  );
};

export default Home;