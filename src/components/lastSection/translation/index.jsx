import React, { useRef } from "react";
import "./styles.scss.css";

const TranslationForm = ({ posts, setPosts, setUserId }) => {
  const onChangeHandler = (e, index, userId) => {
    let data = [...posts];
    data[index][e.target.name] = e.target.value;
    setPosts(data);
    setUserId(userId);
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
                        value={item.title}
                      />
                    </div>
                    <div className="input-box">
                      <textarea
                        name="title"
                        onChange={(e) => {
                          onChangeHandler(e, index, item.userId);
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
