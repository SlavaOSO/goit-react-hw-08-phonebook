import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './authSlice';
import { filterReducer } from './filterSlice'; 


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
});


export const store = configureStore({
  reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
 });


export const persistor = persistStore(store);
// export default store;
