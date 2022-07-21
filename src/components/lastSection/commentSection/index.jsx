import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss.css";
const CommentSection = ({ userId, comments, setComments }) => {
  const allComments = useSelector((state) => state.comment.getAllComments);

  useEffect(() => {
    if (userId) {
      const filteredData = allComments.filter(
        (filterItem) => filterItem.postId === userId
      );
      setComments(filteredData);
    }
  }, [userId, allComments, setComments]);

  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 border-start pe-lg-0">
        <div className="comment-box">
          <h3>
            <FontAwesomeIcon icon={faFlag} />
            {"  "}Comments
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
                      {postId} <FontAwesomeIcon icon={faQuestionCircle} />
                    </span>
                  </p>
                  <ul className="msg-list list-unstyled mt-3">
                    <li>
                      <div className="circle red"></div>
                      <div className="width-90">
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
