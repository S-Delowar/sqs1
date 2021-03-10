import React from 'react';
import './TestHeader.css';

const TestHeader = () => {
    return (
        <div>
             <header id="header">
      <div class="container">
        <div id="logo" class="pull-left">
          <h1>
            <a href="./index.html" id="body" class="scrollto"
              ><span><i class="ion ion-android-notifications"></i> </span
              >IQS</a
            >
          </h1>
          {/* <!-- <a href="#body"><img src="img/logo.png" alt="" title="" /></a>--> */}
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active"><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About Us</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./portfolio.html">Portfolio</a></li>
            <li class="menu-active"><a href="./contact.html">Contact</a></li>
          </ul>
        </nav>
        {/* <!-- #nav-menu-container --> */}
      </div>
    </header>
        </div>
    );
};

export default TestHeader;