import React from 'react';
import Card from 'react-bootstrap/Card';
import Feature1 from "../images/Feature1.png";
import Feature2 from "../images/Feature2.png";
import Feature3 from "../images/Feature3.png";
import Feature4 from "../images/Feature4.png";

import './FeatureCards.css'; // Import the CSS file

function FeaturedCards() {
  return (
    <div className="Features m-1">
        <div className="d-flex justify-content-center">
            <h1 className="h2 mt-5">
                Our Features
            </h1>
        </div>
        <div className="card-grid">
        <div className="card-row">
            <div className="card-column">
            <Card className="card-custom">
                <Card.Body className="card-body-custom">
                <div className="image-container">
                    <img src={Feature1} alt='Lightning emoji' className="image-custom" />
                </div>
                <Card.Title className="title-custom">
                    Lightning-Fast Delivery
                </Card.Title>
                <Card.Text>
                    Experience unparalleled speed with our Q Commerce grocery delivery. 
                    We guarantee your order at your doorstep within just 15 minutes, redefining convenience and saving you precious time.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="card-column">
            <Card className="card-custom">
                <Card.Body className="card-body-custom">
                <div className="image-container">
                    <img src={Feature2} alt='Lightning emoji' className="image-custom" />
                </div>
                <Card.Title className="title-custom">
                    Transparent Pricing
                </Card.Title>
                <Card.Text>
                Say goodbye to inflated prices. We are committed to providing you with products at the same cost as local stores. 
                No hidden fees or markups, ensuring you get genuine value for every purchase.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
        <div className="card-row mb-5">
            <div className="card-column mb-5">
            <Card className="card-custom">
                <Card.Body className="card-body-custom">
                <div className="image-container">
                    <img src={Feature3} alt='Lightning emoji' className="image-custom" />
                </div>
                <Card.Title className="title-custom">
                    Pinpoint Accuracy
                </Card.Title>
                <Card.Text>
                Never worry about substitutions or missing items again. 
                Our advanced inventory management and order fulfillment system ensure that you receive exactly what you ordered, down to the last detail.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="card-column mb-5">
            <Card className="card-custom">
                <Card.Body className="card-body-custom">
                <div className="image-container">
                    <img src={Feature4} alt='Lightning emoji' className="image-custom" />
                </div>
                <Card.Title className="title-custom">
                    24/7 Availability
                </Card.Title>
                <Card.Text>
                Your cravings and necessities don't adhere to a schedule, and neither do we. 
                Our round-the-clock service means you can shop whenever suits you best, ensuring you're never without the items you require.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
        </div>
    </div>
  );
}

export default FeaturedCards;



