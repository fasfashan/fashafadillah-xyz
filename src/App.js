import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import HeroSection from "./containers/HeroSection/HeroSection";
import CoworkingSpace from "./containers/CoworkingSpace/CoworkingSpace";
import Lexis from "./containers/Lexis/Lexis";
import Mony from "./containers/MonyApp/Mony";
import About from "./containers/About/About";
import Footer from "./containers/Footer/Footer";
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
      <section>
        <About />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
