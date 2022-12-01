import GlobalStyles from "./styles/global";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  );
}

export default App;
