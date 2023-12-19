import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default Home;