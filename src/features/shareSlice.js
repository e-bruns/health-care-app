import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  share: null
};

export const shareSlice = createSlice({
  name: 'share',
  initialState,
  reducers: {
    setShare: (state, action) => {  
      state.share = action.payload;
    }
  },
});

export const { setShare } = shareSlice.actions;


export default shareSlice.reducer;
