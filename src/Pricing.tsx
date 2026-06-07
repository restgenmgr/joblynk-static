$pricingContent = @'
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Pricing Plans</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Free Plan */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '12px', 
          padding: '2rem',
          background: '#f9f9f9',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#007bff' }}>Free</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$0</p>
          <p style={{ color: '#666', marginBottom: '2rem' }}>per month</p>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
            <li style={{ margin: '0.5rem 0' }}>✓ 1 resume download per month</li>
            <li style={{ margin: '0.5rem 0' }}>✓ Basic job search</li>
            <li style={{ margin: '0.5rem 0' }}>✓ Email support (48h response)</li>
          </ul>
          <button style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>Get Started</button>
        </div>

        {/* Pro Plan */}
        <div style={{ 
          border: '2px solid #007bff', 
          borderRadius: '12px', 
          padding: '2rem',
          background: 'white',
          textAlign: 'center',
          transform: 'scale(1.05)',
          boxShadow: '0 4px 20px rgba(0,123,255,0.2)'
        }}>
          <h2 style={{ color: '#007bff' }}>Pro</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$9.99</p>
          <p style={{ color: '#666', marginBottom: '2rem' }}>per month</p>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
            <li style={{ margin: '0.5rem 0' }}>✓ Unlimited resume downloads</li>
            <li style={{ margin: '0.5rem 0' }}>✓ Advanced job search filters</li>
            <li style={{ margin: '0.5rem 0' }}>✓ Priority email support (24h)</li>
            <li style={{ margin: '0.5rem 0' }}>✓ Resume analytics</li>
          </ul>
          <button style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>Get Pro</button>
        </div>

        {/* Premium Plan */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '12px', 
          padding: '2rem',
          background: '#f9f9f9',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#007bff' }}>Premium</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$19.99</p>
          <p style={{ color: '#666', marginBottom: '2rem' }}>per month</p>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
            <li style={{ margin: '0.5rem 0' }}>✓ All Pro features</li>
            <li style={{ margin: '0.5rem 0' }}>✓ Employers data access</li>
            <li style={{ margin: '0.5rem 0' }}>✓ Phone support (24/7)</li>
            <li style={{ margin: '0.5rem 0' }}>✓ AI-powered job matching</li>
          </ul>
          <button style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>Get Premium</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
'@

Set-Content -Path src/pages/Pricing.tsx -Value $pricingContent -Encoding UTF8
Write-Host "✅ Pricing page updated"
