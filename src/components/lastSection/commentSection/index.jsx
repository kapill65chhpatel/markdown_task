import React from "react";
import "./styles.scss.css";
const CommentSection = () => {
  return <>
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 border-start pe-lg-0">
      <div class="comment-box">
        <h3><i class="fas fa-flag"></i> Quality Check</h3>
        <div>
          <p class="mb-2">Expected Quality: <span class="fw-bold">Localization <i class="fa fa-question-circle opacity-50" aria-hidden="true"></i></span></p>
          <p class="fw-bold mb-2">Please highlights as shown below any error or mistakes in the original translation.</p>
          <small>Be aware that it is not possible to create subselection or selections overlapping each other.</small>

          <ul class="msg-list list-unstyled mt-3">
            <li>
              <div class="circle red"></div>
              <div>
                <span class="fw-bold">Spelling mistake</span>
                <p class="small fst-italic">An error in the conventionally accepted from of spelling a word. Including typo's.</p>
              </div>
            </li>
            <li>
              <div class="circle purpal"></div>
              <div>
                <span class="fw-bold">Spelling mistake</span>
                <p class="small fst-italic">An error in the conventionally accepted from of spelling a word. Including typo's.</p>
              </div>
            </li>
            <li>
              <div class="circle yellow"></div>
              <div>
                <span class="fw-bold">Spelling mistake</span>
                <p class="small fst-italic">An error in the conventionally accepted from of spelling a word. Including typo's.</p>
              </div>
            </li>
            <li>
              <div class="circle blue"></div>
              <div>
                <span class="fw-bold">Spelling mistake</span>
                <p class="small fst-italic">An error in the conventionally accepted from of spelling a word. Including typo's.</p>
              </div>
            </li>
            <li>
              <div class="circle sky-blue"></div>
              <div>
                <span class="fw-bold">Spelling mistake</span>
                <p class="small fst-italic">An error in the conventionally accepted from of spelling a word. Including typo's.</p>
              </div>
            </li>
            <li>
              <div class="circle green"></div>
              <div>
                <span class="fw-bold">Spelling mistake</span>
                <p class="small fst-italic">An error in the conventionally accepted from of spelling a word. Including typo's.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
};

export default CommentSection;
