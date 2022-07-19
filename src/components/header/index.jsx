import React from "react";
import "./styles.scss.css";
import HeaderLogo from "../../assests/logo.png";
const Header = () => {
  return (
    <div class="container-fluid">
      <div class="row mt-2 mb-2">
        <div class="col-xl-2 col-lg-3 col-md-3 col-sm-12">
          <img class="mt-2" alt="logo" src={HeaderLogo} />
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-12">
          <div class="head-tittle">markdown1.md</div>
          <div class="head-lang">English - Spanish</div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12">
          <div class="progresstitle">Progress</div>
          <div class="progress-green">401 / 401 words</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
