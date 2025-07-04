import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from './storage.web';
import appSlice from './slices/appSlice';

const persistConfig = {
  key: 'root',
  storage, // Use the web storage
  whitelist: ['auth', 'app'],
};

const rootReducer = combineReducers({
  auth: authSlice,
  app: appSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabling for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 