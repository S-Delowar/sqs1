import React from "react";
import "./About.css";
import OurTeam from "../../Assets/OurTeam/OurTeam";
import OurClients from "../../Assets/OurClients/OurClients";
import AboutUsBanner from "../../Assets/ABoutUsBanner/AboutUsBanner";
import CallToAction from "../../Assets/CallToAction/CallToAction";
import Testimonials from "../../Assets/Testimonials/Testimonials";

const About = () => {
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span className="text-white">About Us</span>
            <br />
            We create the opportunities!
          </h2>
          <div></div>
        </div>
      </section>
      <section className="about-us-banner">
        <AboutUsBanner></AboutUsBanner>
      </section>
      {/* <section className="team-section">
        <OurTeam></OurTeam>
      </section> */}
      {/* <section className="clients-section">
        <OurClients></OurClients>
      </section> */}
     
      {/* <section>
        <Testimonials></Testimonials>
      </section>
      <section>
      <CallToAction></CallToAction>
      </section> */}
    </div>
  );
};

export default About;
