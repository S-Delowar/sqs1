import React from 'react';
import './AboutUsBanner.css';
import aboutImg from "../../../Images/about/about-img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';


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
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
              <h3>
                Dolores quae porro consequatur aliquam, incidunt eius magni
                provident, doloribus omnis minus ovident
              </h3>
              <p>
                Consectetur adipisicing elit. Dolores quae porro consequatur
                aliquam, incidunt fugiat. Dolores quae porro consequatur
                aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis
                fugiat
              </p>
              <ul>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{color:"#07cc91"}} /> Dolores quae
                  porro consequatur aliquam, incidunt fugiat culpa.
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{color:"#07cc91"}} /> Dolores quae
                  porro consequatur aliquam, culpa esse aute nulla.
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{color:"#07cc91"}} /> Dolores quae
                  porro esse aute nulla. malis nulla duis fugiat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default AboutUsBanner;