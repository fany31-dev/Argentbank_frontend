import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./userThunks";

const userSlice = createSlice({
  name: "user",

  initialState: {
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Requête en cours
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      // Profil récupéré avec succès
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
        state.status = "succeeded";
        state.error = null;
      })

      // Erreur lors de la récupération
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.userName = null;
        state.error = action.payload?.message || "Erreur inconnue";
      });
  },
});

export default userSlice.reducer;
