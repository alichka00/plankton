import { ChangeEvent, FormEvent, useState } from "react";
import { I_Employee } from "interfaces/employee";
import { useAppDispatch, useAppSelector } from "store/hook";
import { createEmployee } from "store/employees";
import { AiOutlineClose } from "react-icons/ai";
import * as S from "components/Modal/styles";
import { Button } from "styles/Button/styles";
import { Option } from "components/Select/styles";
import { T_FormField } from "interfaces/form";
import { TextInput } from "components/TextInput";
import { Select } from "components/Select";

interface I_EmployeeCreateProps {
  onClose: () => void;
}

interface I_EmployeeCreateForm {
  name: T_FormField;
  age: T_FormField;
  jobId: T_FormField;
}

export const EmployeeCreate = ({ onClose }: I_EmployeeCreateProps) => {
  const jobs = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<I_EmployeeCreateForm>({
    name: { value: "", error: "" },
    age: { value: "", error: "" },
    jobId: { value: "", error: "" },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name as keyof I_EmployeeCreateForm;
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

    const employee: I_Employee = {
      id: Math.random().toString(16).slice(2),
      name: form.name.value,
      age: form.age.value,
      jobId: form.jobId.value,
    };

    dispatch(createEmployee(employee));

    onClose();
  };

  return (
    <S.Modal>
      <S.ModalOverlay onClick={onClose} />
      <S.ModalContent onClick={(event) => event.stopPropagation()}>
        <S.Title>Create Employee</S.Title>
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
          {jobs.jobs.map((job) => (
            <Option key={job.id} value={job.id}>
              {job.department} | {job.designation}
            </Option>
          ))}
        </Select>
        <Button onClick={handleSubmit}>Add</Button>
      </S.ModalContent>
    </S.Modal>
  );
};
