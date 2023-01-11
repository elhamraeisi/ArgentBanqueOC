import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    removeProfile: (state) => {
      state.profile = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, removeToken, setProfile, removeProfile } =
  userSlice.actions;

export default userSlice.reducer;
