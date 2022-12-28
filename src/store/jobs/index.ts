import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jobsData } from "./data";
import { I_Job } from "interfaces/job";

interface jobsState {
  jobs: I_Job[];
}

const initialState: jobsState = {
  jobs: jobsData,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    createJob(state, action: PayloadAction<I_Job>) {
      state.jobs.unshift(action.payload);
    },
    updateJob(state, action: PayloadAction<I_Job>) {
      state.jobs = state.jobs.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteJob(state, action: PayloadAction<string>) {
      state.jobs = state.jobs.filter((item) => item.id !== action.payload);
    },
  },
});

export const { createJob, updateJob, deleteJob } = jobsSlice.actions;

export default jobsSlice.reducer;
