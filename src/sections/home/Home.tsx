import { BsFillCursorFill } from "react-icons/bs";
import banner from "../../assets/images/mehedi.png";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <div className="relative bg-radial-[at_50%_55%] from-[#4f5764] via-[#21252B] to-[#21252B] to-100% min-h-screen">
      {/* Image */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.8,
        }}
        className="w-[35%] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
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
            className="absolute top-3/4 -left-12"
          >
            <div className="relative">
              <BsFillCursorFill className="text-2xl absolute -top-8 -right-5 text-blue-300" />
              <span className="bg-blue-100 px-5 py-2 font-medium rounded-b-xl rounded-tl-xl mt-2">
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
            className="absolute top-[60%] -right-12"
          >
            <div className="relative">
              <BsFillCursorFill className="text-2xl absolute -top-8 -left-5 -rotate-90 text-blue-300" />
              <span className="bg-blue-100 px-5 py-2 font-medium rounded-b-xl rounded-tr-xl mt-2">
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
          className="text-[300px] font-extrabold text-blue-100"
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
        className="absolute text-white bottom-0 w-full py-20"
      >
        <div className="flex justify-between items-center w-[60%] mx-auto">
          <div className="flex items-center gap-20">
            <div className="border rounded-full w-fit p-3 text-3xl hover:-translate-y-2 duration-1000 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="border rounded-full w-fit p-3 text-3xl hover:-translate-y-2 duration-1000 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
          <div className="flex items-center gap-20">
            <div className="border rounded-full w-fit p-3 text-3xl hover:-translate-y-2 duration-1000 cursor-pointer">
              <FiGithub />
            </div>
            <div className="border rounded-full w-fit p-3 text-3xl hover:-translate-y-2 duration-1000 cursor-pointer">
              <FiMail />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
