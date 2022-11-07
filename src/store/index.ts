import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employees";
import jobTitlesReducer from "./jobTitles";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    jobTitles: jobTitlesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
