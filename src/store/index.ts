import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employees";
import jobsReducer from "./jobs";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    jobs: jobsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
