import { IEmployee } from "../../../../interfaces/employee";
import { Table } from "../../styles";
import { Button } from "../../../../styles/Button/styles";
import { useAppSelector } from "../../../../store/hook";
import { EmployeeCreate } from "../../../Modal/components/Employees/EmployeeCreate";
import { EmployeeUpdate } from "../../../Modal/components/Employees/EmployeeUpdate";
import { useState } from "react";
import { EmployeeDelete } from "../../../Modal/components/Employees/EmployeeDelete";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export const EmployeesTab = () => {
  const employees = useAppSelector((state) => state.employees);

  const [createEmpModal, setCreateEmpModal] = useState(false);
  const [updateEmpModal, setUpdateEmpModal] = useState(false);
  const [deleteEmpModal, setDeleteEmpModal] = useState(false);
  const [employee, setEmployee] = useState<IEmployee>({
    name: "",
    jobTitle: "",
    age: "",
    id: "",
  });
  const [empId, setEmpId] = useState("");

  const employeeUpdate = (employee: IEmployee) => {
    setEmployee(employee);
    setUpdateEmpModal(true);
  };

  const employeeDelete = (id: string) => {
    setEmpId(id);
    setDeleteEmpModal(true);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job Title</th>
            <th>
              <Button width={120} onClick={() => setCreateEmpModal(true)}>
                +Add
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.employees.map((employee: IEmployee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.jobTitle}</td>
              <td>
                <Button onClick={() => employeeUpdate(employee)}>
                  <AiOutlineEdit size={20}>Update</AiOutlineEdit>
                </Button>{" "}
                <Button onClick={() => employeeDelete(employee.id)}>
                  <AiOutlineDelete size={20}>Delete</AiOutlineDelete>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {createEmpModal && (
        <EmployeeCreate onClose={() => setCreateEmpModal(false)} />
      )}
      {updateEmpModal && (
        <EmployeeUpdate
          employee={employee}
          onClose={() => setUpdateEmpModal(false)}
        />
      )}
      {deleteEmpModal && (
        <EmployeeDelete id={empId} onClose={() => setDeleteEmpModal(false)} />
      )}
    </>
  );
};
