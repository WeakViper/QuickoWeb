import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignInSignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path = "/">
            <LandingPage />
        </Route>

        <Route path = "/signup">
            <SignUp />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
