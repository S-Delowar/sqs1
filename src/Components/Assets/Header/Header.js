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
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <div>
      {/* new navbar */}
      <header className={navbarClasses.join(" ")}>
        <div className="logo">Logo</div>
        <nav className="navigation">Home</nav>
        <nav className="">Home</nav>
        <nav className="">Home</nav>
      </header>
    </div>
  );
};

export default Header;
