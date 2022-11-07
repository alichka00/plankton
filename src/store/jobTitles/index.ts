import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jobTitlesData } from "./data";
import { IJobTitle } from "../../interfaces/jobTitle";

interface jobTitleState {
  jobTitles: IJobTitle[];
}

const initialState: jobTitleState = {
  jobTitles: jobTitlesData,
};

const jobTitlesSlice = createSlice({
  name: "jobTitles",
  initialState,
  reducers: {
    createJobTitle(state, action: PayloadAction<IJobTitle>) {
      state.jobTitles.unshift(action.payload);
    },
    updateJobTitle(state, action: PayloadAction<IJobTitle>) {
      state.jobTitles = state.jobTitles.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteJobTitle(state, action: PayloadAction<string>) {
      state.jobTitles = state.jobTitles.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { createJobTitle, updateJobTitle, deleteJobTitle } =
  jobTitlesSlice.actions;

export default jobTitlesSlice.reducer;
