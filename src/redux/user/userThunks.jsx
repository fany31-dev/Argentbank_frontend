import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:3001/api/v1";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",

  async (_, { getState, rejectWithValue }) => {
    try {
      //recuperation du token dans store
      const token = getState().auth.token;

      // Appel API avec le token stocké
      const response = await fetch(`${baseUrl}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      //Récuperation de la réponse
      const dataUser = await response.json();

      //Vérification de la réponse
      if (!response.ok) {
        return rejectWithValue({
          status: response.status,
          message: `Erreur HTTP ${response.status}`,
        });
      }

      // retourner données utilisateur
      return dataUser.body;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  },
);
