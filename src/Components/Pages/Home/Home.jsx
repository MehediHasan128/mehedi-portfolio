import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;