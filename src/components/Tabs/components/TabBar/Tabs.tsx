import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./styles";

interface I_TabsProps {
  children: ReactElement[];
}

export const Tabs: React.FC<I_TabsProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  console.log(tab);

  return (
    <>
      <S.TabBar>
        {children.map((item) => (
          <S.Tab
            key={item.props.id}
            title={item.props.title}
            isActive={tab === item.props.id}
            onClick={() => {
              setSearchParams({ tab: item.props.id });
            }}
          >
            {item.props.title}
          </S.Tab>
        ))}
      </S.TabBar>
      {children.find((item) => tab === item.props.id) || children[0]}
    </>
  );
};
