import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employeesData } from "./data";
import { IEmployee } from "../../interfaces/employee";

interface employeesState {
  employees: IEmployee[];
}

const initialState: employeesState = {
  employees: employeesData,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    createEmployee(state, action: PayloadAction<IEmployee>) {
      state.employees.unshift(action.payload);
    },
    updateEmployee(state, action: PayloadAction<IEmployee>) {
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
