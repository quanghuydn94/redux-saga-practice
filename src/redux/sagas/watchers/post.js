import { all, takeEvery, takeLeading } from "redux-saga/effects";
import { ADD_POSTS, GET_POSTS } from "../../../config/actionTypes";
import { getPostsSaga, addPostsSaga } from "../handlers/post";

function* getPostsWatcher() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}
function* addPostsWatcher() {
  yield takeLeading(ADD_POSTS, addPostsSaga);
}

export default function* postsSaga() {
  yield all([getPostsWatcher(), addPostsWatcher()]);
}
