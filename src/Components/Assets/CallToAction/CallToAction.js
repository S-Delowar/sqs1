import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div>
      <section id="call-to-action" className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-lg-left">
              <h3 className="cta-title">Get Our Service</h3>
              <p className="cta-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa
                esse aute nulla cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <Link to="/contact">
                <h4 className="cta-btn align-middle" href="#contact">
                  Contact Us
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
