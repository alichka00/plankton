import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "components/Modal/styles";
import { I_Job } from "interfaces/job";
import { useAppDispatch } from "store/hook";
import { createJob } from "store/jobs";
import { Button } from "styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";
import { T_FormField } from "interfaces/form";
import { TextInput } from "components/TextInput";

interface I_JobCreateProps {
  onClose: () => void;
}

interface I_JobForm {
  department: T_FormField;
  designation: T_FormField;
}

export const JobCreate = ({ onClose }: I_JobCreateProps) => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<I_JobForm>({
    department: { value: "", error: "" },
    designation: { value: "", error: "" },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof I_JobForm;
    setForm((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], value: e.target.value, error: "" },
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    let isError = false;

    if (!form.department.value.trim()) {
      setForm((prev) => ({
        ...prev,
        department: { ...prev.department, error: "Invalid Value" },
      }));
      isError = true;
    }

    if (!form.designation.value.trim()) {
      setForm((prev) => ({
        ...prev,
        designation: { ...prev.designation, error: "Invalid Value" },
      }));
      isError = true;
    }

    if (isError) {
      return;
    }

    const job: I_Job = {
      id: Math.random().toString(16).slice(2),
      department: form.department.value,
      designation: form.designation.value,
    };

    dispatch(createJob(job));

    onClose();
  };

  return (
    <S.Modal>
      <S.ModalOverlay onClick={onClose} />
      <S.ModalContent onClick={(event) => event.stopPropagation()}>
        <S.Title>Create Job</S.Title>
        <S.ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </S.ModalClose>
        <TextInput
          placeholder="Department"
          type="text"
          name="department"
          value={form.department.value}
          onChange={handleChange}
          error={form.department.error}
        />
        <TextInput
          placeholder="Designation"
          type="text"
          name="designation"
          value={form.designation.value}
          onChange={handleChange}
          error={form.designation.error}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </S.ModalContent>
    </S.Modal>
  );
};
