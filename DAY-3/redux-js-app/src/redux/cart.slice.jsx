import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart(state, action) {
      let product = JSON.parse(JSON.stringify(action.payload));

      let isNew = state.cartList.findIndex(
        (_product) => _product.id === product.id
      );

      if (isNew !== -1) {
        state.cartList[isNew].count += 1;
      } else {
        state.cartList.push({
          id: product.id,
          title: product.title,
          count: 1,
          image: product.images[0],
        });
      }
    },
    removeFromCart(state, action) {},
    updateCart(state, action) {},
  },
});

export default CartSlice;
export const { addToCart, removeFromCart, updateCart } = CartSlice.actions;
