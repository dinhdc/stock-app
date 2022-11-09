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
};

export const signUp = createAsyncThunk(ACTION.CREATE_USER, async (body) => {
  return axiosInstance.post('/api/app/sign-up', body);
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
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;
