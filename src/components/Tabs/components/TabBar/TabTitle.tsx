import { StyleTab } from "./styles";

interface ITabTitleProps {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
}

export const TabTitle: React.FC<ITabTitleProps> = ({
  title,
  setSelectedTab,
  index,
}) => {
  return <StyleTab onClick={() => setSelectedTab(index)}>{title}</StyleTab>;
};
