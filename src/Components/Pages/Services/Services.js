import React from "react";
import './Services.css';
import AboutUsBanner from "../../Assets/ABoutUsBanner/AboutUsBanner";
import AllServices from "../../Assets/AllServices/AllServices";
import CallToAction from "../../Assets/CallToAction/CallToAction";
import OurClients from "../../Assets/OurClients/OurClients";

const Services = () => {
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span className="text-white">Our Services</span>
            <br />
            We create the opportunities!
          </h2>
        </div>
      </section>
      <section id="services-section">
        <AllServices></AllServices>
      </section>
      <section className="client-section">
        <OurClients></OurClients>
      </section>
      {/* <section className="about-us-banner">
        <AboutUsBanner></AboutUsBanner>
      </section> */}
      <section>
      <CallToAction></CallToAction>
      </section>
    </div>
  );
};

export default Services;
