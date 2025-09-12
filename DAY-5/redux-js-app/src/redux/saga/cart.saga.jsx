import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../config/axios";
import {
  addToCart,
  getCartListProcess,
  getCartListSuccess,
  saveCartToServerFail,
} from "../cart.slice";

function addToCartService(product) {
  return api.post("/cart", product);
}

function getCartService(product) {
  return api.get("/cart", product);
}

function* addToCartHandler(action) {
  try {
    let product = action.payload;

    let { data } = yield call(addToCartService, {
      productId: product._id,
      quantity: 1,
      image: product.images[0],
      productName: product.title,
    });
    yield put(getCartListSuccess(data.items));
  } catch (error) {
    yield put(saveCartToServerFail(error.message));
  }
}

function* getCartHandler(action) {
  try {
    let { data } = yield call(getCartService);
    yield put(getCartListSuccess(data.items));
  } catch (error) {
    yield put(saveCartToServerFail(error.message));
  }
}

export function* addToCartWatcher() {
  yield takeLatest(addToCart.type, addToCartHandler);
}

export function* getCartWatcher() {
  yield takeLatest(getCartListProcess.type, getCartHandler);
}
