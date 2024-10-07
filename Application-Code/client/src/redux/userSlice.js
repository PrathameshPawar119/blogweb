import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userID: "",
    userBlogs: [],
    userName: null,
    token: null,
  },
  reducers: {
    setUser(state, action) {
      state.userBlogs = action.payload.userBlogs;
      state.userName = action.payload.userName;
      state.userID = action.payload.userID;
      state.token = action.payload.token;
    },
    clearUser(state) {
      state.userID = "";
      state.userBlogs = [];
      state.userName = null;
      state.token = null;
    },
    updateSavedPosts(state, action) {
      if (state.userBlogs) {
        state.userBlogs = action.payload;
      }
    },
  },
});

export const { setUser, clearUser, updateSavedPosts } = userSlice.actions;

export default userSlice.reducer;
