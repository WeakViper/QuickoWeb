import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignInSignUp/SignIn';
import HomeNavbar from './LandingPage/Navbar';
import UserInfo from './Settings/UserInfo'
import Home from './Home/Home';
import MainPage from './Settings/MainPage'
import AddAddress from './SignInSignUp/AddAddress';
import SignUp from './SignInSignUp/SignUp';
import Cat from './Cat';
import ContactUs from './SignInSignUp/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        
      <Switch>
        <Route exact path = "/">
          <LandingPage />
        </Route>

        <Route path = "/signin">
          <SignIn />
        </Route>
        
        <Route path = "/signup">
          <SignUp />
        </Route>

        <Route path = "/addaddress">
          <AddAddress />
        </Route>

        <Route path = "/home">
          <Home />
        </Route>

        <Route path = '/settings'>
          <MainPage />
        </Route>
        
        <Route path = '/userprofile'>
          <UserInfo />
        </Route>

        <Route path = '/contactus'>
          <ContactUs />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
