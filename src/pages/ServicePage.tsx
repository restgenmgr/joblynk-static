import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServicePage = () => {
  const { id } = useParams();
  
  const sectors = [
    "Cruise Line Operations", "Luxury Hotels - India", "Middle East Hospitality",
    "F&B Management", "Front Office Excellence", "Housekeeping Admin",
    "Culinary Arts", "Revenue & Sales", "HR & Training",
    "Engineering & Tech", "Maritime Deck Dept", "Maritime Engine Dept",
    "Wellness & Spa", "Retail & Casino"
  ];

  const sectorName = sectors[Number(id)] || "Executive Service";

  return (
    <div style={{ padding: '60px 5%', maxWidth: '1000px', margin: '0 auto', color: 'white' }}>
      <div style={{ background: '#161b22', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
        <h2 style={{ color: '#fbbf24', fontSize: '2rem' }}>{sectorName}</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Exclusive Digital Resource Package for Indian Candidates.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {/* Plan 1 */}
          <div style={{ border: '2px solid #fbbf24', padding: '30px', borderRadius: '15px', textAlign: 'center', background: 'rgba(251, 191, 36, 0.02)' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Basic Support</h3>
            <div style={{ fontSize: '2.5rem', color: '#fbbf24', fontWeight: 'bold', marginBottom: '20px' }}>₹49</div>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem', marginBottom: '30px', color: '#ccc' }}>
              <li>Professional Resume Template</li>
              <li>Customized Cover Letter</li>
              <li>20 Verified HR/Employer Leads</li>
            </ul>
            <button style={{ width: '100%', padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
              PURCHASE ACCESS
            </button>
          </div>

          {/* Plan 2 */}
          <div style={{ border: '2px solid #fbbf24', padding: '30px', borderRadius: '15px', textAlign: 'center', background: 'rgba(251, 191, 36, 0.1)' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Premium Sync</h3>
            <div style={{ fontSize: '2.5rem', color: '#fbbf24', fontWeight: 'bold', marginBottom: '20px' }}>₹99</div>
            <ul style={{ textAlign: 'left', fontSize: '0.95rem', marginBottom: '30px', color: '#ccc' }}>
              <li>All Basic Support Features</li>
              <li>Mon-Fri Daily Data Updates</li>
              <li>20 New Direct Leads Daily</li>
            </ul>
            <button style={{ width: '100%', padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
              PURCHASE ACCESS
            </button>
          </div>
        </div>

        <div style={{ marginTop: '50px', padding: '20px', background: '#000', borderRadius: '10px', borderLeft: '4px solid red' }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#999' }}>
            <strong>DIGITAL PRODUCT NOTICE:</strong> Strictly for Indian Citizens. These are non-refundable digital assets. JobLynk.live provides data and tools for self-directed job searches; we are not a recruitment agency.
          </p>
        </div>
        
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link to="/" style={{ color: '#fbbf24', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Executive Desk</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;