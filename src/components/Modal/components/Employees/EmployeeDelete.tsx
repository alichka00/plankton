import { ModalContent, Modal, ModalClose, Title } from "../../styles";
import { useAppDispatch } from "../../../../store/hook";
import { deleteEmployee } from "../../../../store/employees";
import { Button } from "../../../../styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface IEmployeeDeleteProps {
  onClose: () => void;
  id: string;
}

export const EmployeeDelete = ({ onClose, id }: IEmployeeDeleteProps) => {
  const dispatch = useAppDispatch();
  const handleDeleteEmployee = () => {
    dispatch(deleteEmployee(id));
    onClose();
  };
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <Title>Delete Employee???</Title>
        <ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </ModalClose>
        <Button onClick={handleDeleteEmployee}>Yes</Button>{" "}
        <Button onClick={onClose}>No</Button>
      </ModalContent>
    </Modal>
  );
};
