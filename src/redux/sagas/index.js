import { all } from "redux-saga/effects";
import postsSaga from "./watchers/post";
export default function* () {
  yield all([postsSaga()]);
}
