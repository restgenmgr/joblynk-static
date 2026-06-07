import React from 'react';

const Refund = () => {
  return (
    <div style={{ padding: '80px 10%', color: '#e2e8f0', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#fbbf24', borderBottom: '2px solid #fbbf24', paddingBottom: '10px' }}>Refund & Cancellation Policy</h1>
      <section style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#fbbf24' }}>Digital Product Terms</h3>
        <p>JobLynk.live provides digital resources including downloadable templates and verified data lists. These products are classified as "intangible goods."</p>
        
        <div style={{ background: 'rgba(251, 191, 36, 0.05)', padding: '20px', borderLeft: '4px solid #fbbf24', margin: '20px 0' }}>
          <p style={{ fontWeight: 'bold', margin: 0 }}>Strict No-Refund Policy:</p>
          <p style={{ margin: '10px 0 0 0' }}>Because our products are delivered instantly via download or email, we do not offer refunds, returns, or exchanges once a purchase is completed.</p>
        </div>

        <h3 style={{ color: '#fbbf24' }}>Cancellation</h3>
        <p>For the ₹99 Premium Sync package, you may request to stop receiving daily emails at any time by contacting support; however, no partial or full refunds will be issued for the remaining duration of the service.</p>
        
        <h3 style={{ color: '#fbbf24' }}>Support Intervention</h3>
        <p>If you experience technical issues receiving your files, please contact <strong>joblynklive@gmail.com</strong>. We will ensure the digital assets are delivered to you through alternative professional channels.</p>
      </section>
    </div>
  );
};

export default Refund;