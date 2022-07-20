import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCopyright,
  faAngleDoubleLeft,
  faChevronLeft,
  faChevronRight,
  faAngleDoubleRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss.css";

const BreadCrumbs = () => {
  return (
    <div className="header-gray-bg">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="icons-head">
            <FontAwesomeIcon icon={faDownload} />
            <FontAwesomeIcon icon={faCopyright} className="color-blue" />
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faAngleDoubleRight} />
            <FontAwesomeIcon icon={faAngleDoubleRight} />
            <FontAwesomeIcon icon={faEye} className="color-blue" />
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
