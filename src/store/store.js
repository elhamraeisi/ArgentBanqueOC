import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
const persistConfig = {
  key: "userStore",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

export const persistor = persistStore(store);
