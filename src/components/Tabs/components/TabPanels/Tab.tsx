import * as S from "./styles";
interface I_TabProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

export const Tab: React.FC<I_TabProps> = ({ children }) => {
  return <S.TabWrap>{children}</S.TabWrap>;
};
