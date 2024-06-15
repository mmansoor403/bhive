import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <p>© Copyright {currentYear}. Bhive Private Limited</p>
    </div>
  );
};

export default Footer;
