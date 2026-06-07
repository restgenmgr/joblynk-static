import React from "react";

const HotelSOP = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hotel SOP Manual</h1>

      <p>Click below to open full SOP document:</p>

      <a
        href="/hotel-sop-manual.html"
        target="_blank"
        style={{
          display: "inline-block",
          padding: "10px 15px",
          background: "#800000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Open Hotel SOP Manual
      </a>

    </div>
  );
};

export default HotelSOP;