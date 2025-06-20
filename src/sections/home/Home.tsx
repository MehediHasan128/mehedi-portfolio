import { BsFillCursorFill } from "react-icons/bs";
import banner from "../../assets/images/mehedi.png";

const Home = () => {
  return (
    <div className="relative bg-radial-[at_50%_55%] from-[#4f5764] via-[#21252B] to-[#21252B] to-100% min-h-screen">
      {/* Image */}
      <div className="w-[35%] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative">
          <img src={banner} alt="mehedi" />
          <div className="absolute top-3/4 -left-12">
            <div className="relative">
              <BsFillCursorFill className="text-2xl absolute -top-8 -right-5 text-blue-300" />
              <span className="bg-blue-100 px-5 py-2 font-medium rounded-b-xl rounded-tl-xl mt-2">MERN Stack Developer</span>
            </div>
          </div>
          <div className="absolute top-[60%] -right-12">
            <div className="relative">
              <BsFillCursorFill className="text-2xl absolute -top-8 -left-5 -rotate-90 text-blue-300" />
              <span className="bg-blue-100 px-5 py-2 font-medium rounded-b-xl rounded-tr-xl mt-2">Best Ever Specialist</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-full text-center">
        <h1
          id="bannerContent"
          className="text-[300px] font-extrabold text-white"
        >
          MEHEDI PORTFOLIO
        </h1>
      </div>
    </div>
  );
};

export default Home;
