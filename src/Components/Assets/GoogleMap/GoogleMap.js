import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <h2>Map</h2>
      <div className="container mb-4 map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d387191.33750346623!2d-73.979681!3d40.6974881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1541477355474"
          width="100%"
          height="350"
          frameborder="0"
          allowfullscreen
        ></iframe>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.599755406263!2d90.36292914999999!3d23.75094735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8abd1986c19%3A0x14e06df6918d8844!2sBangladesh%20National%20Parliament!5e0!3m2!1sen!2sbd!4v1615141643474!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
