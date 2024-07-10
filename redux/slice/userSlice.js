// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: false,
  status: 'idle'
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
      setUser: (state, action) => {
          state.user = action.payload;
      }
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
