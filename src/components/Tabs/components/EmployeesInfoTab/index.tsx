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
    <S.EmployeeTable>
      <tbody>
        <S.CardWrap>
          {employees.employees.map((employee: I_Employee) => (
            <td key={employee.id}>
              <S.Card>
                <S.CardItem>
                  <S.CardAvatar
                    src={`https://avatars.dicebear.com/api/avataaars/${employee.id}.svg`}
                  />
                </S.CardItem>
                <S.CardInfo>
                  {employee.name} {employee.age} y.o
                  <br />
                  {getJobTitle(employee.jobId)}
                </S.CardInfo>
              </S.Card>
            </td>
          ))}
        </S.CardWrap>
      </tbody>
    </S.EmployeeTable>
  );
};
