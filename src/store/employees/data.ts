import { IEmployee } from "../../interfaces/employee";

export const employeesData: IEmployee[] = [
  {
    name: "Max",
    jobTitle: "Web developer",
    age: "25",
    id: Math.random().toString(16).slice(2),
  },

  {
    name: "Julia",
    jobTitle: "Database analyst",
    age: "23",
    id: Math.random().toString(16).slice(2),
  },
];
