import { combineReducers } from "redux";
import { commentsReducer, postsReducer } from "./reducers";

const rootReducer = combineReducers({
  post: postsReducer,
  comment: commentsReducer,
});

export default rootReducer;
