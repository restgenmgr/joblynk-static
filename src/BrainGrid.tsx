import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PRICING', path: '/pricing' },
  { name: 'PAY PORTAL', path: '/payportal' },
  { name: 'RESUME TOOLS', path: '/resumetools' },
  { name: 'EMPLOYEES DATA', path: '/employersdata' },
  { name: 'SIGN UP', path: '/signup' },
  { name: 'SUPPORT', path: '/support' },
  { name: 'DISCLAIMER', path: '/disclaimer' },
];

const BrainGrid: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: '180px',
      backgroundColor: '#0f172a',
      borderRight: '4px solid #ffc107',
      padding: '20px 10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: 9999,
      overflowY: 'auto'
    }}>
      {/* Title at top */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#ffc107', fontSize: '18px', margin: 0 }}>MENU</h2>
        <div style={{ height: '2px', width: '40px', background: '#ffc107', margin: '5px auto' }}></div>
      </div>

      {/* 9 BIG BUTTONS - full height distribution */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '8px'
      }}>
        {pages.map((page) => (
          <Link
            to={page.path}
            key={page.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              backgroundColor: '#1e293b',
              color: 'white',
              padding: '15px 5px',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '14px',
              letterSpacing: '0.5px',
              border: '2px solid #ffc107',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              transition: 'all 0.2s',
              flex: 1,
              minHeight: '45px',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffc107';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#1e293b';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {page.name}
          </Link>
        ))}
      </div>

      {/* AI/BM at bottom */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <span style={{ color: '#ffc107', fontWeight: 'bold' }}>AI</span>
          <span style={{ color: '#ffc107', fontWeight: 'bold' }}>BM</span>
        </div>
      </div>
    </div>
  );
};

export default BrainGrid;
