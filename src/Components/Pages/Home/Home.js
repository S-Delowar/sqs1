import React from "react";
import AboutUsBanner from "../../Assets/ABoutUsBanner/AboutUsBanner";
import CallToAction from "../../Assets/CallToAction/CallToAction";
import Footer from "../../Assets/Footer/Footer";
import GoogleMap from "../../Assets/GoogleMap/GoogleMap";
import HeroArea from "../../Assets/HeroArea/HeroArea";
import OurClients from "../../Assets/OurClients/OurClients";
import Testimonials from "../../Assets/Testimonials/Testimonials";
import WhatWeDo from "../../Assets/WhatWeDo/WhatWeDo";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import AllServices from "../../Assets/AllServices/AllServices";

const Home = () => {
  return (
    <div>
      <HeroArea></HeroArea>
        
        <div id="about" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>About Us</h2>

            </div>
          </div>
          <AboutUsBanner></AboutUsBanner>
        </div>
      
        <div id="" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>What We Do</h2>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        {/* <WhatWeDo></WhatWeDo> */}
        <AllServices></AllServices>

      {/* <OurClients></OurClients>
      <Testimonials></Testimonials> */}
      <br />
      <br />
      <GoogleMap></GoogleMap>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
