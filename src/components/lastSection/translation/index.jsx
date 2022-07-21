import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import "./styles.scss.css";

let wordCountSum = {};
const TranslationForm = ({ posts, setPosts, setUserId, setWordCount }) => {
  const allPost = useSelector((state) => state.post.getAllPosts);
  const onChangeHandler = (e, index, userId) => {
    let data = [...posts];
    data[index][e.target.name] = e.target.value;
    setPosts(data);
    setUserId(userId);
  };

  function findDiff(from_str, to_stri) {
    let diff = "";
    from_str.split("").forEach(function (val, i) {
      if (val !== to_stri.charAt(i)) diff += val;
    });
    return diff;
  }

  const wordCounter = (str1, str2, item) => {
    if (str1.length > str2.length) {
      let diff = findDiff(str1, str2);
      wordCountSum[`item-${item.id}`] = diff
        .split(" ")
        .filter((item) => item.trim()).length;
    } else if (str2.length > str1.length) {
      let diff = findDiff(str2, str1);
      wordCountSum[`item-${item.id}`] = diff
        .split(" ")
        .filter((item) => item.trim()).length;
    }
    const totalWords = _.sum(_.values(wordCountSum));
    setWordCount(totalWords);
  };

  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
        <div className="left-side-form">
          <h2>markdown1.md</h2>
          {posts &&
            posts.length > 0 &&
            posts.map((item, index) => {
              return (
                <div key={item.id} className="form-first">
                  <label>title:{item.id}</label>
                  <div className="form-border">
                    <div className="input-box">
                      <textarea
                        name="fixedField"
                        type="text"
                        className="form-control"
                        disabled
                        value={allPost[index]["title"]}
                      />
                    </div>
                    <div className="input-box">
                      <textarea
                        name="title"
                        onChange={(e) => {
                          onChangeHandler(e, index, item.userId);
                          wordCounter(
                            allPost[index]["title"],
                            e.target.value,
                            item
                          );
                        }}
                        type="text"
                        className="form-control"
                        value={item.title}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TranslationForm;
