import React from 'react';

const PayPortal = () => {
  const cardStyle = {
    padding: '40px 30px',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={{ padding: '80px 5%', background: '#0a0a0f', minHeight: '100vh', color: 'white' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', color: '#fbbf24', marginBottom: '10px' }}>Secure Payment Portal</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Select your professional package to unlock executive resources.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        
        {/* WHITE TIER - BASIC */}
        <div style={{ ...cardStyle, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>White Package</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Essential tools for a professional start.</p>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px' }}>₹49</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', lineHeight: '2' }}>
              <li>✅ Professional Resume Template</li>
              <li>✅ Standard Cover Letter</li>
              <li>✅ 20 HR Contact List (One-time)</li>
              <li>✅ Lifetime File Access</li>
            </ul>
          </div>
          <button style={{ width: '100%', padding: '18px', background: 'white', color: 'black', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
            PAY ₹49 NOW
          </button>
        </div>

        {/* GOLD TIER - PREMIUM */}
        <div style={{ ...cardStyle, background: 'rgba(251, 191, 36, 0.05)', border: '2px solid #fbbf24', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#fbbf24', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
            MOST POPULAR
          </div>
          <div>
            <h2 style={{ fontSize: '1.8rem', color: '#fbbf24', margin: '0 0 10px 0' }}>Gold Package</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>Full synchronization for the active seeker.</p>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#fbbf24', marginBottom: '30px' }}>₹99</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', lineHeight: '2' }}>
              <li>✨ AI-Optimized Premium Resume</li>
              <li>✨ Targeted Cover Letter Scripting</li>
              <li>✨ **DAILY** HR Leads (Mon-Fri)</li>
              <li>✨ Direct Support Priority</li>
            </ul>
          </div>
          <button style={{ width: '100%', padding: '18px', background: '#fbbf24', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
            UPGRADE TO GOLD ₹99
          </button>
        </div>
      </div>

      {/* TRUST INDICATORS */}
      <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '40px', color: '#475569', fontSize: '0.9rem', flexWrap: 'wrap' }}>
        <span>🔒 Secure SSL Encrypted Payment</span>
        <span>🇮🇳 Trusted by 500+ Indian Professionals</span>
        <span>💳 UPI, Cards, & NetBanking Supported</span>
      </div>
    </div>
  );
};

export default PayPortal;