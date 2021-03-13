import useWindowScrollPosition from '@rehooks/window-scroll-position';
import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../Images/logo/IQS-Logo.png';



function Navbar() {

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
      backgroundColor: change ? "#fff" : "transparent",
      boxShadow:  change ? "2px 1px 1px #33333336" : "none",
      transition: "400ms ease",
      height: "80px",
      position: "fixed",
      color:'tomato',
      right: 0,
      left: 0,
      top: 0,
    };
  


  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // const [navbar, setNavbar] = useState(false); //1

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

//   const changeBackground = () => {
//     if(window.scrollY >= 80) {
//         setNavbar(true);
//     } else {
//         setNavbar(false);
//     }

// }

//   window.addEventListener('scroll', changeBackground)



  return (
    <>
      <nav className="test">
        <div className='d-flex justify-content-center align-items-center fixed-top' style={style}>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt=""/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;