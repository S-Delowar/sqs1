import React from "react";
import "./AllServices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommonsSamplingPlus, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faChartBar, faImage, faMap } from "@fortawesome/free-regular-svg-icons";
import { faChartPie, faChessQueen } from "@fortawesome/free-solid-svg-icons";

const AllServices = () => {
  return (
    <div>
      <section id="services">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartBar} className="service-icon" /> */}
                <div className="card-body">
                  <h4> 1. </h4>
                  <h4 className="card-title">ISO Certification Services (Management System Certification)</h4>
                  <p className="card-text">
                    {/* Card Text */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faImage} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">2. <br />	Calibration services </h4>
                  <p className="card-text">

                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChessQueen} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">3. <br />	Laboratory development as per ISO/IEC 17025:2017 </h4>
                  <p className="card-text">

                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faMap} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">4.	<br /> Inspection body development as per ISO/IEC 17020:2020</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartPie} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">5. <br />	Medical laboratory development as per ISO 15189:2012</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faCreativeCommonsSamplingPlus} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">6. <br />	Energy management solutions</h4>
                  <p className="card-text">

                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartPie} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">7. <br />	Environmental solutions</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartPie} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">8. <br />	HR solutions</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartPie} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">9. <br />	Project management</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartPie} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">10. <br />	Training</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartPie} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">11. <br />	Supply of Goods</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                {/* <FontAwesomeIcon icon={faChartPie} className="service-icon" /> */}
                <div className="card-body">
                  <h4 className="card-title">12. <br />	Support Services for LEED Certifications</h4>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
