import { all, call } from "redux-saga/effects";
import days from "./days";

export default function *rootSaga() {
  yield all([
    call(days)
  ]);
}
