import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <div className="container mb-4 map">
        <div class="section-header">
          <h2>Visit Us</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.599755406263!2d90.36292914999999!3d23.75094735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8abd1986c19%3A0x14e06df6918d8844!2sBangladesh%20National%20Parliament!5e0!3m2!1sen!2sbd!4v1615141643474!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
