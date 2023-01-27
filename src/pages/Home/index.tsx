import * as S from "./styles";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { BsBrush } from "react-icons/bs";
import { Tabs } from "components/Tabs/components/TabPanels/Tabs";
import { Tab } from "components/Tabs/components/TabPanels/Tab";
import { EmployeesTab } from "components/Tabs/components/EmployeesTab";
import { EmployeesInfoTab } from "components/Tabs/components/EmployeesInfoTab";
import { JobsTab } from "components/Tabs/components/JobTab";
import { JsonTab } from "components/Tabs/components/JsonTab";
import { Footer } from "components/Footer";

export const Home = () => {
  return (
    <S.Container>
      <S.Title>Technologies</S.Title>
      <S.ListItem>
        <ul>
          <li>
            <SiReact color="#61DAFB" /> React
          </li>
          <li>
            <SiTypescript color="#255B97" /> TypeScript
          </li>
          <li>
            <SiRedux color="#764ABC" /> Redux
          </li>
          <li>
            <BsBrush color="#6e3fa9" /> Styled Components
          </li>
          <li>
            <SiReact color="#E91E63" /> React Icons
          </li>
        </ul>
      </S.ListItem>
      <Tabs>
        <Tab title="Info" id="employeesInfo">
          <EmployeesInfoTab />
        </Tab>
        <Tab title="Employees" id="employees">
          <EmployeesTab />
        </Tab>
        <Tab title="Jobs" id="jobs">
          <JobsTab />
        </Tab>
        <Tab title="JSON" id="json">
          <JsonTab />
        </Tab>
      </Tabs>
      <Footer />
    </S.Container>
  );
};
