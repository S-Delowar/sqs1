import React from "react";
import "./Contact.css";
import ContactForm from "../../Assets/ContactForm/ContactForm";
import GoogleMap from "../../Assets/GoogleMap/GoogleMap";
import Address from "../../Assets/Address/Address";


const Contact = () => {
  return (
    <div>
      <section id="innerBanner">
        <div class="inner-content">
          <h2>
            <span>Get In Touch</span>
            <br />
            We create the opportunities!
          </h2>
        </div>
      </section>
      {/* contact .... */}
      <section id="contact" class="wow fadeInUp">
        <div class="container">
          <div class="section-header">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              quae porro consequatur aliquam, incidunt fugiat culpa esse aute
              nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit
              export irure minim illum fore
            </p>
          </div>

          <div class="row contact-info">
            <div class="col-lg-5">
             <Address></Address>
            </div>
            <div class="col-lg-7">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </section>
      <section>
        <GoogleMap></GoogleMap>
      </section>
    </div>
  );
};

export default Contact;
