import { I_Employee } from "interfaces/employee";
import * as S from "components/Tabs/styles";
import { Button } from "styles/Button/styles";
import { useAppSelector } from "store/hook";
import { EmployeeCreate } from "components/Modal/components/Employees/EmployeeCreate";
import { EmployeeUpdate } from "components/Modal/components/Employees/EmployeeUpdate";
import { useState } from "react";
import { EmployeeDelete } from "components/Modal/components/Employees/EmployeeDelete";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export const EmployeesTab = () => {
  const employees = useAppSelector((state) => state.employees);
  const jobs = useAppSelector((state) => state.jobs);

  const [createEmpModal, setCreateEmpModal] = useState(false);
  const [updateEmpModal, setUpdateEmpModal] = useState(false);
  const [deleteEmpModal, setDeleteEmpModal] = useState(false);
  const [employee, setEmployee] = useState<I_Employee>({
    name: "",
    jobId: "",
    age: "",
    id: "",
  });
  const [empId, setEmpId] = useState("");

  const handleOpenCreateEmployeeModal = () => {
    setCreateEmpModal(true);
  };

  const handleCloseCreateEmployeeModal = () => {
    setCreateEmpModal(false);
  };

  const handleOpenUpdateEmployeeModal = (employee: I_Employee) => {
    setEmployee(employee);
    setUpdateEmpModal(true);
  };

  const handleCloseUpdateEmployeeModal = () => {
    setUpdateEmpModal(false);
  };

  const handleOpenDeleteEmployeeModal = (id: string) => {
    setEmpId(id);
    setDeleteEmpModal(true);
  };

  const handleCloseDeleteEmployeeModal = () => {
    setDeleteEmpModal(false);
  };

  const getJobTitle = (jobId: string) => {
    const job = jobs.jobs.find((job) => job.id === jobId);
    return job ? `${job.department} | ${job.designation}` : "-";
  };

  return (
    <>
      <S.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>
              <Button width={120} onClick={handleOpenCreateEmployeeModal}>
                +Add
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.employees.map((employee: I_Employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{getJobTitle(employee.jobId)}</td>
              <td>
                <Button onClick={() => handleOpenUpdateEmployeeModal(employee)}>
                  <AiOutlineEdit size={20}>Update</AiOutlineEdit>
                </Button>{" "}
                <Button
                  onClick={() => handleOpenDeleteEmployeeModal(employee.id)}
                >
                  <AiOutlineDelete size={20}>Delete</AiOutlineDelete>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      {createEmpModal && (
        <EmployeeCreate onClose={handleCloseCreateEmployeeModal} />
      )}
      {updateEmpModal && (
        <EmployeeUpdate
          employee={employee}
          onClose={handleCloseUpdateEmployeeModal}
        />
      )}
      {deleteEmpModal && (
        <EmployeeDelete id={empId} onClose={handleCloseDeleteEmployeeModal} />
      )}
    </>
  );
};
