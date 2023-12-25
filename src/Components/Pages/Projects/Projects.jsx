import { Box, Container, Typography } from "@mui/material";
// Import Projects
import project1 from "../../../assets/projects/project1.png";
import project2 from "../../../assets/projects/project2.png";
import project3 from "../../../assets/projects/project3.png";
import project4 from "../../../assets/projects/project4.png";
import project5 from "../../../assets/projects/project5.png";
import project6 from "../../../assets/projects/project6.png";
// Import react Icons
import { GoDotFill } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div id="projects">
      <Box className="bg-[#1b1b1b] pt-10 lg:pt-20 pb-36 px-5 text-white">
        <Typography variant="h3">
          <p className="font-bold border-l-8 border-red-400 pl-5 w-fit mx-auto">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">
              Projects
            </span>
          </p>
        </Typography>
        <Typography variant="body1">
          <p className="text-justify lg:text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            voluptates doloribus. Ea, necessitatibus labore!
          </p>
        </Typography>
      </Box>
      <Container>
        {/* Show project for medium or large device */}
        <Box className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative bottom-24">
          {/* Card-1 */}
          <Box>
            <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg hover:scale-125 duration-700"
                  src={project1}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="h5" className="flex items-center gap-2">
                  <GoDotFill />
                  <p className="font-semibold">Blog Page</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium ml-8">Daily blog posting website</p>
                </Typography>
              </div>
              <div className="mr-3">
                <Typography variant="h5" className="cursor-pointer">
                  <a
                    href="https://blog-page-8238c.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </Typography>
              </div>
            </div>
          </Box>
          {/* Card-2 */}
          <Box>
            <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg hover:scale-125 duration-700"
                  src={project2}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="h5" className="flex items-center gap-2">
                  <GoDotFill />
                  <p className="font-semibold">E-Management</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium ml-8">Event management website</p>
                </Typography>
              </div>
              <div className="mr-3">
                <Typography variant="h5" className="cursor-pointer">
                  <a
                    href="https://blog-page-8238c.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </Typography>
              </div>
            </div>
          </Box>
          {/* Card-3 */}
          <Box>
            <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg hover:scale-125 duration-700"
                  src={project3}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="h5" className="flex items-center gap-2">
                  <GoDotFill />
                  <p className="font-semibold">Gamer</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium ml-8">Online gaming platform</p>
                </Typography>
              </div>
              <div className="mr-3">
                <Typography variant="h5" className="cursor-pointer">
                  <a
                    href="https://blog-page-8238c.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </Typography>
              </div>
            </div>
          </Box>
          {/* Card-4 */}
          <Box>
            <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg hover:scale-125 duration-700"
                  src={project4}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="h5" className="flex items-center gap-2">
                  <GoDotFill />
                  <p className="font-semibold">Blood Center</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium ml-8">Blood Donation Website</p>
                </Typography>
              </div>
              <div className="mr-3">
                <Typography variant="h5" className="cursor-pointer">
                  <a
                    href="https://blood-center-d8665.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </Typography>
              </div>
            </div>
          </Box>
          {/* Card-5 */}
          <Box>
            <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg hover:scale-125 duration-700"
                  src={project5}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="h5" className="flex items-center gap-2">
                  <GoDotFill />
                  <p className="font-semibold">Furit Brust</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium ml-8">Online furits Shop</p>
                </Typography>
              </div>
              <div className="mr-3">
                <Typography variant="h5" className="cursor-pointer">
                  <a
                    href="https://mehedihasan128.github.io/fruits-brust/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </Typography>
              </div>
            </div>
          </Box>
          {/* Card-6 */}
          <Box>
            <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg hover:scale-125 duration-700"
                  src={project6}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="h5" className="flex items-center gap-2">
                  <GoDotFill />
                  <p className="font-semibold">Brigate</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium ml-8">Contrauction Platform</p>
                </Typography>
              </div>
              <div className="mr-3">
                <Typography variant="h5" className="cursor-pointer">
                  <a
                    href="https://mehedihasan128.github.io/Desing-1/desing.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </Typography>
              </div>
            </div>
          </Box>
        </Box>

        {/* Show project for small device */}
        <Box className="flex md:hidden relative bottom-24">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={50}
          >
            {/* project1 */}
            <SwiperSlide>
              <Box className="mb-10">
                <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg hover:scale-125 duration-700"
                      src={project1}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-2"
                    >
                      <GoDotFill />
                      <p className="font-semibold">Blog Page</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="font-medium ml-8">
                        Daily blog posting website
                      </p>
                    </Typography>
                  </div>
                  <div className="mr-3">
                    <Typography variant="h5" className="cursor-pointer">
                      <a
                        href="https://blog-page-8238c.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </Typography>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
            {/* project2 */}
            <SwiperSlide>
              <Box>
                <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg hover:scale-125 duration-700"
                      src={project2}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-2"
                    >
                      <GoDotFill />
                      <p className="font-semibold">E-Management</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="font-medium ml-8">
                        Event management website
                      </p>
                    </Typography>
                  </div>
                  <div className="mr-3">
                    <Typography variant="h5" className="cursor-pointer">
                      <a
                        href="https://blog-page-8238c.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </Typography>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
            {/* project3 */}
            <SwiperSlide>
              <Box>
                <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg hover:scale-125 duration-700"
                      src={project3}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-2"
                    >
                      <GoDotFill />
                      <p className="font-semibold">Gamer</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="font-medium ml-8">Online gaming platform</p>
                    </Typography>
                  </div>
                  <div className="mr-3">
                    <Typography variant="h5" className="cursor-pointer">
                      <a
                        href="https://blog-page-8238c.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </Typography>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
            {/* project4 */}
            <SwiperSlide>
              <Box>
                <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg hover:scale-125 duration-700"
                      src={project4}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-2"
                    >
                      <GoDotFill />
                      <p className="font-semibold">Blood Center</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="font-medium ml-8">Blood Donation Website</p>
                    </Typography>
                  </div>
                  <div className="mr-3">
                    <Typography variant="h5" className="cursor-pointer">
                      <a
                        href="https://blood-center-d8665.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </Typography>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
            {/* project5 */}
            <SwiperSlide>
              <Box>
                <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg hover:scale-125 duration-700"
                      src={project5}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-2"
                    >
                      <GoDotFill />
                      <p className="font-semibold">Furit Brust</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="font-medium ml-8">Online furits Shop</p>
                    </Typography>
                  </div>
                  <div className="mr-3">
                    <Typography variant="h5" className="cursor-pointer">
                      <a
                        href="https://mehedihasan128.github.io/fruits-brust/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </Typography>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
            {/* project6 */}
            <SwiperSlide>
              <Box>
                <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg hover:scale-125 duration-700"
                      src={project6}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-2"
                    >
                      <GoDotFill />
                      <p className="font-semibold">Brigate</p>
                    </Typography>
                    <Typography variant="body1">
                      <p className="font-medium ml-8">Contrauction Platform</p>
                    </Typography>
                  </div>
                  <div className="mr-3">
                    <Typography variant="h5" className="cursor-pointer">
                      <a
                        href="https://mehedihasan128.github.io/Desing-1/desing.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </Typography>
                  </div>
                </div>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;