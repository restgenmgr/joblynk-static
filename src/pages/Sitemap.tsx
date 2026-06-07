import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sectors = [
    "Cruise Line Operations", "Luxury Hotels - India", "Middle East Hospitality",
    "F&B Management", "Front Office Excellence", "Housekeeping Admin",
    "Culinary Arts", "Revenue & Sales", "HR & Training",
    "Engineering & Tech", "Maritime Deck Dept", "Maritime Engine Dept",
    "Wellness & Spa", "Retail & Casino"
  ];

  return (
    <div style={{ padding: '80px 10%', background: '#0a0a0f', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ color: '#fbbf24', borderBottom: '1px solid #333', paddingBottom: '20px' }}>Site Directory</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px' }}>
        <div>
          <h3 style={{ color: '#fbbf24' }}>Main Pages</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home / Executive Desk</Link></li>
            <li><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Our Mission</Link></li>
            <li><Link to="/pay" style={{ color: '#94a3b8', textDecoration: 'none' }}>Payment Portal</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#fbbf24' }}>Service Sectors</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sectors.map((sector, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <Link to={`/service/${index}`} style={{ color: '#94a3b8', textDecoration: 'none' }}>{sector}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;