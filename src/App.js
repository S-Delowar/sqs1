import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
// import { Route, Router, Switch } from 'react-router';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import GoogleMap from './Components/Assets/GoogleMap/GoogleMap';
import Header from './Components/Assets/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
