import React from 'react';
import { Link } from 'react-router-dom';
import './BrainChain.css'; // Make sure this import exists

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Pay Portal', path: '/payportal' },
  { name: 'Resume Tools', path: '/resumetools' },
  { name: 'Employees Data', path: '/employersdata' },
  { name: 'Sign Up', path: '/signup' },
  { name: 'Support', path: '/support' },
  { name: 'Disclaimer', path: '/disclaimer' }
];

const BrainChain: React.FC = () => {
  console.log('✅ BrainChain is rendering!');
  
  return (
    <div 
      className="brain-chain" 
      style={{ 
        border: '5px solid red',  // Temporary border to see it
        backgroundColor: 'lightblue',  // Temporary color
        padding: '20px',
        width: '150px',
        position: 'fixed',
        left: '0',
        top: '0',
        bottom: '0',
        zIndex: 9999
      }}
    >
      {pages.map((page) => (
        <Link 
          to={page.path} 
          key={page.name} 
          style={{ 
            display: 'block', 
            marginBottom: '15px',
            color: 'black',
            textDecoration: 'none'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="/public/images/brain.jpg" 
              alt={page.name}
              style={{ 
                width: '50px', 
                height: '50px',
                objectFit: 'cover',
                border: '2px solid yellow',
                borderRadius: '5px'
              }}
              onError={(e) => {
                console.error(`Failed to load image for ${page.name}`);
                e.currentTarget.src = 'https://via.placeholder.com/50?text=Brain';
              }}
            />
            <span style={{ fontSize: '12px', marginTop: '5px' }}>{page.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BrainChain;
