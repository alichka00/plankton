import { ChangeEvent, FormEvent, useState } from "react";
import { Input, ModalContent, Modal, ModalClose, Title } from "../../styles";
import { IJobTitle } from "../../../../interfaces/jobTitle";
import { useAppDispatch } from "../../../../store/hook";
import { createJobTitle } from "../../../../store/jobTitles";
import { Button } from "../../../../styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface IJobTitleCreateProps {
  onClose: () => void;
}

export const JobTitleCreate = ({ onClose }: IJobTitleCreateProps) => {
  const [jobTitle, setJobTitle] = useState<IJobTitle>({
    department: "",
    designation: "",
    id: Math.random().toString(16).slice(2),
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setJobTitle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!jobTitle.department || !jobTitle.designation) {
      return false;
    } else {
      dispatch(createJobTitle(jobTitle));
    }
    onClose();
  };
  const dispatch = useAppDispatch();
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Title>Create Job Title</Title>
        <ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </ModalClose>
        <form>
          <label>
            Department
            <Input
              type="text"
              name="department"
              value={jobTitle.department}
              onChange={handleChangeInput}
            />
          </label>
          <label>
            Designation
            <Input
              type="text"
              name="designation"
              value={jobTitle.designation}
              onChange={handleChangeInput}
            />
          </label>
          <Button onClick={handleSubmit}>Add</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default JobTitleCreate;
