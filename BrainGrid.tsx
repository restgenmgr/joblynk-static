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
  { name: 'DISCLAIMER', path: '/disclaimer' }
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
      zIndex: 9999,
      overflowY: 'auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#ffc107', fontSize: '18px' }}>MENU</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
              border: '2px solid #ffc107',
              textAlign: 'center'
            }}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrainGrid;
