import * as type from "../../config/actionTypes";
const initialState = {
  post: [],
  isLoading: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case type.GET_POSTS_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case type.GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case type.ADD_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case type.ADD_POSTS_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case type.ADD_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
