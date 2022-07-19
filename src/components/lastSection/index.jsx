import React from "react";
import CommentSection from "./commentSection";
import SideBar from "./sidebar";
import TranslationForm from "./translation";

const LastSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <TranslationForm />
          <CommentSection/>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default LastSection;
