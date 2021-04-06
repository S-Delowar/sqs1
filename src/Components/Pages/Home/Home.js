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

const Home = () => {
  return (
    <div>
      <HeroArea></HeroArea>
        <div id="about" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>What We Do</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident, doloribus omnis minus
                temporibus perferendis nesciunt..
              </p>
            </div>
          </div>
        </div>
        <WhatWeDo></WhatWeDo>
      <AboutUsBanner></AboutUsBanner>
      <OurClients></OurClients>
      <Testimonials></Testimonials>
      <GoogleMap></GoogleMap>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
