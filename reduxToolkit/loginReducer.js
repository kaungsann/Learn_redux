import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "logged",
  initialState: {
    con: false,
  },
  reducers: {
    login: (state, { type, payload }) => {
      state.con = payload;
    },
    logout: (state, { type, payload }) => {
      state.con = payload;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
