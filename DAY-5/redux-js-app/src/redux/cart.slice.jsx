import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cartList: [],
    message: {
      type: "",
      message: "",
      icon: "",
    },
  },
  reducers: {
    getCartListProcess() {},
    getCartListSuccess(state, action) {
      state.cartList = action.payload;
    },
    addToCart() {},
    removeFromCart(state, action) {},

    saveCartToServerProcess() {},
    saveCartToServerSuccess() {},
    saveCartToServerFail(state, action) {
      state.message.type = "fail";
      state.message.text = action.payload;
      state.message.icon = "error";
    },
    resetMessage(state) {
      state.message.type = state.message.text = state.message.icon = "";
    },
  },
});

export default CartSlice;
export const {
  addToCart,
  removeFromCart,
  saveCartToServerFail,
  saveCartToServerProcess,
  saveCartToServerSuccess,
  resetMessage,
  getCartListSuccess,
  getCartListProcess,
} = CartSlice.actions;
