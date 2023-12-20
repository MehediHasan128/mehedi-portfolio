import { Box, Container, Typography } from "@mui/material";
// Import Image
import react from "../../../assets/icons/react.svg";
import node from "../../../assets/icons/node-js.svg";
import optimize from "../../../assets/icons/optimization.svg";

const Services = () => {
  return (
    <div className="bg-slate-100 py-20 lg:py-32 mt-20 lg:mt-0" id="services">
      <Container>
        <Box>
          <Typography variant="h3">
            <p className="font-bold border-l-8 border-red-400 pl-5 w-fit mx-auto">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">
                Services
              </span>
            </p>
          </Typography>
        </Box>

        {/* Services Container */}
        <Box className="mt-20">
          <Box className="grid lg:grid-cols-3 gap-5">
            <Box className="bg-white shadow-md w-80 mx-auto p-5 rounded-md border">
              <div>
                <img className="w-36 mx-auto" src={react} alt="" />
                <Typography variant="h6">
                  <p>Frontend Development with React</p>
                </Typography>
                <Typography variant="body1">
                  <p className="mt-3">
                    Build a user friendly website using react which is a popular
                    javaScript library
                  </p>
                </Typography>
              </div>
            </Box>
            <Box className="bg-white shadow-md w-80 mx-auto p-5 rounded-md border">
              <div>
                <img className="w-36 mx-auto" src={node} alt="" />
                <Typography variant="h6">
                  <p>Backend Development with Node.js</p>
                </Typography>
                <Typography variant="body1">
                  <p className="mt-3">
                    Using Node.js and Express.js to create a efficient backend
                    that handles data processing and interacts the database.
                  </p>
                </Typography>
              </div>
            </Box>
            <Box className="bg-white shadow-md w-80 mx-auto p-5 rounded-md border">
              <div>
                <img className="w-36 mx-auto" src={optimize} alt="" />
                <Typography variant="h6">
                  <p className="mt-1">Performance Optimization</p>
                </Typography>
                <Typography variant="body1">
                  <p className="mt-3">
                    I can optimize the performance of your web application,
                    ensuring fast load times, efficient code, and a smooth user
                    experience.
                  </p>
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Services;
