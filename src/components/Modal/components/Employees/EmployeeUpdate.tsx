import { ChangeEvent, FormEvent, useState } from "react";
import { I_Employee } from "interfaces/employee";
import { useAppSelector } from "store/hook";
import { useAppDispatch } from "store/hook";
import { updateEmployee } from "store/employees";
import { Button } from "styles/Button/styles";
import { Option } from "components/Select/styles";
import { AiOutlineClose } from "react-icons/ai";
import * as S from "components/Modal/styles";
import { T_FormField } from "interfaces/form";
import { TextInput } from "components/TextInput";
import { Select } from "components/Select";

interface I_EmployeeUpdateProps {
  onClose: () => void;
  employee: I_Employee;
}

interface I_EmployeeUpdateForm {
  name: T_FormField;
  age: T_FormField;
  jobId: T_FormField;
}

export const EmployeeUpdate = ({
  onClose,
  employee,
}: I_EmployeeUpdateProps) => {
  const jobs = useAppSelector((state) => state.jobs);

  const [form, setForm] = useState<I_EmployeeUpdateForm>({
    name: { value: employee.name, error: "" },
    age: { value: employee.age, error: "" },
    jobId: { value: employee.jobId, error: "" },
  });
  const dispatch = useAppDispatch();

  const getjobTitle = (jobId: string) => {
    const job = jobs.jobs.find((job) => job.id === jobId);
    return job ? `${job.department} | ${job.designation}` : "-";
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name as keyof I_EmployeeUpdateForm;
    setForm((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], value: e.target.value, error: "" },
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let isError = false;

    if (!form.name.value.trim()) {
      setForm((prev) => ({
        ...prev,
        name: { ...prev.name, error: "Invalid Name" },
      }));
      isError = true;
    }

    if (!form.age.value.trim()) {
      setForm((prev) => ({
        ...prev,
        age: { ...prev.age, error: "Invalid Age" },
      }));
      isError = true;
    }

    if (!form.jobId.value.trim()) {
      setForm((prev) => ({
        ...prev,
        jobId: { ...prev.jobId, error: "Invalid Job" },
      }));
      isError = true;
    }

    if (isError) {
      return;
    }

    const updateEmp: I_Employee = {
      name: form.name.value,
      age: form.age.value,
      jobId: form.jobId.value,
      id: "",
    };

    dispatch(updateEmployee({ ...updateEmp, id: employee.id }));

    onClose();
  };

  return (
    <S.Modal>
      <S.ModalOverlay onClick={onClose} />
      <S.ModalContent onClick={(event) => event.stopPropagation()}>
        <S.Title>Update Employee</S.Title>
        <S.ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </S.ModalClose>
        <TextInput
          placeholder="Name"
          type="text"
          name="name"
          value={form.name.value}
          onChange={handleChange}
          error={form.name.error}
        />
        <TextInput
          placeholder="Age"
          type="number"
          name="age"
          min={16}
          max={100}
          value={form.age.value}
          onChange={handleChange}
          error={form.age.error}
        />
        <Select
          placeholder="Job"
          name="jobId"
          onChange={handleChange}
          error={form.jobId.error}
        >
          <Option hidden disabled selected>
            {getjobTitle(form.jobId.value)}
          </Option>
          {jobs.jobs.map((job) => (
            <Option key={job.id} value={job.id}>
              {job.department} | {job.designation}
            </Option>
          ))}
        </Select>
        <Button onClick={handleSubmit}>Update</Button>
      </S.ModalContent>
    </S.Modal>
  );
};
