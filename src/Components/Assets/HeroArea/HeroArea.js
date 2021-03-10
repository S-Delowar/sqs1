import React from "react";
import './HeroArea.css';
import img1 from '../../../Images/banner/banner.png'
import AboutUsBanner from "../ABoutUsBanner/AboutUsBanner";
import { Link } from "react-router-dom";

const HeroArea = () => {
  return (
    <div>
      <section id="hero" class="clearfix">
        <div class="container">
          <div className="row">
<div className="d-flex">
 
          <div className="col-md-6 d-flex align-items-center">
          <div class="hero-content">
            <h2>
              Business
              <br />
              <span>Consulting</span>
            </h2>
            <div>
              <Link to='/services' class="btn-banner">
            
                Our Service
          </Link>
            </div>
          </div>
          </div>
          <div className="col-md-6">
          <div class="hero-banner align-middle">
            <img src={img1} alt="" className=""  />
          </div>
          </div>
         
 
          </div>
          </div>
          
        </div>
      </section>


      
    </div>
  );
};

export default HeroArea;
