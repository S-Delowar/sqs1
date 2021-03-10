import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommonsSamplingPlus, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faChartBar, faImage, faMap } from "@fortawesome/free-regular-svg-icons";
import { faChartPie, faChessQueen } from "@fortawesome/free-solid-svg-icons";


const WhatWeDo = () => {
    return (
        <div>
            <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 ">
                <FontAwesomeIcon icon={faChartBar} className="service-icon" />
                <div className="card-body">
                  <h4 className="card-title">Marketing</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <FontAwesomeIcon icon={faImage} className="service-icon" />
                <div className="card-body">
                  <h4 className="card-title">Consulting</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <FontAwesomeIcon icon={faChessQueen} className="service-icon" />
                <div className="card-body">
                  <h4 className="card-title">Strategy</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default WhatWeDo;