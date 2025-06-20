import { BsFillCursorFill } from "react-icons/bs";
import banner from "../../assets/images/mehedi.png";
import { motion } from "framer-motion";

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
          className="text-[300px] font-extrabold text-white"
        >
          MEHEDI PORTFOLIO
        </h1>
      </motion.div>
    </div>
  );
};

export default Home;
