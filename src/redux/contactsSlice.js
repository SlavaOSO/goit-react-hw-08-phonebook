import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null    
  },
  extraReducers: {
     [fetchContacts.fulfilled](state, action) {    
      console.log(state);
      state.isLoading = false;
      state.items = action.payload;    
  },
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },

    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, payload],
        isLoading: false,
        error: null,
      };
        },
    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [addContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== payload.id)],
        isLoading: false,
      };
    },
    [deleteContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [deleteContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload };
    },      
  }
});



export const contactsReducer = contactsSlice.reducer;