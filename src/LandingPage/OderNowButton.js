import "./OrderNowButton.css";
import { ArrowRight } from 'react-bootstrap-icons';

const OrderNowButton = () => {
    return (
        <div className="d-grid gap-2 col-4 mx-auto">
            <button type="submit" className="btn orderNowButton rounded-pill p-2">
                <ArrowRight color="white" size={48} />
                <span>Order Now</span>
            </button>
        </div>
    );
}
 
export default OrderNowButton;
