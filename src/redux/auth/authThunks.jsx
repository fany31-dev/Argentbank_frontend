// LOGIN
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:3001/api/v1";

export const authLoginUser = createAsyncThunk(
  "auth/loginUser",

  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Vérification de la réponse
      if (!response.ok) {
        return rejectWithValue({
          status: response.status,
          message: data?.message || `Erreur HTTP ${response.status}`,
        });
      }

      const token = data.body.token;
      console.log("Token reçu :", token);

      // Redux reçoit le token
      return token;
    } catch (error) {
      console.error("Erreur API login : ", error.message);
      return rejectWithValue({ message: error.message });
    }
  },
);
