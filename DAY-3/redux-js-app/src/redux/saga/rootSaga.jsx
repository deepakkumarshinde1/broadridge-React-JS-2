import { all } from "redux-saga/effects";
import { getProductDetailWatcher } from "./product.saga";

function* rootSaga() {
  let watcher = [getProductDetailWatcher()];
  yield all(watcher);
}

export default rootSaga;
