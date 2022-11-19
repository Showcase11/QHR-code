import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import loginReducer from './Login/login.reducer';
import registerReducer from "./Register/register.reducer";

const reducers = combineReducers({
  user: loginReducer,
  users: registerReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "darkMode"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  // a non-serializable value error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
