import * as S from "components/Modal/styles";
import { useAppDispatch } from "store/hook";
import { deleteJob } from "store/jobs";
import { Button } from "styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface I_JobDeleteProps {
  onClose: () => void;
  id: string;
}

export const JobDelete = ({ onClose, id }: I_JobDeleteProps) => {
  const dispatch = useAppDispatch();
  const handleDeleteJob = () => {
    dispatch(deleteJob(id));
    onClose();
  };
  return (
    <S.Modal>
      <S.ModalOverlay onClick={onClose} />
      <S.ModalContent onClick={(event) => event.stopPropagation()}>
        <S.Title>Delete Job???</S.Title>
        <S.ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </S.ModalClose>
        <Button onClick={handleDeleteJob}>Yes</Button>{" "}
        <Button onClick={onClose}>No</Button>
      </S.ModalContent>
    </S.Modal>
  );
};
