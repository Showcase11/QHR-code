import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employee";
import { qhrApi } from "./services/api";

export const store = configureStore({
  reducer: {
    [qhrApi.reducerPath]: qhrApi.reducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(qhrApi.middleware),
});
