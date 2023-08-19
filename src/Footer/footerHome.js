import logo from "../images/quickoTransparent.png";
import './footerHome.css';

const Footer = () => {
  return (
    <footer className="footer-home mt-auto py-2">
      <div className="container text-center">
        <nav className="footer-links">
          <ul className="nav justify-content-between">
            <li className="nav-item">
              <a href="#" className="nav-link">Link 1</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Link 2</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Link 3</a>
            </li>
          </ul>
        </nav>
        <div className="footer-text">
            <div className="footer-logo">
            <img src={logo} alt="Logo" />
            </div>
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

