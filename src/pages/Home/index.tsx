import { Container, Title, ListItem } from "./styles";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { BsBrush } from "react-icons/bs";
import { Tabs } from "../../components/Tabs/components/TabBar/Tabs";
import { Tab } from "../../components/Tabs/components/TabBar/Tab";
import { EmployeeInfoTab } from "../../components/Tabs/components/EmployeeTab";
import { EmployeesTab } from "../../components/Tabs/components/EmployeesInfoTab";
import { JobTitlesTab } from "../../components/Tabs/components/JobTitlesTab";
import { JsonTab } from "../../components/Tabs/components/JsonTab";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <Container>
      <Title>Technologies</Title>
      <ListItem>
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
          <BsBrush color="#6e3fa9" /> Styled Components
        </ul>
      </ListItem>
      <Tabs>
        <Tab title="Employees Info">
          <EmployeeInfoTab />
        </Tab>
        <Tab title="Employees">
          <EmployeesTab />
        </Tab>
        <Tab title="Job Titles">
          <JobTitlesTab />
        </Tab>
        <Tab title="JSON">
          <JsonTab />
        </Tab>
      </Tabs>
      <Footer />
    </Container>
  );
};
