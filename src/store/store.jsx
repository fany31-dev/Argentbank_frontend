import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../store/index.jsx";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
