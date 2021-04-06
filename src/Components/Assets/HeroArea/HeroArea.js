import React from "react";
import "./HeroArea.css";
import img1 from "../../../Images/banner/banner.png";
import img2 from "../../../Images/banner/b2.png";
import AboutUsBanner from "../ABoutUsBanner/AboutUsBanner";
import { Link } from "react-router-dom";

const HeroArea = () => {
  return (
    <div>
      <section id="hero">
        <div class="container" id="hero-content-area">
            <div className="justify-content-center ">
            <div class="row  align-items-center">

              <div class="col-md-6 text-center hero-content pt-4">
                <h3>Welcome To </h3>
                <h1>Integrated Quality Solutions</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature.
                </p>
                <Link to="/services" class="">
                  <button className="btn btn-banner">Our Service</button>
                </Link>
              </div>
              <div class="col-md-6 pt-4">
                <img src={img1} class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>

          {/* carousel starts */}
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            {/* <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div> */}
            <div class="carousel-inner">
              <div class="carousel-item active"></div>
            </div>
            {/* <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button> */}
          </div>
          {/* <!--carousel ends--> */}
        </div>
      </section>
    </div>
  );
};

export default HeroArea;
