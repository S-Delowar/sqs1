import React from "react";
import "./Address.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Address = () => {
  return (
    <div>
      <div class="address-item">
        <FontAwesomeIcon icon={faMapMarkedAlt} className="address-icon" />{" "}
        <span className="address">Address </span>
        <br />
        <p>MN-12 Lincon Street, NewYork 12356, USA</p>
      </div>
      <div class="address-item">
        <FontAwesomeIcon icon={faPhoneAlt} className="address-icon" />
        <span className="phone"> Phone Number </span>
        <br />
        <p>+880 13100-684566</p>
      </div>
      <div class="address-item">
        <FontAwesomeIcon icon={faEnvelope} className="address-icon" />
        <span className="email"> Email </span>
        <br />
        <p>name@website.com </p>
      </div>
    </div>
  );
};

export default Address;
