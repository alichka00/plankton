import { ChangeEvent, FormEvent, useState } from "react";
import { Input, ModalContent, Modal, ModalClose, Title } from "../../styles";
import { IEmployee } from "../../../../interfaces/employee";
import { useAppDispatch } from "../../../../store/hook";
import { updateEmployee } from "../../../../store/employees";
import { Button } from "../../../Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface IEmployeeUpdateProps {
  onClose: () => void;
  employee: IEmployee;
}

export const EmployeeUpdate = ({ onClose, employee }: IEmployeeUpdateProps) => {
  const [currentEmployee, setCurrentEmployee] = useState<IEmployee>({
    name: employee.name,
    jobTitle: employee.jobTitle,
    age: employee.age,
    id: employee.id,
  });
  const dispatch = useAppDispatch();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentEmployee((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateEmployee = () => {
    dispatch(updateEmployee({ ...currentEmployee, id: employee.id }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      !currentEmployee.name ||
      !currentEmployee.age ||
      !currentEmployee.jobTitle
    ) {
      return false;
    } else {
      handleUpdateEmployee();
    }
    onClose();
  };

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Title>Update Employee</Title>
        <ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </ModalClose>
        <form>
          <label>
            Name
            <Input
              type="text"
              name="name"
              value={currentEmployee.name}
              onChange={handleChangeInput}
            />
          </label>
          <label>
            Age
            <Input
              type="number"
              name="age"
              min="1"
              max="100"
              value={currentEmployee.age}
              onChange={handleChangeInput}
            />
          </label>
          <label>
            Job Title
            <Input
              type="text"
              name="jobTitle"
              value={currentEmployee.jobTitle}
              onChange={handleChangeInput}
            />
          </label>
          <Button onClick={handleSubmit}>Update</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};
