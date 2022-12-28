import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "components/Modal/styles";
import { I_Job } from "interfaces/job";
import { useAppDispatch } from "store/hook";
import { updateJob } from "store/jobs";
import { Button } from "styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";
import { T_FormField } from "interfaces/form";
import { TextInput } from "components/TextInput";

interface I_JobUpdateProps {
  onClose: () => void;
  job: I_Job;
}

interface I_JobForm {
  department: T_FormField;
  designation: T_FormField;
}

export const JobUpdate = ({ onClose, job }: I_JobUpdateProps) => {
  const [form, setForm] = useState<I_JobForm>({
    department: { value: job.department, error: "" },
    designation: { value: job.designation, error: "" },
  });
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof I_JobForm;
    setForm((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], value: e.target.value, error: "" },
    }));
  };

  // const handleUpdateJob = () => {
  //   dispatch(updateJob({ ...currentJob, id: job.id }));
  // };

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

    const jobs: I_Job = {
      department: form.department.value,
      designation: form.designation.value,
      id: "",
    };

    dispatch(updateJob({ ...jobs, id: job.id }));
    onClose();
  };

  return (
    <S.Modal>
      <S.ModalOverlay onClick={onClose} />
      <S.ModalContent onClick={(event) => event.stopPropagation()}>
        <S.Title>Update Job</S.Title>
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
        <Button onClick={handleSubmit}>Update</Button>
      </S.ModalContent>
    </S.Modal>
  );
};
