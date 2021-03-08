import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar", "container"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <div>
      {/* new navbar */}

      {/* <div className=''>
        <header className={navbarClasses.join(" ")}>
          <Link to="/" className="navigation">
            <div className="logo">Logo</div>
          </Link>
          <Link to="/" className="navigation">
            <nav >Home</nav>
          </Link>
          <Link to="/about" className="navigation">
            <nav>About Us</nav>
          </Link>
          <Link to="/services" className="navigation">
            <nav>Services</nav>
          </Link>
          <Link to="/contact" className="navigation">
            <nav>Contact</nav>
          </Link>
        </header>
      </div> */}

      <header className={navbarClasses.join(" ")} c>
        <div className="logo">
          <h1>Logo</h1>
          {/* <img src={Logo} alt="Logo" title="Logo" /> */}
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">About</Link>
            </li>
            <li>
              <Link to="/services" className="nav-item">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
