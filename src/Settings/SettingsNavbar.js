import React from 'react';
import logo from "../images/quickoTransparent.png";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./SettingsNavbar.css"

const SettingsNavbar = () => {
    return (
        <Navbar expand="md" className="settingsNavbar">
            <Container>
                <div className="mx-auto d-flex align-items-center">
                    <img alt="" src={logo} width="38" height="38" className="d-inline-block align-top" />
                    <h1 className="ms-0 h2 text-white fw-bold">uicko</h1>
                </div>
            </Container>
        </Navbar>
    );
};

export default SettingsNavbar;
