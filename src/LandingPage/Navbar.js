import React from 'react';
import logo from "../images/quickoTransparent.png";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


function HomeNavbar() {
  return (
  <nav class="navbar navbar-expand-md navbar-dark introNavbar">
    <div class="container-fluid">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        </div>

        <div class="mx-auto order-0 d-flex align-items-center">
          <img alt="" src={logo} width="60" height="60" className="d-inline-block align-top"/>
          <h1 className="ms-2 h2 text-white fw-bold">Quicko</h1>
        </div>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <button className='btn btn-orange rounded-pill ms-auto px-4 mx-3'>Login</button>
          <button className='btn btn-orange rounded-pill px-4 mr-2'>SignUp</button>
        </div> 
    </div>
  </nav>
  );
}

export default HomeNavbar;
