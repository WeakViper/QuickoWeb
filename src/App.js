import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./LandingPage/Navbar"
import LandingBanner from './LandingPage/LandingBanner';
import OrderNowButton from './LandingPage/OderNowButton';
import Products from './LandingPage/ProductCarousel';

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" />
      <LandingBanner />
      <OrderNowButton />
      <Products />
    </div>
  );
}

export default App;
