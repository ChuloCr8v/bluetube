import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    signOut: (state) => {
      state.currentUser = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailure, signOut } =
  userSlice.actions;

export default userSlice.reducer;
