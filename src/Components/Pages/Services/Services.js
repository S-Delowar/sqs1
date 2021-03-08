import React from "react";
import AllServices from "../../Assets/AllServices/AllServices";
import OurClients from "../../Assets/OurClients/OurClients";

const Services = () => {
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Our Services</span>
            <br />
            We create the opportunities!
          </h2>         
        </div>
      </section>
      <section id="services-section">
          <AllServices></AllServices>
      </section>
      <section class="client-section">
          <OurClients></OurClients>
      </section>
    </div>
  );
};

export default Services;
