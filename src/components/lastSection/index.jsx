import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getComments, getPosts } from "../../actions/actions";
import CommentSection from "./commentSection";
import SideBar from "./sidebar";
import TranslationForm from "./translation";
import _ from "lodash";

const LastSection = ({ wordCount, setWordCount }) => {
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts()).then((res) => {
      if (res.success) {
        const data = res.response.slice(0, 20);
        const copyData = _.cloneDeep(data);
        setPosts(copyData);
      }
    });
    dispatch(getComments());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <TranslationForm
            posts={posts}
            setPosts={setPosts}
            setUserId={setUserId}
            setWordCount={setWordCount}
          />
          <CommentSection
            setComments={setComments}
            comments={comments}
            userId={userId}
          />
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default LastSection;
