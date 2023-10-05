import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

const initalState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { email, userName, userID } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userID = userID; 
    },
    REMOVE_ACTIVE_USER: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userID = null;
    },
  },
});

export const { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state: ReduxState) => state.auth.isLoggedIn;
export const selectEmail = (state: ReduxState) => state.auth.email;
export const selectUserName = (state: ReduxState) => state.auth.userName;
export const selectUserID = (state: ReduxState) => state.auth.userID;

export default authSlice.reducer;
