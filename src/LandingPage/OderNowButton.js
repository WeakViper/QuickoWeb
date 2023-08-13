import "./OrderNowButton.css";
import { useHistory } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';

const OrderNowButton = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/signup');
    };

    return (
        <div className="d-grid gap-2 col-4 mx-auto">
            <button type="submit" className="btn orderNowButton rounded-pill p-2" onClick={handleClick}>
                <ArrowRight color="white" size={48} />
                <span>Order Now</span>
            </button>
        </div>
    );
}
 
export default OrderNowButton;
