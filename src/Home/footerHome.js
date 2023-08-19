const styles = {
  footerNav: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '40%',
    backgroundColor: '#FA2640',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '5px 150px',
    borderTop: '3px solid rgba(255, 255, 255, 0.1)',
  },
  footerLogo: {
    width: '150px',
    height: '150px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 40px',
    whiteSpace: 'nowrap', // Prevent text from wrapping to a new line
    
  },
  footerLinkHover: {
    backgroundColor: '#ff4d4d', // Hover background color
  },
};



const FooterNavbar = () => {
  return (
    <nav style={styles.footerNav} className="footer-nav">
      <a href="#" className="logo-link">
        <img src="logo.png" alt="Logo" style={styles.footerLogo} />
      </a>
      <a href="#" className="footer-link" style={styles.footerLink}>Terms and Conditions</a>
      <a href="#" className="footer-link" style={styles.footerLink}>Contact Us</a>
    </nav>
  );
};
export default FooterNavbar;