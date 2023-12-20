import { Box, Button, Container, Typography } from "@mui/material";
// Import Image
import img from '../../../assets/BannerImage/about.jpg';

// Import react Icons
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { FaLocationDot, FaGithub } from "react-icons/fa6";

const About = () => {
    return (
        <div id="about" className="py-20 relative lg:bottom-20">
            <Container>
                <Box className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
                    <Box>
                        <div className="bg-slate-100 w-64 mx-auto h-64 lg:w-96 lg:mx-0 lg:h-96 rounded-full overflow-hidden">
                            <img src={img} alt="mehedi'sImage" />
                        </div>
                    </Box>
                    <Box>
                        <Box>
                            <Typography variant="h6">
                                <p>About Me,</p>
                            </Typography>
                            <Typography variant="h2">
                                <p className="font-bold">Mehedi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">Hasan</span></p>
                            </Typography>
                            <Typography variant="subtitle1">
                                <p className="mt-5 text-gray-600 text-justify font-medium">
                                Hello! I’m Mehedi Hasan Bayzid, a MERN Stack developer. I’m also studying at Uttara University Department of Computer Science and Engineering. Web development is a passion for me. Since last one year I have gained a lot of skill in this web development sector which has helped me a lot to create some projects.
                                </p>
                            </Typography>
                            <Box className="mt-10 grid lg:grid-cols-2 gap-y-5">
                                <div className="flex items-center gap-3">
                                    <MdEmail className="text-2xl text-[#df4018]" />
                                    <Typography variant="body1">
                                        <p className="font-medium">mehedihasan120255@gmail.com</p>
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-2xl text-[#df4018]" />
                                    <Typography variant="body1">
                                        <p className="font-medium">(+880) 1302557956</p>
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BsCalendarDate className="text-2xl text-[#df4018]" />
                                    <Typography variant="body1">
                                        <p className="font-medium">21 August, 2000</p>
                                    </Typography>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaLocationDot className="text-2xl text-[#df4018]" />
                                    <Typography variant="body1">
                                        <p className="font-medium">Uttara Dhaka, Bangladesh</p>
                                    </Typography>
                                </div>
                            </Box>
                            <Box className="mt-10 lg:mt-20">
                                <Button className={'hover:text-black'} sx={{backgroundColor: 'black', color: 'white', padding: '10px 15px', borderRadius: '10px'}} href="https://github.com/MehediHasan128" target="_blank">
                                    <Typography className="flex items-center gap-2" variant="h6">
                                        GitHub
                                        <FaGithub />
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default About;