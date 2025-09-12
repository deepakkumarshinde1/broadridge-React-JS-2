import { all } from "redux-saga/effects";
import { getProductDetailWatcher } from "./product.saga";
import { addToCartWatcher, getCartWatcher } from "./cart.saga";

function* rootSaga() {
  let watcher = [
    getProductDetailWatcher(),
    addToCartWatcher(),
    getCartWatcher(),
  ];
  yield all(watcher);
}

export default rootSaga;
