import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Services />
            <Skills />
        </div>
    );
};

export default Home;