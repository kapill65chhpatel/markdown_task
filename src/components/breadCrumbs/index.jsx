import React from "react";
import "./styles.scss.css";

const BreadCrumbs = () => {
  return (
    <div className="header-gray-bg">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="icons-head">
            <i className="fas fa-download"></i>
            <i className="far fa-copyright color-blue"></i>
            <i className="fas fa-angle-double-left"></i>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-angle-double-right"></i>
            <i className="fas fa-angle-double-right"></i>
            <i className="fas fa-eye color-blue"></i>
          </div>
          <div className="btn-head">
            <a href="/" className="btn-green">
              confirm highlights
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
