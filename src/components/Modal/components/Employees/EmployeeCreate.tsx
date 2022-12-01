import { ChangeEvent, FormEvent, useState } from "react";
import { IEmployee } from "../../../../interfaces/employee";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { createEmployee } from "../../../../store/employees";
import { Button } from "../../../../styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";
import {
  Input,
  ModalContent,
  Modal,
  ModalClose,
  Title,
  Select,
  Option,
} from "../../styles";

interface IEmployeeCreateProps {
  onClose: () => void;
}

export const EmployeeCreate = ({ onClose }: IEmployeeCreateProps) => {
  const jobTitles = useAppSelector((state) => state.jobTitles);
  const dispatch = useAppDispatch();

  const [employee, setEmployee] = useState<IEmployee>({
    name: "",
    jobTitle: "",
    age: "",
    id: Math.random().toString(16).slice(2),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>
          <label>
            Job Title
            <Select name="jobTitle" onChange={handleChange}>
              {jobTitles.jobTitles.map((jobTitle) => (
                <Option
                  key={jobTitle.id}
                  value={jobTitle.department + " | " + jobTitle.designation}
                >
                  {jobTitle.department} | {jobTitle.designation}
                </Option>
              ))}
            </Select>
          </label>
          <Button onClick={handleSubmit}>Add</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};
