import React from "react";

const ResumeBuilder: React.FC = () => {
  return (
    <div
      style={{
        padding: "60px",
        fontFamily: "Arial",
        textAlign: "center",
        color: "#0f172a"
      }}
    >
      <h1>Resume Builder</h1>
      <p>This page is working correctly.</p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "2px solid #2563eb",
          borderRadius: "12px",
          display: "inline-block"
        }}
      >
        <h3>Coming Features</h3>
        <ul style={{ textAlign: "left" }}>
          <li>ATS Resume Generator</li>
          <li>Cover Letter Builder</li>
          <li>Job Matching System</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeBuilder;