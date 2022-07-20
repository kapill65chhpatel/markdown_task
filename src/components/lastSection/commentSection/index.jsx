import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss.css";
const CommentSection = ({ userId, comments, setComments }) => {
  const allComments = useSelector((state) => state.comment.getAllComments);

  useEffect(() => {
    if (userId) {
      const filteredData = allComments.filter((filterItem) => {
        if (filterItem.postId === userId) {
          return filterItem;
        }
      });
      setComments(filteredData);
    }
  }, [userId]);

  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 border-start pe-lg-0">
        <div className="comment-box">
          <h3>
            <i className="fas fa-flag"></i> Comments
          </h3>
          {comments &&
            comments.length > 0 &&
            comments.map((data) => {
              const { postId, id, email, body } = data;
              return (
                <div key={id}>
                  <p className="mb-2">
                    Post Id :
                    <span className="fw-bold">
                      {postId}{" "}
                      <i
                        className="fa fa-question-circle opacity-50"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </p>
                  <ul className="msg-list list-unstyled mt-3">
                    <li>
                      <div className="circle red"></div>
                      <div>
                        <span className="fw-bold">{email}</span>
                        <p className="small fst-italic">{body}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
