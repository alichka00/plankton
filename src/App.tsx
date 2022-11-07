import GlobalStyles from "./styles/global";
import { EmployeesTab } from "./components/Tabs/components/EmployeesTab";
import { JobTitlesTab } from "./components/Tabs/components/JobTitlesTab";
import { Tabs } from "./components/Tabs/components/TabBar/Tabs";
import { Tab } from "./components/Tabs/components/TabBar/Tab";

function App() {
  return (
    <>
      <GlobalStyles />
      <Tabs>
        <Tab title="Employees">
          <EmployeesTab />
        </Tab>
        <Tab title="Job Titles">
          <JobTitlesTab />
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
