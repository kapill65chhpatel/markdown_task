import React from "react";
import "./styles.scss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faShareAlt,
  faEye,
  faQuestionCircle,
  faExclamationTriangle,
  faComment,
  faLink,
  faBook,
  faBars,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <>
      <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 right-side-bar">
        <div className="rightside-icon">
          <FontAwesomeIcon icon={faLanguage} />
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faBook} />
          <FontAwesomeIcon icon={faLink} />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <FontAwesomeIcon icon={faQuestionCircle} />
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faShareAlt} />
          <FontAwesomeIcon icon={faFlag} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
