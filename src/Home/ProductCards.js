import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductCards.css";
import banner3 from '../images/testProduct.jpeg';
import { Heart } from 'react-bootstrap-icons';
import { Shuffle } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';

const ProductCards = ({ cards }) => {
  return (
    <div className="card-grid container my-5 p-2">
      <Row xs={1} md={2} lg={4} className="g-5 justify-content-center">
        {cards.map((card, index) => (
          <Col key={index}>
            <div className="product-grid">
              <div className="product-image">
                <a href="#" className="image">
                  <img className="pic-1" src={banner3} alt="Product" width="500" height="600"/>
                </a>
                <ul className="product-links">
                  <li><a href="#" data-tip="Add to Wishlist"><Heart size={18} color="red" /></a></li>
                  <li><a href="#" data-tip="Compare"><Shuffle size={18} color="blue" /></a></li>
                  <li><a href="#" data-tip="Quick View"><Search size={18} color="red" /></a></li>
                </ul>
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fas fa-star"></li>
                  <li className="fas fa-star"></li>
                  <li className="fas fa-star"></li>
                  <li className="far fa-star"></li>
                  <li className="far fa-star"></li>
                </ul>
                <h3 className="title"><a href="#">Men's Blazer</a></h3>
                <div className="price"><span>$90.00</span> $66.00</div>
                <a className="add-to-cart" href="#">add to cart</a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductCards;


