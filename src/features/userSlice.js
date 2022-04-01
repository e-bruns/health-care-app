import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    client: null,
    uid: null
  },
  reducers: {
    login: (state, action) => {
      console.group();
      console.log(state);
      console.log(action);
      console.groupEnd();
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },

});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
