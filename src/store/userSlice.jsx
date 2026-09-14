import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //stocke le profil utilisateur//
    getProfile: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.status = "succeeded";
      state.error = null;
    },
  },
});

export const { getProfile } = userSlice.actions;
export default userSlice.reducer;
