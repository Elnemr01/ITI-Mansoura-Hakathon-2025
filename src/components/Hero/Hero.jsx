import React from "react";
import "./hero.css";
import { assets } from "../../assets/assets_frontend/assets";

const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="info">
          <h2>Book Appointment With Trusted Doctors</h2>
          <div className="image-info">
            <img src={assets.group_profiles} alt="" />
            <div className="parag">
              <p>
                Simply browse through our extensive list of trusted doctors,
              </p>
              <hr className="separator" />
              <p>schedule your appointment hassle-free.</p>
            </div>
          </div>
          <a href="#">
            <p>Book appointment</p>
          </a>
        </div>
        <div className="image">
          <img src={assets.header_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
