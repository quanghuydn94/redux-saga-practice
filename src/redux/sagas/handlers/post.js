import { call, put } from "redux-saga/effects";
import { addPost, getPosts } from "../../../utils/api";
import {
  addPostsFailed,
  addPostsSuccess,
  getPostsFailed,
  getPostsSuccess,
} from "../../actions/index";
export function* getPostsSaga(action) {
  try {
    const data = yield call(getPosts);
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsFailed(error.message));
  }
}

export function* addPostsSaga(action) {
  try {
    const data = yield call(addPost, action.payload);
    yield put(addPostsSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addPostsFailed(error.message));
  }
}
