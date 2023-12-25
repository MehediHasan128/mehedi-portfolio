import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
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
            <Projects />
            <Resume />
        </div>
    );
};

export default Home;