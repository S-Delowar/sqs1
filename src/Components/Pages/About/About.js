import React from "react";
import "./About.css";
import OurTeam from "../../Assets/OurTeam/OurTeam";
import OurClients from "../../Assets/OurClients/OurClients";
import AboutUsBanner from "../../Assets/ABoutUsBanner/AboutUsBanner";
import CallToAction from "../../Assets/CallToAction/CallToAction";

const About = () => {
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>About Us</span>
            <br />
            We create the opportunities!
          </h2>
          <div></div>
        </div>
      </section>
      <section className="about-us-banner">
        <AboutUsBanner></AboutUsBanner>
      </section>
      <section className="team-section">
        <OurTeam></OurTeam>
      </section>
      <section className="clients-section">
        <OurClients></OurClients>
      </section>
      <section>
      <CallToAction></CallToAction>
      </section>
    </div>
  );
};

export default About;
