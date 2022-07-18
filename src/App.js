import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import HeroSection from "./containers/HeroSection/HeroSection";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="Header">
        <NavigationBar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
