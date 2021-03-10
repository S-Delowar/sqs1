import logo from './logo.svg';
import './App.css';
import './main';
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './Components/Assets/Footer/Footer';
import CallToAction from './Components/Assets/CallToAction/CallToAction';
import Contact from './Components/Pages/Contact/Contact';
import ContactForm from './Components/Assets/ContactForm/ContactForm';


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
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
