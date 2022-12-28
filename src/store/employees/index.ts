import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employeesData } from "./data";
import { I_Employee } from "interfaces/employee";

interface employeesState {
  employees: I_Employee[];
}

const initialState: employeesState = {
  employees: employeesData,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    createEmployee(state, action: PayloadAction<I_Employee>) {
      state.employees.unshift(action.payload);
    },
    updateEmployee(state, action: PayloadAction<I_Employee>) {
      state.employees = state.employees.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteEmployee(state, action: PayloadAction<string>) {
      state.employees = state.employees.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { createEmployee, updateEmployee, deleteEmployee } =
  employeesSlice.actions;

export default employeesSlice.reducer;
