import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../LandingPage/images/banner2.png';
import banner3 from '../LandingPage/images/banner3.png';
import banner4 from '../LandingPage/images/banner4.png';
import banner5 from '../LandingPage/images/banner5.png';
import './HomeCarousel.css';

function HomeCarousel() {
  return (
    <Container className='px-2 pt-2 pb-4 mt-5 carousel-container' fluid>
      <Row>
        <Col xs={12} md={12}>
          <Carousel interval={3000} className='carousel-home'>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={banner2}
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={banner3}
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={banner4}
                alt='Third slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={banner5}
                alt='Fourth slide'
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeCarousel;

