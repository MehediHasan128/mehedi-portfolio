import { Box, Typography } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Resume = () => {
  return (
    <div className="bg-slate-50 py-20" id="resume">
      <Box className="mb-20">
        <Typography variant="h3">
          <p className="font-bold border-l-8 border-red-400 pl-5 w-fit mx-auto">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">
              Resume
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
      <VerticalTimeline lineColor="#CBD4C2">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #df4018, #af3db8)", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid  #af3db8" }}
          date="September 2022 - present"
          iconStyle={{ background: "#af3db8", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <Box className='text-white'>
          <Typography variant="h5" className="vertical-timeline-element-title">
          Bachelor{"'"}s Degree
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            Uttara University
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit autem, eaque error unde distinctio eum!
          </p>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #df4018, #af3db8)", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid  #df4018" }}
          date="July 2018 - April 2020"
          iconStyle={{ background: "#df4018", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <Box className='text-white'>
          <Typography variant="h5" className="vertical-timeline-element-title">
          Higher Secondary School Certificate 
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            Uttara High School and College
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit autem, eaque error unde distinctio eum!
          </p>
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #df4018, #af3db8)", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid  #af3db8" }}
          date="January 2012 - February 2018"
          iconStyle={{ background: "#af3db8", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <Box className='text-white'>
          <Typography variant="h5" className="vertical-timeline-element-title">
          Secondary School Certificate
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            Uttara High School and College
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit autem, eaque error unde distinctio eum!
          </p>
          </Box>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Resume;
