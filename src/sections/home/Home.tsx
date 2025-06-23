import { BsFillCursorFill } from "react-icons/bs";
import banner from "../../assets/images/mehedi.png";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";

const Home = () => {

  return (
    <div id="home" className="relative bg-radial-[at_50%_55%] from-[#4f5764] via-[#11212d] to-[#06141b] to-100% min-h-screen">
      
      {/* Image */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.8,
        }}
        className="w-[100%] md:w-[80%] xl:w-[40%] 2xl:w-[35%] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="relative">
          <img src={banner} alt="mehedi" />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
            className="absolute top-3/4 left-1 md:-left-12"
          >
            <div className="relative">
              <BsFillCursorFill className="text-xl md:text-3xl xl:text-2xl absolute -top-6 md:-top-10 xl:-top-8 -right-5 md:-right-7 xl:-right-6 text-[#e0e0e0]" />
              <span className="bg-[#ccd0cf] px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-xl xl:text-base font-medium rounded-b-xl rounded-tl-xl mt-2">
                MERN Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
            className="absolute top-[60%] right-1 md:-right-12"
          >
            <div className="relative">
              <BsFillCursorFill className="text-xl md:text-3xl xl:text-2xl absolute md:-top-10 -top-6 xl:-top-8 -left-5 md:-left-7 xl:-left-6 -rotate-90 text-[#e0e0e0]" />
              <span className="bg-[#ccd0cf] px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-xl xl:text-base font-medium rounded-b-xl rounded-tr-xl mt-2">
                Best Ever Specialist
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-full text-center"
      >
        <h1
          id="bannerContent"
          className="text-7xl md:text-[150px] xl:text-[200px] 2xl:text-[300px] font-extrabold text-[#ccd0cf]"
        >
          MEHEDI PORTFOLIO
        </h1>
      </motion.div>

      {/* Social icon */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 1,
        }}
        className="absolute text-[#ccd0cf] bottom-72 md:bottom-[45%] xl:bottom-0 w-full xl:py-10 2xl:py-20"
      >
        <div className="flex justify-between items-center w-[85%] md:w-[75%] xl:w-[70%] 2xl:w-[60%] mx-auto">
          <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 xl:gap-20">
            <div className="border rounded-full w-fit p-3 text-lg md:text-3xl 2xl:hover:-translate-y-2 hover:text-[#FF7F50] duration-1000 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="border rounded-full w-fit p-3 text-lg md:text-3xl 2xl:hover:-translate-y-2 hover:text-[#FF7F50] duration-1000 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 xl:gap-20">
            <div className="border rounded-full w-fit p-3 text-lg md:text-3xl 2xl:hover:-translate-y-2 hover:text-[#FF7F50] duration-1000 cursor-pointer">
              <FiGithub />
            </div>
            <div className="border rounded-full w-fit p-3 text-lg md:text-3xl 2xl:hover:-translate-y-2 hover:text-[#FF7F50] duration-1000 cursor-pointer">
              <FiMail />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;
