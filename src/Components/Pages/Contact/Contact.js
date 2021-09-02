import React from "react";
import "./Contact.css";
import ContactForm from "../../Assets/ContactForm/ContactForm";
import GoogleMap from "../../Assets/GoogleMap/GoogleMap";
import Address from "../../Assets/Address/Address";


const Contact = () => {
  return (
    <div>
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span className="text-white">Get In Touch</span>
            <br />
          </h2>
        </div>
      </section>
      <section id="contact" className="wow fadeInUp">
        <div className="container">
          <div className="section-header">
            <p>
        
            </p>
          </div>

          <div className="row contact-info">
            <div className="col-lg-5">
             <Address></Address>
            </div>
            <div className="col-lg-7">
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
