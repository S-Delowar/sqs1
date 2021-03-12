//

import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Images/logo/logo-1.jpeg";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const Header = () => {
  const [change, setChange] = useState(false);
  const changePosition = 100;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "lightgray" : "transparent",
    transition: "400ms ease",
    height: "80px",
    position: "fixed",
    color:'tomato',
    right: 0,
    left: 0,
    top: 0,
  };

  return (
    <div className="header fixed-top bg-primary">
      <div className="container">
        <Navbar collapseOnSelect expand="lg"  style={style}>
          <NavLink className="navbar-brand " to="/">
            IQS
            <img src={Logo} alt="" className="logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="menu-item" to="/">
                Home
              </NavLink>
              <NavLink className="menu-item" to="/about">
                About me
              </NavLink>
              <NavLink className="menu-item" to="/services">
                Services
              </NavLink>
            </Nav>
            <Nav>
              <NavLink className="menu-item" to="/contact">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
