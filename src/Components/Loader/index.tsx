import React from "react";
import logo from "../../Assets/Images/logo.svg";
import "./loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Loader;
