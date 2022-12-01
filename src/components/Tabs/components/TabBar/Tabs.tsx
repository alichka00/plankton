import { ReactElement, useState } from "react";
import { TabTitle } from "./TabTitle";
import { StyleTabBar } from "./styles";

interface ITabsProps {
  children: ReactElement[];
}

export const Tabs: React.FC<ITabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <StyleTabBar>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </StyleTabBar>
      {children[selectedTab]}
    </>
  );
};
