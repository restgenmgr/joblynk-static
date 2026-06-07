import React from "react";

const Totals = () => {
  return (
    <section className="totals">
      <div className="totals-container">
        <h2>Platform Statistics</h2>

        <div className="totals-grid">
          <div className="total-card">
            <h3>10,000+</h3>
            <p>Active Users</p>
          </div>

          <div className="total-card">
            <h3>2,500+</h3>
            <p>Interviews Conducted</p>
          </div>

          <div className="total-card">
            <h3>1,200+</h3>
            <p>Companies Hiring</p>
          </div>

          <div className="total-card">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Totals;