import { Record } from "immutable";
import { assign } from "lodash";
import {
  ERROR,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  LOADING,
  SUCCESS,
} from "../utils/constants";

const InitialStateInterface = {
  getUniquePost: [],
};

class InitialState extends Record(InitialStateInterface) {
  constructor(desiredValues) {
    super(assign(desiredValues));
  }
}

export const postsReducer = (state = new InitialState(), action = {}) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return state.set("isFetching", LOADING);
    case GET_POSTS_SUCCESS:
      return state.set("isFetching", SUCCESS).set("getUniquePost", action.json);
    case GET_POSTS_ERROR:
      return state.set("isFetching", ERROR);
    default:
      return state;
  }
};

export const commentsReducer = (state = new InitialState(), action = {}) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return state.set("isFetching", LOADING);
    case GET_COMMENTS_SUCCESS:
      return state.set("isFetching", SUCCESS).set("getUniquePost", action.json);
    case GET_COMMENTS_ERROR:
      return state.set("isFetching", ERROR);
    default:
      return state;
  }
};
