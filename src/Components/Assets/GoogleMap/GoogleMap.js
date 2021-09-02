import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <div className="container mb-4 map">
        <div className="section-header">
          <h2>Visit Us</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22668.572208044334!2d90.39856416291572!3d23.84702973438664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65c61ebd19d%3A0x433c15c5d77312a8!2s28%20Tongi%20Diversion%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1630169992984!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
