import React from 'react';

const FooterHome = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Your logo */}
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div className="footer-text">
          Centered Text
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
