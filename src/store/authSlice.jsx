import { createSlice } from "@reduxjs/toolkit";

const token = sessionStorage.getItem("token");

const initialState = {
  token: token || null,
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
      state.error = null;

      sessionStorage.setItem("token", action.payload);
    },

    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    logOut: (state) => {
      sessionStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { loginUser, setToken, loginError, logOut } = authSlice.actions;
export default authSlice.reducer;
