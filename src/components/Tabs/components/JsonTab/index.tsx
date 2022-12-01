import { useAppSelector } from "../../../../store/hook";
import { Table } from "../../styles";

export const JsonTab = () => {
  const jsonEmployees = useAppSelector((state) => state.employees);
  const jsonJobTitle = useAppSelector((state) => state.jobTitles);
  return (
    <Table>
      <h3>Employee</h3>
      <pre>{JSON.stringify(jsonEmployees, undefined, 2)}</pre>
      <br />
      <h3>Job Title</h3>
      <pre>{JSON.stringify(jsonJobTitle, undefined, 2)}</pre>
    </Table>
  );
};
