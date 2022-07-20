import React from "react";
import "./styles.scss.css";

const SideBar = () => {
  return (
    <>
      <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 right-side-bar">
        <div className="rightside-icon">
          <i className="fas fa-language"></i>
          <i className="fas fa-bars"></i>
          <i className="fas fa-book"></i>
          <i className="fas fa-link"></i>
          <i className="fas fa-comment"></i>
          <i className="fas fa-exclamation-triangle"></i>
          <i className="fas fa-question-circle"></i>
          <i className="fas fa-eye"></i>
          <i className="fas fa-share-alt"></i>
          <i className="fas fa-flag"></i>
        </div>
      </div>
    </>
  );
};

export default SideBar;
