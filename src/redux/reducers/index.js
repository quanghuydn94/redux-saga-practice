import { combineReducers } from "redux";
import PostsReducer from "./post";
export const rootReducer = combineReducers({
  posts: PostsReducer,
});
