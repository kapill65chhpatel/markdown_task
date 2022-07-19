import React from "react";
import "./styles.scss.css";

const BreadCrumbs = () => {
  return (
    <div class="header-gray-bg">
      <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center">
          <div class="icons-head">
            <i class="fas fa-download"></i>
            <i class="far fa-copyright color-blue"></i>
            <i class="fas fa-angle-double-left"></i>
            <i class="fas fa-chevron-left"></i>
            <i class="fas fa-chevron-right"></i>
            <i class="fas fa-angle-double-right"></i>
            <i class="fas fa-angle-double-right"></i>
            <i class="fas fa-eye color-blue"></i>
          </div>
          <div class="btn-head">
            <a href="/" class="btn-green">
              confirm highlights
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
