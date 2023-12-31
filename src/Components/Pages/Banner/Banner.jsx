import { Box, Container, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import bannerImg from "../../../assets/BannerImage/IMG_6261.jpg";
import {motion} from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// React Icons
import { MdDownloading } from "react-icons/md";

import resume from '../../../../public/resumeOfMehedi.pdf';

const Banner = () => {

  return (
    <>
      <div
        id="home"
        className="bg-[#1b1b1b] flex justify-center items-center py-24 lg:pt-64 lg:pb-32"
      >
        <Container>
          {/* MAin Container */}
          <Box className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20">
            {/* Text Container */}
            <motion.Box
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="lg:w-[70%] text-white">
              {/* Typogrphy Section */}
              <Typography variant="h6">
                <p>Hi, There!</p>
              </Typography>
              <Typography variant="h1">
                <p className="font-extrabold">
                  I{"'"}m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e95834] to-[#d37cda]">
                    Mehedi Hasan
                  </span>
                </p>
              </Typography>
              <Typography variant="h4">
                I{"'"}m 
                <span>
                  <Typewriter
                    words={[" Mehedi Hasan Bayzid", " a React Developer"]}
                    cursor
                    loop
                    typeSpeed={100}
                    delaySpeed={1000}
                  />
                </span>
              </Typography>
              <Typography variant="subtitle1">
              <p className="mt-5 text-gray-400 text-justify">
              Hi, I{"'"}m Mehedi Hasan, a MERN Stack Developer passionate about building seamless web solutions. With a keen eye for detail and a love for clean code, I transform ideas into digital experiences. Let{"'"}s connect and create something extraordinary together!
              </p>
              </Typography>

              {/* Social Icon */}
              <Box className="my-10 flex gap-5">
                <a href="https://www.facebook.com/profile.php?id=100090680997623" target="_blank" rel="noopener noreferrer">
                <Box className="bg-gradient-to-r from-[#e95834] to-[#d37cda] w-fit rounded-full p-[2px] hover:-translate-y-2 duration-700">
                  <Box className="bg-[#1b1b1b] p-2 rounded-full">
                  <FaFacebookF />
                  </Box>
                </Box>
                </a>
                <a href="https://www.instagram.com/b_a_yz_i_d/?fbclid=IwAR2QJ1WIL_jUYdADUpenqPnV5cZNS0wpDE3y_SI0qRyYSbscaWNEiUkPTa4" target="_blank" rel="noopener noreferrer">
                <Box className="bg-gradient-to-r from-[#e95834] to-[#d37cda] w-fit rounded-full p-[2px] hover:-translate-y-2 duration-700">
                  <Box className="bg-[#1b1b1b] p-2 rounded-full">
                  <FaInstagram />
                  </Box>
                </Box>
                </a>
                <a href="https://www.linkedin.com/in/mehedi-hasan-2871992a3/" target="_blank" rel="noopener noreferrer">
                <Box className="bg-gradient-to-r from-[#e95834] to-[#d37cda] w-fit rounded-full p-[2px] hover:-translate-y-2 duration-700">
                  <Box className="bg-[#1b1b1b] p-2 rounded-full">
                  <FaLinkedinIn />
                  </Box>
                </Box>
                </a>
              </Box>

              {/* Button Section */}
              <Box className="flex items-center gap-6">
                
                <a href={resume} download="resumeOfMehedi.pdf">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-gradient-to-r from-[#be4627] to-[#79377e] px-5 py-2 rounded-lg"
                >
                  <Typography variant="h6" className="flex items-center gap-2">
                    Resume
                    <MdDownloading className="text-2xl" />
                  </Typography>
                </motion.button>
                </a>
                <a href="#contact">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="border-2 border-[#be4627] px-5 py-2 rounded-lg"
                >
                  <Typography variant="h6" className="flex items-center gap-2">
                    Touch Me
                  </Typography>
                </motion.button>
                </a>
              </Box>
            </motion.Box>

            {/* Image container */}
            <Box className="w-[70%] md:w-[45%] lg:w-[30%]">
              <Box>
              <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              className="box bg-white h-[330px] md:h-[400px] lg:h-[420px] pt-5 rounded-3xl border overflow-hidden">
                <img src={bannerImg} alt="" />
              </motion.div>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1b1b1b"
          d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,58.7C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Banner;
