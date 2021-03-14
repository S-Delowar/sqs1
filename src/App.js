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
import Footer from './Components/Assets/Footer/Footer';
import Contact from './Components/Pages/Contact/Contact';
import Navbar from './Components/Assets/Navbar/Navbar';
import NotFound from './Components/Assets/NotFound/NotFound';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
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
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
