import React from "react";
import ingressive from "../assets/I4G-Logo-Color-Cropped.webp";
const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div className="fw-bolder">
        <span>Zuri</span>
        <span className="text-danger" style={{ fontSize: 20 }}>
          .
        </span>
        internship
      </div>
      <span>HNG internship 9 Frontend Task</span>
      <div>
        <img src={ingressive} width={100} height={20} />
      </div>
    </footer>
  );
};

export default Footer;