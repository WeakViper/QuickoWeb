import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import "./CategoriesCarousel.css"

const Categories = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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

      const history = useHistory();

      const handleClick = () => {
        history.push('/signup');
    };

    return (
        <div className="categoriesCarousel mx-5 px-5">
            <Carousel responsive={responsive}>
                <div>
                <button type="submit" className="btn categoriesButton rounded-pill px-5 py-1" onClick={handleClick}>
                    <span>Food</span>
                </button>
                </div>                
            </Carousel>
        </div>
    );
}
 
export default Categories;



