import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { superAdminReducer } from "./Slices/superAdminSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./Slices/userSlice";

const rootReducer = combineReducers({
 user: userReducer,
 superAdmin: superAdminReducer,
});

const persistConfig = {
 key: "root",
 storage,
 whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
