import React from "react";
import "./AboutUsBanner.css";
import aboutImg from "../../../Images/about/about-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const AboutUsBanner = () => {
  return (
    <div>
      <section id="about" className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-img">
              <img src={aboutImg} alt="" />
            </div>

            <div className="col-lg-6 content">
              <p>
              Integrated Quality Solutions is an emerging SUPPORT SERVICE PROVIDER of Bangladesh, having the global standard capability for Quality, Environment, Health & Safety, Energy Management, Social Compliance, HR solutions, Project Management, Training Services, etc. We develop and deliver solutions that enable our clients to achieve their desired goals and focus on the development of human resources as well as organizational growth.
              </p>
              <br />
              <p>
              Integrated Quality Solutions provide support for establishing and certifying an organization’s management system based on ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO/IEC 27001, ISO 13485, ISO/IEC 20000-1, FSSC 22000 v. 5, ISO 22301, ISO 50001, etc.
              </p>
              <p>
              We provide tailor-made services as per our clients’ requirements Organizational Development, Production Process Development in all major sectors. We also specialize in Social Compliance support services like BSCI, SEDEX, WRAP, GOTS, GRS, RCS, OCS, HACCP, GMP, GDP, C-TPAT, etc. 
              </p>
              {/* <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
              <h3>
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident
              </h3>
              <p>
                Consectetur adipisicing elit. Dolores quae porro consequatur
                aliquam, incidunt fugiat. Dolores quae porro consequatur
                aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis
                fugiat
              </p> */}
              {/* <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#07cc91" }}
                  />{" "}
                  Dolores quae porro consequatur aliquam, incidunt fugiat culpa.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#07cc91" }}
                  />{" "}
                  Dolores quae porro consequatur aliquam, culpa esse aute nulla.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#07cc91" }}
                  />{" "}
                  Dolores quae porro esse aute nulla. malis nulla duis fugiat
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="container">
        We always give our best to our clients, our people, and our community. We care for our client's business and believe in a win-win situation for sustainability for all of us. Integrated Quality Solutions consists of a supreme team of national and international experts who are qualified auditors, consultants, and advisors in different fields from technical to general which allows us to meet and fulfill our customer requirements.
        </div>
      </section>
    </div>
  );
};

export default AboutUsBanner;
