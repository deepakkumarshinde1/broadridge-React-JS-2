import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";
import ProductSlice from "./product.slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import ErrorSlice from "./saga/error.slice";

let sagaMiddleware = createSagaMiddleware();

let store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    product: ProductSlice.reducer,
    error: ErrorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
