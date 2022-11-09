import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../config';

const initialState = {
  isLogin: false,
  loading: false,
  success: false,
  failure: false,
};

const ACTION = {
  CREATE_USER: 'user/signUp',
  LOGIN: 'user/login'
};

export const signUp = createAsyncThunk(ACTION.CREATE_USER, async (body) => {
  return axiosInstance.post('/api/app/sign-up', body);
});

export const signIn = createAsyncThunk(ACTION.LOGIN, async (body) => {
  return axiosInstance.post('/api/app/login', body);
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [signUp.pending.toString()]: (state) => {
      state.loading = true;
    },
    [signUp.rejected.toString()]: (state) => {
      state.loading = false;
      state.failure = true;
    },
    [signUp.fulfilled.toString()]: (state) => {
      state.success = true;
      state.loading = false;
    },

    [signIn.pending.toString()]: (state) => {
      state.loading = true;
    },
    [signIn.rejected.toString()]: (state) => {
      state.loading = false;
      state.failure = true;
    },
    [signIn.fulfilled.toString()]: (state, action) => {
      state.success = true;
      state.loading = false;
      state.isLogin = true;
      state.token = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;
