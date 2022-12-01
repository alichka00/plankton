import { ChangeEvent, FormEvent, useState } from "react";
import { IEmployee } from "../../../../interfaces/employee";
import { useAppSelector } from "../../../../store/hook";
import { useAppDispatch } from "../../../../store/hook";
import { updateEmployee } from "../../../../store/employees";
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

interface IEmployeeUpdateProps {
  onClose: () => void;
  employee: IEmployee;
}

export const EmployeeUpdate = ({ onClose, employee }: IEmployeeUpdateProps) => {
  const jobTitles = useAppSelector((state) => state.jobTitles);

  const [currentEmployee, setCurrentEmployee] = useState<IEmployee>({
    name: employee.name,
    jobTitle: employee.jobTitle,
    age: employee.age,
    id: employee.id,
  });
  const dispatch = useAppDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
              value={currentEmployee.age}
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
          <Button onClick={handleSubmit}>Update</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};
