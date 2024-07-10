// userSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SERVER from '../util/server';

const initialState = {
  user: null,
  error: false,
  status: 'idle'
};

export const register = createAsyncThunk('user/register',
  async(userDetails, {rejectedWithValue}) => {
      try {
          const res = await SERVER.post('api/v1/customer', userDetails);
          return res.data;
      } catch (error) {
         return rejectedWithValue(error);
      }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
      setUser: (state, action) => {
          state.user = action.payload;
      }
  },

  extraReducers: (builder) => {
    builder
        .addCase(register.pending, (state) => {
            state.status = 'pending'
        })
    builder
        .addCase(register.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
    builder
        .addCase(register.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        })
}
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
