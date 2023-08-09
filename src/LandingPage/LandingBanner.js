import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import banner1 from './images/banner1.png';
import banner2 from './images/banner2.png';
import banner3 from './images/banner3.png';
import Row from 'react-bootstrap/Row';
import "./LandingBanner.css"
import Carousel from 'react-bootstrap/Carousel';

function LandingBanner() {
  return (
    <Container className='px-2 pt-2 pb-4' fluid>
      <Row>
        <Col xs={12} md={12}>
          <Carousel interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
              />
            </Carousel.Item>
      </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingBanner;