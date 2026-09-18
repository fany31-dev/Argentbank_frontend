import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || null,
    loading: false,
    error: null,
  },

  reducers: {
    // Quand on commence le login
    loginUser: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Quand le token arrive depuis Login.jsx
    setToken: (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = null;
      sessionStorage.setItem("token", action.payload);
    },

    // Quand il y a une erreur
    loginError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Déconnexion
    logout: (state) => {
      state.token = null;
      sessionStorage.removeItem("token", token);
    },
  },
});
export const { loginUser, setToken, loginError, logout } = authSlice.actions;
export default authSlice.reducer;
