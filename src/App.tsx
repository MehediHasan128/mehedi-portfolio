import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";
import Home from "./sections/home/Home";
import Skill from "./sections/skill/Skill";

function App() {
  return (
    <>
      <div className="hidden xl:flex">
        <Navbar />
      </div>
      <div>
        <Home />
        <About />
        <Skill />
      </div>
      <Footer />
    </>
  );
}

export default App;
