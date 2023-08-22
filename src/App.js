import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignInSignUp/SignIn';
import HomeNavbar from './LandingPage/Navbar';
import SignUp from './SignInSignUp/signUp';
import UserInfo from './Settings/UserInfo'
import Home from './Home/Home';
import MainPage from './Settings/MainPage'

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

        <Route path = "/home">
            <Home />
        </Route>

        <Route path = '/settings'>
          <MainPage />
        </Route>
        
        <Route path = '/userprofile'>
            <UserInfo />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
