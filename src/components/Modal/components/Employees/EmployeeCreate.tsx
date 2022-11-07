import { ChangeEvent, FormEvent, useState } from "react";
import { Input, ModalContent, Modal, ModalClose, Title } from "../../styles";
import { IEmployee } from "../../../../interfaces/employee";
import { useAppDispatch } from "../../../../store/hook";
import { createEmployee } from "../../../../store/employees";
import { Button } from "../../../Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface IEmployeeCreateProps {
  onClose: () => void;
}

export const EmployeeCreate = ({ onClose }: IEmployeeCreateProps) => {
  const [employee, setEmployee] = useState<IEmployee>({
    name: "",
    jobTitle: "",
    age: "",
    id: Math.random().toString(16).slice(2),
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!employee.name || !employee.age || !employee.jobTitle) {
      return false;
    } else {
      dispatch(createEmployee(employee));
    }
    onClose();
  };
  const dispatch = useAppDispatch();
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Title>Create Employee</Title>
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
              value={employee.name}
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
              value={employee.age}
              onChange={handleChangeInput}
            />
          </label>
          <label>
            Job Title
            <Input
              type="text"
              name="jobTitle"
              value={employee.jobTitle}
              onChange={handleChangeInput}
            />
          </label>
          <Button onClick={handleSubmit}>Add</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};
