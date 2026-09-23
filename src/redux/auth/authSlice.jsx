import { createSlice } from "@reduxjs/toolkit";
import { authLoginUser } from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || null,
    status: "idle",
    error: null,
  },

  reducers: {
    logout(state) {
      state.token = null;
      state.status = "idle";
      state.error = null;
      sessionStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      // Quand on commence le login
      .addCase(authLoginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      // Quand le token arrive depuis Login.jsx
      .addCase(authLoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload; // token reçu du thunk
        state.error = null;
        sessionStorage.setItem("token", action.payload);
      })

      // Quand il y a une erreur
      .addCase(authLoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.error = action.payload?.message || "Erreur inconnue";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
