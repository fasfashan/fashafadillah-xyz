import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import HeroSection from "./containers/HeroSection/HeroSection";
import CoworkingSpace from "./containers/CoworkingSpace/CoworkingSpace";
import Lexis from "./containers/Lexis/Lexis";
import Mony from "./containers/MonyApp/Mony";
import "./index.css";
function App() {
  return (
    <div className="App">
      <header className="Header">
        <NavigationBar />
        <HeroSection />
      </header>
      <section>
        <CoworkingSpace />
      </section>
      <section>
        <Lexis />
      </section>
      <section>
        <Mony />
      </section>
    </div>
  );
}

export default App;
