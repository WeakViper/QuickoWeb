import { Link } from 'react-router-dom';
import Footer from '../Footer/footerHome';
import SettingsNavbar from '../Settings/SettingsNavbar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ArrowLeft, PersonCircle, Clock, Question, FileText, Geo, BoxArrowRight } from 'react-bootstrap-icons';
import CartCards from './CartCards';


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

const Cart = () => {
    return (
        <div className="cart">
            <SettingsNavbar />
            <BackButton />
            <CartCards />
        </div>
    );
}
 
export default Cart;