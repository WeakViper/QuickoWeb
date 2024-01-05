import React from 'react';
import Navbar from './Navbar';
import LandingBanner from './LandingBanner';
import OrderNowButton from './OderNowButton';
import FooterNavbar from "../Footer/footerHome";
import FeatureCards from './FeatrueCards';
import Team from './Team';

const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <Navbar sticky="top" exact />
            <div className="d-flex justify-content-center">
                <h1 className="LandingHeader m-5">
                    Grocery Delivery at the speed of now
                </h1>
            </div>
            <div className="line-separator my-5"></div>
            <LandingBanner />
            <OrderNowButton />
            <FeatureCards />
            <Team />
            <FooterNavbar />
        </div>
    );
}
 
export default LandingPage;
