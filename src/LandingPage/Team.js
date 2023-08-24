import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Team.css";
import Card from 'react-bootstrap/Card';
import Adnan from "../images/Adnan.jpg"

const Team = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const imageStyles = {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '10px',
    };

    const cardStyles = {
        height: '200px', // Adjust the height as needed
        borderRadius: '20px',
        width: '100px',
    };

    return (
        <div className="landingCarousel mb-5 p-2">
            <div className="displayHeader mt-5 mb-4 px-5 d-flex justify-content-center">
                <h1 className="h3">
                    Our Team
                </h1>
            </div>

            <div className="productCarouselContainer mx-4 my-5">
                <Carousel responsive={responsive} style={cardStyles}>
                    <a href="https://www.linkedin.com/in/adnan-fazulbhoy/" target="_blank" rel="noopener noreferrer">
                        <Card className="card-custom-2">
                            <Card.Body className="card-body-custom">
                                <div className="image-container">
                                    <img src={Adnan} alt='Adnan pic' className="image-custom mb-4" 
                                    style={{ ...imageStyles}}/>
                                </div>
                                <Card.Title className="title-custom">
                                    Adnan Fazulbhoy
                                </Card.Title>
                                <Card.Text>
                                Some dude i picked up on the street
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://www.linkedin.com/in/adnan-fazulbhoy/" target="_blank" rel="noopener noreferrer">
                        <Card className="card-custom-2">
                            <Card.Body className="card-body-custom">
                                <div className="image-container">
                                    <img src={Adnan} alt='Adnan pic' className="image-custom mb-4" 
                                    style={{ ...imageStyles}}/>
                                </div>
                                <Card.Title className="title-custom">
                                    Adnan Fazulbhoy
                                </Card.Title>
                                <Card.Text>
                                Some dude i picked up on the street
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://www.linkedin.com/in/adnan-fazulbhoy/" target="_blank" rel="noopener noreferrer">
                        <Card className="card-custom-2">
                            <Card.Body className="card-body-custom">
                                <div className="image-container">
                                    <img src={Adnan} alt='Adnan pic' className="image-custom mb-4" 
                                    style={{ ...imageStyles}}/>
                                </div>
                                <Card.Title className="title-custom">
                                    Adnan Fazulbhoy
                                </Card.Title>
                                <Card.Text>
                                Some dude i picked up on the street
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://www.linkedin.com/in/adnan-fazulbhoy/" target="_blank" rel="noopener noreferrer">
                        <Card className="card-custom-2">
                            <Card.Body className="card-body-custom">
                                <div className="image-container">
                                    <img src={Adnan} alt='Adnan pic' className="image-custom mb-4" 
                                    style={{ ...imageStyles}}/>
                                </div>
                                <Card.Title className="title-custom">
                                    Adnan Fazulbhoy
                                </Card.Title>
                                <Card.Text>
                                Some dude i picked up on the street
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>

                    <a href="https://www.linkedin.com/in/adnan-fazulbhoy/" target="_blank" rel="noopener noreferrer">
                        <Card className="card-custom-2">
                            <Card.Body className="card-body-custom">
                                <div className="image-container">
                                    <img src={Adnan} alt='Adnan pic' className="image-custom mb-4" 
                                    style={{ ...imageStyles}}/>
                                </div>
                                <Card.Title className="title-custom">
                                    Adnan Fazulbhoy
                                </Card.Title>
                                <Card.Text>
                                Some dude i picked up on the street
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>

                </Carousel>
            </div>

            <div className="line-separator my-5"></div>
        </div>
    );
};

export default Team;


