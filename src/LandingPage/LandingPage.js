import React from 'react';
import Navbar from './Navbar';
import LandingBanner from './LandingBanner';
import OrderNowButton from './OderNowButton';
import Products from './ProductCarousel';

const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <Navbar sticky="top" exact />
            <LandingBanner />
            <OrderNowButton />
            <Products />
        </div>
    );
}
 
export default LandingPage;
