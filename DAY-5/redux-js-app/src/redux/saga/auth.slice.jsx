import { createSlice } from "@reduxjs/toolkit";
import { getDecodeAuthToken } from "../../config/axios";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    loginDetails: null,
  },
  reducers: {
    checkLogin(state, action) {
      state.loginDetails = getDecodeAuthToken();
    },
    logout(state) {
      localStorage.removeItem("token");
      state.loginDetails = null;
    },
  },
});

export default AuthSlice;
export const { checkLogin, logout } = AuthSlice.actions;
