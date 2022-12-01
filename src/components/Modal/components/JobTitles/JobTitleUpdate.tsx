import { ChangeEvent, FormEvent, useState } from "react";
import { Input, ModalContent, Modal, ModalClose, Title } from "../../styles";
import { IJobTitle } from "../../../../interfaces/jobTitle";
import { useAppDispatch } from "../../../../store/hook";
import { updateJobTitle } from "../../../../store/jobTitles";
import { Button } from "../../../../styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface IJobTitleUpdateProps {
  onClose: () => void;
  jobTitle: IJobTitle;
}

export const JobTitleUpdate = ({ onClose, jobTitle }: IJobTitleUpdateProps) => {
  const [currentJobTitle, setCurrentJobTitle] = useState<IJobTitle>({
    department: jobTitle.department,
    designation: jobTitle.designation,
    id: jobTitle.id,
  });
  const dispatch = useAppDispatch();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentJobTitle((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateJobTitle = () => {
    dispatch(updateJobTitle({ ...currentJobTitle, id: jobTitle.id }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!currentJobTitle.department || !currentJobTitle.designation) {
      return false;
    } else {
      handleUpdateJobTitle();
    }
    onClose();
  };

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Title>Update Job Title</Title>
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
              value={currentJobTitle.department}
              onChange={handleChangeInput}
            />
          </label>
          <label>
            Designation
            <Input
              type="text"
              name="designation"
              value={currentJobTitle.designation}
              onChange={handleChangeInput}
            />
          </label>
          <Button onClick={handleSubmit}>Update</Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default JobTitleUpdate;
