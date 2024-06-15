import React from "react";
import bannerLeft from "../../Assets/Images/banner-group-left.png";
import bannerRight from "../../Assets/Images/banner-group-right.png";
import bannerMobile from "../../Assets/Images/banner-mobile.png";

import "./home.css";

const Banner: React.FC = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-left">
        <img src={bannerLeft} alt="banner-left" className="banner-left-cover" />
        <img
          src={bannerMobile}
          alt="banner-left"
          className="banner-left-cover banner-mobile"
        />
        <h1 className="fadeInUp-animation">
          Host your meeting with world-class amenities. Starting at{" "}
          <span>₹199/-!</span>
        </h1>
      </div>
      <div className="banner-right">
        <img src={bannerRight} alt="banner-right" />
      </div>
    </div>
  );
};

export default Banner;
