import Content from "../Content";
import Header from "../Header";
import Footer from "../Footer";
import AppWrapper from "./styles";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Content />
      <Footer />
    </AppWrapper>
  );
};

export default App;
