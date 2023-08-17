import React from 'react';
import logo from "../images/quickoTransparent.png";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';





function HomeNavbar() {
  const history=useHistory();
  const handleClickLogin= () =>{
    history.push("/signin")

  }
  const handleSignUp= () =>{
    history.push("/signup")
    
  }
  
  return (
  <nav class="navbar navbar-expand-md navbar-dark introNavbar">
    <div class="container-fluid">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        </div>

        <div class="mx-auto order-0 d-flex align-items-center">
          <img alt="" src={logo} width="38" height="38" className="d-inline-block align-top"/>
          <h1 className="ms-0 h2 text-white fw-bold">uicko</h1>
        </div>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <button className='btn btn-orange rounded-pill ms-auto px-4 mx-3' onClick={handleClickLogin}>Login</button>
          <button className='btn btn-orange rounded-pill px-4 mr-2' onClick={handleSignUp}>SignUp</button>
        </div> 
    </div>
  </nav>
  );
}

export default HomeNavbar;
