import { ModalContent, Modal, ModalClose, Title } from "../../styles";
import { useAppDispatch } from "../../../../store/hook";
import { deleteJobTitle } from "../../../../store/jobTitles";
import { Button } from "../../../Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface IJobTitleDeleteProps {
  onClose: () => void;
  id: string;
}

export const JobTitleDelete = ({ onClose, id }: IJobTitleDeleteProps) => {
  const dispatch = useAppDispatch();
  const handleDeleteJobTitle = () => {
    dispatch(deleteJobTitle(id));
    onClose();
  };
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Title>Delete Job Title???</Title>
        <ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </ModalClose>
        <Button onClick={handleDeleteJobTitle}>Yes</Button>{" "}
        <Button onClick={onClose}>No</Button>
      </ModalContent>
    </Modal>
  );
};
