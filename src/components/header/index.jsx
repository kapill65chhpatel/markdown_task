import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.scss.css";
import HeaderLogo from "../../assests/logo.png";

const Header = ({ wordCount }) => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row mt-2 mb-2">
          <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12">
            <img className="mt-2" alt="logo" src={HeaderLogo} />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
            <div className="head-tittle">markdown1.md</div>
            <div className="head-lang">English - Spanish</div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12">
            <div class="progresstitle">Progress</div>
            <ProgressBar
              bgColor={wordCount >= 100 ? "red" : "#66c879"}
              completed={wordCount >= 100 ? 100 : wordCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
