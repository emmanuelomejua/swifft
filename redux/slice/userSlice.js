// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  phoneNumber: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
