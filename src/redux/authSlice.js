import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './operations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoged: false,
    isRefreshing: false,
    isLogout: true,
    error: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.pending](state) {
        state.error = '';
      },
      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoged = true;
      },
      [register.rejected](state, action) {
        state.error = action.payload;
      },  
      [login.pending](state) {
        state.error = '';
      },
      [login.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoged = true;
        },    
      [login.rejected](state, action) {
        state.error = action.payload;
      },  
      [logout.pending](state) {
        state.error = '';
      },
      [logout.fulfilled](state) {
        state.user = { name: '', email: '' };
        state.isLoged = false;
        state.token = null;
      },
      [refresh.pending](state) {
        state.isRefreshing = true;
        state.error = '';
      },
  
      [refresh.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoged = true;
        state.isRefreshing = false;
        state.error = '';
      },
      [refresh.rejected](state) {
        state.isRefreshing = false;
      },
    },
  });
  
  export const authReducer = authSlice.reducer;