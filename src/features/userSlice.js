import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

let initialState = {
  logged: false, user: false
};

const sessionUser = Cookies.get('@session-user')
if (sessionUser) {
  initialState = {
    logged: true,
    user: JSON.stringify(sessionUser)
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
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
