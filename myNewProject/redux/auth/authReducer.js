import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    email: null,
  },
  reducers: {
    updateUserProfile: (state, payload) => ({ ...state, userId: payload.userId }),
  },
});