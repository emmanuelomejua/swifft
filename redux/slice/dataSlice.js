import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SERVER from '../../util/server';

const initialState = {
    dataService: null,
    error: false,
    status: 'idle'
}

//get all available network plan
export const getAllData = createAsyncThunk('data/getAllData', 
    async () => {
        const res = await SERVER.get('/api/v1/services/data/');
        return res.data;
    }
)

 //get single data network
export const singleDataNwtwork = createAsyncThunk('data/singleDataNwtwork',
    async (id, { rejectWithValue }) => {
        try {
            const res = await SERVER.get(`/api/v1/services/data/${id}`);
            return res.data;
        } catch (error) {
           return rejectWithValue(error)
        }
    }
)

//success message
export const dataSuccess = createAsyncThunk('data/dataSuccess',
    async ({id, data}) => {
        try {
            const res = await SERVER.post(`/api/v1/services/data/buy-data/${id}`, data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


const dataSlice = createSlice({
    name: 'data',
    initialState,

    reducers: {
        setData: (state, action) => {
            state.dataService = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dataService = action.payload;
            })
            .addCase(getAllData.rejected, (state) => {
                state.status = 'failed';
            })

            //get single data network
            .addCase(singleDataNwtwork.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(singleDataNwtwork.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dataService = action.payload;
            })
            .addCase(singleDataNwtwork.rejected, (state) => {
                state.status = 'failed';
            })

            //success message
            .addCase(dataSuccess.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(dataSuccess.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dataService = action.payload;
            })
            .addCase(dataSuccess.rejected, (state) => {
                state.status = 'failed';
            })
    }
})

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
