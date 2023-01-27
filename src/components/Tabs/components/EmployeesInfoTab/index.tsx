import { useAppSelector } from "store/hook";
import { I_Employee } from "interfaces/employee";
import * as S from "./styles";

export const EmployeesInfoTab = () => {
  const employees = useAppSelector((state) => state.employees);
  const jobs = useAppSelector((state) => state.jobs);

  const getJobTitle = (jobId: string) => {
    const job = jobs.jobs.find((job) => job.id === jobId);
    return job ? `${job.department} | ${job.designation}` : "-";
  };

  return (
    <S.Cards>
      {employees.employees.map((employee: I_Employee) => (
        <S.Card key={employee.id}>
          <S.CardAvatar
            src={`https://avatars.dicebear.com/api/avataaars/${employee.id}.svg`}
          />
          <p>
            {employee.name} {employee.age} y.o
          </p>
          <p>{getJobTitle(employee.jobId)}</p>
        </S.Card>
      ))}
    </S.Cards>
  );
};
