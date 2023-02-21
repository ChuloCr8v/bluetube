import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getVideoStart: (state) => {
      state.loading = true;
    },
    getVideoSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.videos = action.payload;
    },
    getVideoFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getVideoStart, getVideoSuccess, getVideoFailure } =
  videoSlice.actions;

export default videoSlice.reducer;
