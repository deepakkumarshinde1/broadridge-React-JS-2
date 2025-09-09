import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getProductList, saveProductList } from "../product.slice";
import { setError } from "./error.slice";
import axios from "../../config/axios";

// service
function getProductDetailService() {
  return axios.get("/users");
}

// handler
function* getProductDetailHandler() {
  try {
    let response = yield call(getProductDetailService);
    if (response.status === 200) {
      yield put(saveProductList(response.data));
    } else {
      let error =
        response.status === 404
          ? "Request not found"
          : "Something went wrong, try again";
      throw new Error(error);
    }
  } catch (error) {
    //  yield put(setError(error));
  }
}

// watcher
export function* getProductDetailWatcher() {
  yield takeLatest(getProductList.type, getProductDetailHandler);
}
