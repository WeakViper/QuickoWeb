import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ArrowLeft, PersonCircle, Clock, Question, FileText, Geo, BoxArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footerHome';
import SettingsNavbar from './SettingsNavbar';
import './MainPage.css';
import userImg from "../images/user-image.jpg"

const BackButton = () => {
    const handleClick = () => {
        window.history.back();
        console.log('Button clicked');
    };
    return (
        <Row className="mt-4">
            <Col className="text-left">
                <button className="back-button" onClick={handleClick}>
                    <ArrowLeft size={50} />
                </button>
            </Col>
        </Row>
    );
};

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

const MainPage = () => {
    return (
        <div className="main-page">
            <SettingsNavbar />
            <Container>
                <BackButton />
                <Row className="align-items-center">
                    <Col className="text-center">
                        <Link to="/userprofile">
                            <div className="user-circle">
                                {/* Edit Image Path Here */}
                                <img src={userImg} alt="User" />
                            </div>
                        </Link>
                        <div className="user-info">
                            {/* Edit User Details Here */}
                            <h4>Username</h4>
                            <p>user@example.com</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h2 className="settings-heading">Settings</h2>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <div className="banners">
                            <Banner
                                title="User Information"
                                link="/userprofile"
                                icon={PersonCircle}
                                description="Update your profile information"
                            />
                            <Banner
                                title="Order History"
                                link="/orderhistory"
                                icon={Clock}
                                description="View your past order history"
                            />
                            <Banner
                                title="Help and Support"
                                link="/page3"
                                icon={Question}
                                description="Get help and support for any issues"
                            />
                            <Banner
                                title="Terms and Conditions"
                                link="/page4"
                                icon={FileText}
                                description="Read our terms and conditions"
                            />
                            <Banner
                                title="Addresses"
                                link="/page5"
                                icon={Geo}
                                description="Manage your saved addresses"
                            />
                            <Banner
                                title="Log Out"
                                link="/page6"
                                icon={BoxArrowRight}
                                description="Logout from your account"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export {
    BackButton,
    Banner,
    MainPage, 
};
