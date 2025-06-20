import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./sections/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
