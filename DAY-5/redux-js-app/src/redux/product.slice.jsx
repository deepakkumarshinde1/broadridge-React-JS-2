import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    list: [],
    singleProductDetails: null,
  },
  reducers: {
    getProductList() {},
    saveProductList(state, action) {
      state.list = action.payload;
    },
  },
});

export default ProductSlice;
export const { getProductList, saveProductList } = ProductSlice.actions;
