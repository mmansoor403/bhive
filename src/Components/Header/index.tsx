import React from "react";
import logo from "../../Assets/Images/logo.svg";
import call from "../../Assets/Images/call.svg";
import "./header.css";

const Header: React.FC = () => {
  return (
    <section className="header-wrapper">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-quick-links">
        <div>
          <img src={call} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Header;
