import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";
import Home from "./sections/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
