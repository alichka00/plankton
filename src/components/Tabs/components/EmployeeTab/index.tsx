import { useAppSelector } from "../../../../store/hook";
import { Table } from "../../styles";
import { IEmployee } from "../../../../interfaces/employee";
import { Card, CardAvatar, CardItem, CardWrap, CardInf } from "./styles";

export const EmployeeInfoTab = () => {
  const employees = useAppSelector((state) => state.employees);
  return (
    <Table>
      <tbody>
        <CardWrap>
          {employees.employees.map((employee: IEmployee) => (
            <td key={employee.id}>
              <Card>
                <CardItem>
                  <CardAvatar
                    src={`https://avatars.dicebear.com/api/avataaars/${employee.id}.svg`}
                  />
                </CardItem>
                <CardInf>
                  {employee.name} {employee.age} y.o
                  <br />
                  {employee.jobTitle}
                </CardInf>
              </Card>
            </td>
          ))}
        </CardWrap>
      </tbody>
    </Table>
  );
};
