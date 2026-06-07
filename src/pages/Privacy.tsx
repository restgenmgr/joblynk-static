import React from 'react';

const Privacy = () => {
  return (
    <div style={{ padding: '80px 10%', color: '#e2e8f0', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#fbbf24', borderBottom: '2px solid #fbbf24', paddingBottom: '10px' }}>Privacy Policy</h1>
      <section style={{ marginTop: '30px' }}>
        <p>At JobLynk.live, we are committed to protecting the privacy of our users, specifically Indian citizens utilizing our digital resource hub.</p>
        
        <h3 style={{ color: '#fbbf24' }}>1. Information Collection</h3>
        <p>We collect personal information such as Name, Email Address, Phone Number, and Location only when voluntarily submitted by you through our inquiry forms or during the purchase of digital packages.</p>
        
        <h3 style={{ color: '#fbbf24' }}>2. Use of Information</h3>
        <p>Your data is used strictly to deliver the requested digital products (Resumes, Cover Letters, HR Lists) and to provide professional support. We do not sell, rent, or trade your personal information to third parties.</p>
        
        <h3 style={{ color: '#fbbf24' }}>3. Payment Security</h3>
        <p>All financial transactions are processed through encrypted third-party payment gateways. JobLynk.live does not store your credit card, debit card, or UPI credentials on our servers.</p>
        
        <h3 style={{ color: '#fbbf24' }}>4. Data Retention</h3>
        <p>We retain your contact information only as long as necessary to provide you with the Mon-Fri data updates included in your package.</p>
      </section>
    </div>
  );
};

export default Privacy;