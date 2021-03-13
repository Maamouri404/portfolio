import AboutUs from "./pages/AboutUs";
import Nav from "../src/Components/Nav";
import GlobalStyle from "./Components/GlobalStyle";
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
