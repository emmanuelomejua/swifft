import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from "redux-persist/lib/storage";
import authSlice from "./slice/authSlice";
import dataSlice from "./slice/dataSlice";
import airtimeSlice from "./slice/airtimeSlice";


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  data: dataSlice,
  airtime: airtimeSlice
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export let persistor = persistStore(store);
