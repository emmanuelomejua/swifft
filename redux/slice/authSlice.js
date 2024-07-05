import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SERVER from '../../util/server';

const initialState = {
    user: null,
    error: false,
    status: 'idle'
}

export const login = createAsyncThunk('auth/login',
    async(userDetails, {rejectedWithValue}) => {
        try {
            const res = await SERVER.post('api/v1/auth/login/', userDetails);
            return res.data;
        } catch (error) {
           return rejectedWithValue(error);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'pending'
            })
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
        builder
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
    }
})


export const  {  setUser } = authSlice.actions;

export default authSlice;
