import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from 'react-router-dom';
import "./CategoriesCarousel.css"

const Categories = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 9
        },
        desktop: {
          breakpoint: { max: 3000, min: 1600 },
          items: 7
        },
        smallDesktop: {
          breakpoint: { max: 1600, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const history = useHistory();

    const handleClick = () => {
        history.push('/signup');
    };

    // Generate an array of 10 items for the loop
    const buttonArray = Array.from({ length: 10 }, (v, index) => index + 1);

    return (
        <div className="categoriesCarousel mt-5 px-5">
            <Carousel responsive={responsive}>
                {buttonArray.map((item) => (
                    <div key={item}>
                        <button type="submit" className="btn categoriesButton rounded-pill" onClick={handleClick}>
                            <span>Button {item}</span>
                        </button>
                    </div>
                ))}
            </Carousel>

            <div className="line-separator my-5"></div>
        </div>
    );
}

export default Categories;




