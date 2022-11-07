import { IJobTitle } from "../../interfaces/jobTitle";
export const jobTitlesData: IJobTitle[] = [
  {
    department: "Software development",
    designation: "Web developer",
    id: Math.random().toString(16).slice(2),
  },
  {
    department: "Database",
    designation: "Database analyst",
    id: Math.random().toString(16).slice(2),
  },

  {
    department: "Architecture",
    designation: "Technical architect",
    id: Math.random().toString(16).slice(2),
  },

  {
    department: "Security",
    designation: "IT security engineer",
    id: Math.random().toString(16).slice(2),
  },
  {
    department: "Management",
    designation: "Product manager",
    id: Math.random().toString(16).slice(2),
  },
  {
    department: "Support",
    designation: "IT support specialist",
    id: Math.random().toString(16).slice(2),
  },
];
