import React from "react";
import { Link } from "react-router-dom";
import "./HeroTest.css";
import img1 from "../../../Images/banner/banner.png";

const HeroTest = () => {
  return (
    <div id="test-hero">
      <div class="container" id="test-area">
        <div
          id="carouselExampleControls"
          class="carousel slide carousel-bg"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row align-items-center">
                <div class="col-md-7 ">
                  <h1>Mega LCD TV For Sports</h1>
                  <p>
                    This is the best tv in the world for people who just want to
                    waste time in front of tv.
                  </p>
                  <h1 class="price">$1200</h1>
                  <button class="buy-now-button">Buy Now</button>
                </div>
                <div class="col-md-5">
                  <img src={img1} class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row align-items-center">
                <div class="col-md-7">
                  <h1>Cool Dude Headphone</h1>
                  <p>
                    This is the best headphone in the world for people who just
                    want to waste time in front of funky world.
                  </p>
                  <h1 class="price">$420</h1>
                  <button class="buy-now-button">Buy Now</button>
                </div>
                <div class="col-md-5">
                  <img src={img1} class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row align-items-center">
                <div class="col-md-7">
                  <h1>X-Box for your living room</h1>
                  <p>
                    This is the best x-box in the world for people who just want
                    to waste time in front of fake sports.
                  </p>
                  <h1 class="price">$600</h1>
                  <button class="buy-now-button">Buy Now</button>
                </div>
                <div class="col-md-5">
                  <img src={img1} class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroTest;
