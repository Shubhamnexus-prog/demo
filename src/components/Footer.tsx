import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '2rem 0',
      marginTop: 'auto',
      background: 'rgba(15, 23, 42, 0.4)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h3 style={{fontFamily: 'Outfit', fontSize: '1.25rem', marginBottom: '0.5rem'}}>Fake News Detector</h3>
          <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
            Empowering truth through artificial intelligence.
          </p>
        </div>
        <div style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>
          &copy; {new Date().getFullYear()} Fake News Detector. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
