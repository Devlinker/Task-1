import React from "react";
import "./hero.scss";
import carImg from "../../assets/img/hero-car.png";
import Navbar from "../Navbar";
import { LuCircleArrowRight } from "react-icons/lu";
import SearchBar from "../searchbar";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Navbar />

        <div className="hero-container container">
          <div className="content">
            <h1>
              Rent the Perfect Car <br className="desktop-break" />
              for Every Journey!
            </h1>

            <p>
              We open the door for you to explore the world in comfort and
              style.
              <br />
              Being your Trusted Travel Partner.
            </p>

            <div className="features">
              <div className="feature-item">
                <LuCircleArrowRight className="icon" />
                <span>Book with flexibility</span>
              </div>

              <div className="feature-item">
                <LuCircleArrowRight className="icon" />
                <span>Price transparency</span>
              </div>

              <div className="feature-item">
                <LuCircleArrowRight className="icon" />
                <span>Extend or return anytime</span>
              </div>

              <div className="feature-item">
                <LuCircleArrowRight className="icon" />
                <span>Doorstep delivery in 2 days</span>
              </div>
            </div>

            <button className="cta">Find a car</button>
          </div>

          <div className="image">
            <img src={carImg} alt="car" />
          </div>
        </div>
      </section>
      <SearchBar />
    </>
  );
};

export default Hero;
