import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ArrowLeft, Check, PencilSquare, CreditCard, BoxArrowRight } from 'react-bootstrap-icons';
import Footer from '../Footer/footerHome';
import SettingsNavbar from './SettingsNavbar';
import './MainPage.css';
import { Link } from 'react-router-dom';

const Banner = ({ title, link, icon, description }) => {
    const IconComponent = icon;
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>
                    <IconComponent size={24} className="banner-icon" /> {title}
                </Card.Title>
                <p className="banner-description">{description}</p>
                <Link to={link} className="banner-link">
                    {title} <BoxArrowRight size={20} />
                </Link>
            </Card.Body>
        </Card>
    );
};

const UserInfo = () => {
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [username, setUsername] = useState("username");
    const [email, setEmail] = useState("user@example.com");
    const [phone, setPhone] = useState("123-456-7890");

    const handleEditUsernameToggle = () => {
        setIsEditingUsername(!isEditingUsername);
    };

    const handleEditEmailToggle = () => {
        setIsEditingEmail(!isEditingEmail);
    };

    const handleEditPhoneToggle = () => {
        setIsEditingPhone(!isEditingPhone);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    return (
        <div className="main-page">
            <SettingsNavbar />
            <Container>
                <Row className="mt-4">
                    <Col className="text-left">
                        <button className="back-button" onClick={() => window.history.back()}>
                            <ArrowLeft size={50} />
                        </button>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <div className="user-circle">
                            <img src="src\images\user-image.jpg" alt="User" />
                        </div>
                        <div className="user-info">
                            <h4>Username</h4>
                            <p>user@example.com</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <div className="banners">
                            <Card className="mb-3 edit-card">
                                <Card.Body>
                                    <Card.Title>Username</Card.Title>
                                    <div className="editable-field">
                                        {isEditingUsername ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={username}
                                                    onChange={handleUsernameChange}
                                                />
                                                
                                                <button
                                                    className="save-btn"
                                                    onClick={handleEditUsernameToggle}
                                                >
                                                    <Check size={20} /> Save
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {username}&nbsp;
                                                <button className="edit-btn" onClick={handleEditUsernameToggle}>
                                                    <PencilSquare size={20} className="edit-icon" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3 edit-card">
                                <Card.Body>
                                    <Card.Title>Email</Card.Title>
                                    <div className="editable-field">
                                        {isEditingEmail ? (
                                            <>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                                <button
                                                    className="save-btn"
                                                    onClick={handleEditEmailToggle}
                                                >
                                                    <Check size={20} /> Save
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {email}&nbsp;
                                                <button className="edit-btn" onClick={handleEditEmailToggle}>
                                                    <PencilSquare size={20} className="edit-icon" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3 edit-card">
                                <Card.Body>
                                    <Card.Title>Phone Number</Card.Title>
                                    <div className="editable-field">
                                        {isEditingPhone ? (
                                            <>
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={handlePhoneChange}
                                                />
                                                <button
                                                    className="save-btn"
                                                    onClick={handleEditPhoneToggle}
                                                >
                                                    <Check size={20} /> Save
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {phone}&nbsp;
                                                <button className="edit-btn" onClick={handleEditPhoneToggle}>
                                                    <PencilSquare size={20} className="edit-icon" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="banners">
                            <Banner
                                title="Payment Method"
                                link="/payment-method"
                                icon={CreditCard}
                                description="Manage your payment methods"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default UserInfo;
