import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./LandingPage/Navbar"
import LandingBanner from './LandingPage/LandingBanner';
import OrderNowButton from './LandingPage/OderNowButton';
import Products from './LandingPage/ProductCarousel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignInSignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path = "/">
            <Navbar sticky="top" />
            <LandingBanner />
            <OrderNowButton />
            <Products />
        </Route>

      
      </Switch>
      </div>
    </Router>
  );
}

export default App;
