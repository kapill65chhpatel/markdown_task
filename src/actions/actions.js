import axios from "axios";
import {
  GET_COMMENTS_ERROR,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "../utils/constants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getPostsRequest = () => {
  return (dispatch) => {
    dispatch({ type: GET_POSTS_REQUEST });
    return axios
      .get("https://jsonplaceholder.typicode.com/posts", config)
      .then((response) => {
        dispatch({ type: GET_POSTS_SUCCESS, json: response });
        return { success: true, response: response.data };
      })
      .catch((error) =>
        dispatch({ type: GET_POSTS_ERROR, error: error.message })
      );
  };
};

const getCommentsRequest = () => {
  return (dispatch) => {
    dispatch({ type: GET_COMMENTS_REQUEST });
    return axios
      .get("https://jsonplaceholder.typicode.com/comments", config)
      .then((response) => {
        dispatch({ type: GET_COMMENTS_SUCCESS, json: response });
      })
      .catch((error) =>
        dispatch({ type: GET_COMMENTS_ERROR, error: error.message })
      );
  };
};

export const getPosts = (data) => (dispatch) => {
  return dispatch(getPostsRequest(data));
};
export const getComments = (data) => (dispatch) => {
  return dispatch(getCommentsRequest(data));
};
