// 



import React from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../Images/logo/logo-1.jpeg';

const Header = () => {
    return (
        <div className="header fixed-top bg-primary">
            <div className="container text-white">
           <Navbar collapseOnSelect expand="lg">
  <NavLink className="navbar-brand " to="/">IQS
  <img src={Logo} alt="" className="logo"/>
  </NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
                            <NavLink className="menu-item" to="/">Home</NavLink>
                            <NavLink className="menu-item" to="/about">About me</NavLink>
                            <NavLink className="menu-item" to="/services">Services</NavLink>
                        </Nav>
                        <Nav>
                        <NavLink className="menu-item" to="/contact">Contact</NavLink>

                        </Nav>
  </Navbar.Collapse>
</Navbar> 
        </div>
        </div>
    );
};

export default Header;