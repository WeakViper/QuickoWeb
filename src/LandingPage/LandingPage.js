import React from 'react';
import Navbar from './Navbar';
import LandingBanner from './LandingBanner';
import OrderNowButton from './OderNowButton';
import Products from './ProductCarousel';
import FooterNavbar from "../Footer/footerHome";
import FeatureCards from './FeatrueCards';

const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <Navbar sticky="top" exact />
            <LandingBanner />
            <OrderNowButton />
            <FeatureCards />
            <Products />
            <FooterNavbar />
        </div>
    );
}
 
export default LandingPage;
