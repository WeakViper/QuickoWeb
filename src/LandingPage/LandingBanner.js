import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import banner2 from './images/banner2.png';
import banner3 from './images/banner3.png';
import banner4 from './images/banner4.png';
import banner5 from './images/banner5.png';
import Row from 'react-bootstrap/Row';
import "./LandingBanner.css"
import Carousel from 'react-bootstrap/Carousel';

function LandingBanner() {
  return (
    <Container className='px-2 pt-2 pb-4 my-5' fluid>
      <Row>
        <Col xs={12} md={12}>
          <Carousel interval={3000} className="carousel-landing">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner4}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner5}
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