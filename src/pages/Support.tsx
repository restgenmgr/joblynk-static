import React from 'react';

const Support = () => {
  return (
    <div style={{ padding: '80px 10%', color: 'white', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: '#fbbf24', borderBottom: '2px solid #fbbf24', paddingBottom: '10px' }}>Support Center</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '40px' }}>
        For technical assistance, payment inquiries, or data package support, please contact our team.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {/* Executive Desk */}
        <div style={{ padding: '30px', border: '1px solid #333', borderRadius: '15px', background: 'rgba(255,255,255,0.02)' }}>
          <h3 style={{ color: '#fbbf24', marginTop: 0 }}>Executive Desk</h3>
          <p><strong>Nigel Anthony Thomas</strong></p>
          <p>Phone: +91 97693 51231</p>
          <p>Email: joblynklive@gmail.com</p>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>Web Design & Strategy</p>
        </div>

        {/* Technical Support */}
        <div style={{ padding: '30px', border: '1px solid #333', borderRadius: '15px', background: 'rgba(255,255,255,0.02)' }}>
          <h3 style={{ color: '#fbbf24', marginTop: 0 }}>Data & Fulfillment</h3>
          <p><strong>N.A. Thomas</strong></p>
          <p>Phone: +91 97693 51231</p>
          <p>Email: napt1952@gmail.com</p>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>Data & Fulfillment</p>
        </div>
      </div>

      <div style={{ marginTop: '50px', padding: '20px', background: 'rgba(251, 191, 36, 0.05)', borderRadius: '10px', border: '1px dashed #fbbf24' }}>
        <p style={{ textAlign: 'center', margin: 0, fontSize: '0.9rem' }}>
          Response Time: We typically respond to all inquiries within 4 to 6 business hours.
        </p>
      </div>
    </div>
  );
};

export default Support;
