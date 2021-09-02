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
        <p>28, New Airport, Uttara, Dhaka-1229 </p>
      </div>
      <div class="address-item">
        <FontAwesomeIcon icon={faPhoneAlt} className="address-icon" />
        <span className="phone"> Mobile Number </span>
        <br />
        <p>01716685805, 01717667734 </p>
      </div>
      <div class="address-item">
        <FontAwesomeIcon icon={faEnvelope} className="address-icon" />
        <span className="email"> Email </span>
        <br />
        <p>info@iqs-bd.com, maruf.iqs@gmail.com, ishtiak.iqs@gmail.com,</p>
      </div>
    </div>
  );
};

export default Address;
