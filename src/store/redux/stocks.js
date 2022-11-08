import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../config';

const initialState = {
    data: [],
    loading: false,
    success: false,
    failure: false
};

const ACTION = {
    GET_STOCKS: 'stock/getAll',
    FILTER_STOCKS: 'stock/getByFilter',
    CREATE_STOCK: 'stock/createStock'
};

export const getAllStocks = createAsyncThunk(ACTION.GET_STOCKS, async () => {
    return axiosInstance.get('/api/stocks/get-all');
});

export const getFilterStocks = createAsyncThunk(ACTION.FILTER_STOCKS, async body => {
    return axiosInstance.get('/api/stocks', { params: body });
});

export const createStock = createAsyncThunk(ACTION.CREATE_STOCK, async body => {
    return axiosInstance.post('/api/stocks/add-stock', body);
})


const stockSlice = createSlice({
    name: 'stock',
    initialState: initialState,
    extraReducers: {
        [getAllStocks.pending.toString()]: state => {
            state.loading = true;
        },
        [getAllStocks.rejected.toString()]: state => {
            state.loading = false;
        },
        [getAllStocks.fulfilled.toString()]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },

        [getFilterStocks.pending.toString()]: state => {
            state.loading = true;
        },
        [getFilterStocks.rejected.toString()]: state => {
            state.loading = false;
        },
        [getFilterStocks.fulfilled.toString()]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },

        [createStock.pending.toString()]: state => {
            state.loading = true;
        },
        [createStock.rejected.toString()]: state => {
            state.loading = false;
            state.failure = true;
        },
        [createStock.fulfilled.toString()]: (state) => {
            state.success = true;
            state.loading = false;
        }
    }
});

const { reducer: stockReducer } = stockSlice;
export default stockReducer;
