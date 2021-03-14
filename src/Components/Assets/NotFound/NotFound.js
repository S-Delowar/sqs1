import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
        <div className="not-found-page">
      <section id="innerBanner">
        <div className="inner-content">
          <h2>
            <span>Sorry!</span>
          </h2>
        </div>
      </section>
      <div className="text-center mt-4">
        <h4>Sorry! Page Not Found</h4>
        <h5>Error Code - 404</h5>
      </div>
    </div>
    <CallToAction></CallToAction>
    </div>
  );
};

export default NotFound;
