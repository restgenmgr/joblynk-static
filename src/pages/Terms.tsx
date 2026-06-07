import React from 'react';

const Terms = () => {
  return (
    <div style={{ padding: '80px 10%', lineHeight: '1.8', color: '#e2e8f0', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#fbbf24', borderBottom: '2px solid #fbbf24', paddingBottom: '10px' }}>Legal Disclaimer & Terms</h1>
      <section style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#fbbf24' }}>1. Digital Product Policy</h3>
        <p>All products sold on JobLynk.live (including Resume templates, Cover Letters, and HR Data Lists) are <strong>Digital Assets</strong>. Because these files are delivered instantly upon purchase, they cannot be "returned."</p>
        <p style={{ fontWeight: 'bold', color: '#ff4d4d' }}>STRICT NO-REFUND POLICY: All sales are final. By completing a purchase, you waive your right to a refund.</p>
        
        <h3 style={{ color: '#fbbf24' }}>2. Not a Recruitment Agency</h3>
        <p>JobLynk.live is a data intelligence platform. We provide tools and contact information to assist in your job search. We are not a recruitment agency, we do not conduct interviews, and we do not guarantee employment.</p>
        
        <h3 style={{ color: '#fbbf24' }}>3. Eligibility</h3>
        <p>Our services are strictly designed for and restricted to <strong>Indian Citizens only</strong>. All data provided is tailored for the Indian professional context.</p>
      </section>
    </div>
  );
};

export default Terms;