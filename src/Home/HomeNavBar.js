import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ChevronDown, Person, List, Cart } from 'react-bootstrap-icons';
import logo from "../images/quickoTransparent.png"
import "./HomeNavBar.css"
import { Link } from 'react-router-dom';

const HomeNavBar = () => {
  return (
    <Navbar expand="lg" className="homeNavbar">
      <Container>
      <div class="mx-auto order-0 d-flex align-items-center">
        <Link to="/" className="menu-icon-link">
            <List className= "mx-4 list-icon-home"/>
        </Link>
      </div>
        <Navbar.Brand href="#home">
          <div className="mx-auto order-0 d-flex align-items-center">
            <img alt="" src={logo} width="38" height="38" className="d-inline-block align-top mb-1"/>
            <h1 className="ms-0 h2 text-white fw-bold">uicko</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Address" id="basic-nav-dropdown" className="white-bold-text">
              <NavDropdown.Item href="#action/3.1">Address1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Address2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Edit Addresses</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="ms-1 d-flex align-items-center">
              <NavDropdown
                title={<div className="d-flex align-items-center"><Person className="text-white me-2" /><ChevronDown className="text-white" /></div>}
                id="profile-dropdown"
                className="custom-dropdown" // Add custom class
              >
                {/* Dropdown content */}
                <NavDropdown.Item href="/userprofile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/4.4">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </div>

            <div class="">
                <Link to="/" className="menu-icon-link">
                    <Cart className= "mx-4 cart-icon-home"/>
                </Link>
            </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavBar;


