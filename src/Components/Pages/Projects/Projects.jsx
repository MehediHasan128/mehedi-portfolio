import { Box, Container, Typography } from "@mui/material";
// Import Projects
import project1 from "../../../assets/projects/project1.png";
import project2 from "../../../assets/projects/project2.png";
import project3 from "../../../assets/projects/project3.png";
import project4 from "../../../assets/projects/project4.png";
import project5 from "../../../assets/projects/project5.png";
import project6 from "../../../assets/projects/project6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import AllCrads from "./AllCards/AllCrads";
import ProjectCard from "./ProjectCard/ProjectCard";

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
          <AllCrads />
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
              <ProjectCard
                image={project1}
                title={"Blog Page"}
                description={"Daily blog posting website"}
                projectLink={"https://blog-page-8238c.web.app/"}
              />
            </SwiperSlide>
            {/* project2 */}
            <SwiperSlide>
              <ProjectCard
                image={project2}
                title={"E-Management"}
                description={"Event management website"}
                projectLink={"https://blog-page-8238c.web.app/"}
              />
            </SwiperSlide>
            {/* project3 */}
            <SwiperSlide>
              <ProjectCard
                image={project3}
                title={"Gamer"}
                description={"Online gaming platform"}
                projectLink={"https://blog-page-8238c.web.app/"}
              />
            </SwiperSlide>
            {/* project4 */}
            <SwiperSlide>
              <ProjectCard
                image={project4}
                title={"Blood Center"}
                description={"Blood Donation Website"}
                projectLink={"https://blood-center-d8665.web.app/"}
              />
            </SwiperSlide>
            {/* project5 */}
            <SwiperSlide>
              <ProjectCard
                image={project5}
                title={"Furit Brust"}
                description={"Online furits Shop"}
                projectLink={"https://mehedihasan128.github.io/fruits-brust/"}
              />
            </SwiperSlide>
            {/* project6 */}
            <SwiperSlide>
              <ProjectCard
                image={project6}
                title={"Brigate"}
                description={"Contrauction Platform"}
                projectLink={
                  "https://mehedihasan128.github.io/Desing-1/desing.html"
                }
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;