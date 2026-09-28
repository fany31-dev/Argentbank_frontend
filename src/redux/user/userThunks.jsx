import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:3001/api/v1";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",

  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/user/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const dataUser = await response.json();

      //Vérification de la réponse
      if (!response.ok) {
        return rejectWithValue({
          status: response.status,
          message: `Erreur HTTP ${response.status}`,
        });
      }

      console.log("donnees user:", dataUser.body);

      // Redux reçoit le token
      return dataUser.body;
    } catch (error) {
      console.error("Erreur API login : ", error.message);
      return rejectWithValue({ message: error.message });
    }
  },
);
