import { Box, Container, Typography } from "@mui/material";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#1b1b1b] py-10 text-white">
            <hr className="w-[80%] mx-auto" />
            <Container>
                <Box className="mt-10 text-white flex justify-center items-center gap-5">
                    <a href="#about">
                        <Typography>
                            <p>About</p>
                        </Typography>
                    </a>
                    <a href="#about">
                        <Typography>
                            <p>Sevice</p>
                        </Typography>
                    </a>

                    <Box className="px-5 lg:px-20">
                        <Typography variant="h3">
                            <p className="font-bold">Logo</p>
                        </Typography>
                    </Box>

                    <a href="#about">
                        <Typography>
                            <p>Project</p>
                        </Typography>
                    </a>
                    <a href="#about">
                        <Typography>
                            <p>Resume</p>
                        </Typography>
                    </a>
                </Box>
                <Typography variant="body1" >
                    <p className="text-center my-16">Follow me on social media</p>
                </Typography>
                <Box className="flex justify-center gap-5">
                    <a href="">
                        <Typography variant="h5">
                        <FaInstagram className="hover:text-[#df4018] hover:-translate-y-2 duration-700" />
                        </Typography>
                    </a>
                    <a href="">
                        <Typography variant="h5">
                        <FaDribbble className="hover:text-[#df4018] hover:-translate-y-2 duration-700" />
                        </Typography>
                    </a>
                    <a href="">
                        <Typography variant="h5">
                        <FaLinkedinIn className="hover:text-[#df4018] hover:-translate-y-2 duration-700" />
                        </Typography>
                    </a>
                    <a href="">
                        <Typography variant="h5">
                        <FaFacebookF className="hover:text-[#df4018] hover:-translate-y-2 duration-700" />
                        </Typography>
                    </a>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;