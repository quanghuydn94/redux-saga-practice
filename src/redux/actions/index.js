import * as type from "../../config/actionTypes";
export const getPosts = (payload) => {
  return {
    type: type.GET_POSTS,
    payload,
  };
};
export const getPostsSuccess = (payload) => {
  return {
    type: type.GET_POSTS_SUCCESS,
    payload,
  };
};
export const getPostsFailed = (payload) => {
  return {
    type: type.GET_POSTS_FAILED,
    payload,
  };
};
export const addPost = (payload) => {
  return {
    type: type.ADD_POSTS,
    payload,
  };
};
export const addPostsSuccess = (payload) => {
  return {
    type: type.ADD_POSTS_SUCCESS,
    payload,
  };
};
export const addPostsFailed = (payload) => {
  return {
    type: type.ADD_POSTS_FAILED,
    payload,
  };
};
