import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SERVER from '../util/server';

const initialState = {
    airtime: null,
    error: false,
    status: 'idle'
}

export const getAllNetwork = createAsyncThunk('airtime/getAllNetwork', 
    async () => {
        const res = await SERVER.get('/api/v1/services/airtime/');
        return res.data;
    }
)

export const getSingleNetwork = createAsyncThunk('airtime/getSingleNetwork', 
    async (id, { rejectWithValue }) => {
        try {
            const res = await SERVER.get(`/api/v1/services/airtime/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const createAirtimeNetwork = createAsyncThunk('airtime/createAirtimeNetwork', 
    async (data, { rejectWithValue }) => {
        try {
            const res = await SERVER.post('/api/v1/services/airtime/', data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const airtimeSuccess = createAsyncThunk('airtime/airtimeSuccess',
    async ({data, id}, { rejectWithValue }) => {
        try {
            const res = await SERVER.post(`/api/v1/services/airtime/buy-airtime/${id}/`, data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


const airtimeSlice = createSlice({
    name: 'airtime',
    initialState,

    reducers: {
        setAirtime: (state, action) => {
            state.airtime = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllNetwork.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getAllNetwork.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.airtime = action.payload;
            })
            .addCase(getAllNetwork.rejected, (state) => {
                state.status = 'failed'
            })


            //getting single network
            .addCase(getSingleNetwork.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getSingleNetwork.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.airtime = action.payload;
            })
            .addCase(getSingleNetwork.rejected, (state) => {
                state.status = 'failed'
            })


            //creating a network
            .addCase(createAirtimeNetwork.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(createAirtimeNetwork.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.airtime = action.payload;
            })
            .addCase(createAirtimeNetwork.rejected, (state) => {
                state.status = 'failed'
            })


            //success message
            .addCase(airtimeSuccess.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(airtimeSuccess.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.airtime = action.payload;
            })
            .addCase(airtimeSuccess.rejected, (state) => {
                state.status = 'failed'
            })
    }


})


export const { setAirtime } = airtimeSlice.actions;

export default airtimeSlice.reducer;
