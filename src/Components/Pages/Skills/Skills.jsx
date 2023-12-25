import { Box, Container, Typography } from "@mui/material";
import './Skills.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {

  return (
    <div id="skills" className="background bg-fixed text-white py-20">
      <Container>
        <Box>
          <Typography variant="h3">
            <p className="font-bold border-l-8 border-red-400 pl-5 w-fit mx-auto">
              Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">
                Development Skills
              </span>
            </p>
          </Typography>
          <Typography variant="body1">
            <p className="text-justify lg:text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptates doloribus. Ea, necessitatibus labore! Culpa at dolorum exercitationem expedita consectetur, suscipit voluptatem</p>
          </Typography>
        </Box>
        <Box className="mt-10 lg:mt-20 grid lg:grid-cols-3 gap-10 md:w-[80%] lg:w-auto md:mx-auto">
            <Box>
                <Typography variant="h5">
                    <p className="font-semibold border-l-4 pl-3 border-[#df4018] w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">Frontend</p>
                </Typography>
                <Box className='mt-5 lg:mt-10 space-y-3'>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">HTML5</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={90} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">CSS3</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={70} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">JavaScript</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={60} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">React</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={75} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">Material Ui</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={45} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography variant="h5">
                    <p className="font-semibold border-l-4 pl-3 border-[#df4018] w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">Backend</p>
                </Typography>
                <Box className='mt-5 lg:mt-10 space-y-3'>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">Node JS</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={35} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">Express JS</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={40} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography variant="h5">
                    <p className="font-semibold border-l-4 pl-3 border-[#df4018] w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">Data Base</p>
                </Typography>
                <Box className='mt-5 lg:mt-10 space-y-3'>
                    <Box>
                        <Typography variant="subtitle1">
                            <p className="font-medium">MongoDB</p>
                        </Typography>
                        <div>
                            <ProgressBar completed={55} bgColor="#df4018" height="5px" baseBgColor="#555555" labelAlignment="outside" animateOnRender={true} transitionDuration="3s" />
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Skills;
