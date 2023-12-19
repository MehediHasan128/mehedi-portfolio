import { Box, Container, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import bannerImg from "../../../assets/BannerImage/IMG_6261.jpg";

// React Icons
import { MdDownloading } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="bg-[#1b1b1b] flex justify-center items-center py-36 lg:pt-64 lg:pb-24"
      >
        <Container>
          {/* MAin Container */}
          <Box className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20">
            {/* Text Container */}
            <Box className="lg:w-[70%] text-white">
              {/* Typogrphy Section */}
              <Typography variant="h6">
                <p>Hi, There!</p>
              </Typography>
              <Typography variant="h1">
                <p className="font-extrabold">
                  I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e95834] to-[#d37cda]">
                    Mehedi Hasan
                  </span>
                </p>
              </Typography>
              <Typography variant="h4">
                I'm a
                <span>
                  <Typewriter
                    words={[" MERN Stact Developer"]}
                    cursor
                    loop
                    typeSpeed={100}
                    delaySpeed={50}
                  />
                </span>
              </Typography>

              {/* Button Section */}
              <Box className="mt-10 flex items-center gap-6">
                <button className="bg-gradient-to-r from-[#be4627] to-[#79377e] px-5 py-2 rounded-lg hover:scale-105 duration-500">
                  <Typography variant="h6" className="flex items-center gap-2">
                    Resume
                    <MdDownloading className="text-2xl" />
                  </Typography>
                </button>
                <button className="border-2 border-[#be4627] px-5 py-2 rounded-lg hover:scale-105 duration-500">
                  <Typography variant="h6" className="flex items-center gap-2">
                    Touch Me
                  </Typography>
                </button>
              </Box>
            </Box>

            {/* Image container */}
            <Box className="w-[70%] lg:w-[30%]">
              <div className="bg-white h-[330px] lg:h-[420px] pt-5 rounded-3xl border overflow-hidden">
                <img src={bannerImg} alt="" />
              </div>
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

// #2d435a
