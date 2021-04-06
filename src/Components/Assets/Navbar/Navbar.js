import useWindowScrollPosition from '@rehooks/window-scroll-position';
import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../Images/logo/IQS-Logo.png';



function Navbar() {
   const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    const [change, setChange] = useState(false);
    const [active, setActive] = useState(false)
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
      backgroundColor: "#fff",
      boxShadow:"2px 1px 1px #33333336" ,
      color: "black",
      transition: "400ms ease",
      height: "80px",
      position: "fixed",
      color: 'rgb(241, 64, 11)',
      right: 0,
      left: 0,
      top: 0,
    };

    let navLinkColor = {
      color: active ? "tomato" : "black" ,
      fontWeight: 500,
    }

  return (
    <>
      <nav>
        <div className='d-flex justify-content-center align-items-center fixed-top' style={style}>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt=""/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu} style={navLinkColor}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
                style={navLinkColor}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
                style={navLinkColor}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
                style={navLinkColor}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;