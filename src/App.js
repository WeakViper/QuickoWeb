import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignInSignUp/SignUp';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path = "/">
            <LandingPage />
        </Route>

        <Route exact path = "/signup">
            <SignUp />
        </Route>

        <Route exact path = "/home">
            <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
