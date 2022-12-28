import { useAppSelector } from "store/hook";
import * as S from "components/Tabs/styles";

export const JsonTab = () => {
  const jsonEmployees = useAppSelector((state) => state.employees);
  const jsonJobs = useAppSelector((state) => state.jobs);
  return (
    <S.Table>
      <h3>Employees</h3>
      <pre>{JSON.stringify(jsonEmployees, undefined, 2)}</pre>
      <br />
      <h3>Jobs</h3>
      <pre>{JSON.stringify(jsonJobs, undefined, 2)}</pre>
    </S.Table>
  );
};
