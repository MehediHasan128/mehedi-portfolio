import { Box, Container, Typography } from '@mui/material';
import { FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='bg-[#1b1b1b] py-20'>
            <Container>
            <Box className="text-white">
                <Box>
                    <Typography variant='h3'>
                        <p><span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]'>Get in Touch</span></p>
                    </Typography>
                    <Typography variant='body1'>
                        <p className='mt-3'>Have a question or a project in mind? I{"'"}d love to hear from you. Let{"'"}s <br /> chat and make something amazing together.</p>
                    </Typography>
                </Box>
                <Box className="my-10 space-y-4">
                        <Typography variant='subtitle1' className='flex items-center gap-5'>
                            <FaPhoneAlt className='text-xl' />
                            <p>(+880) 1302557956</p>
                        </Typography>
                        <Typography variant='subtitle1' className='flex items-center gap-5'>
                            <MdEmail className='text-xl' />
                            <p>mehedihasan120255@gmail.com</p>
                        </Typography>
                        <Typography variant='subtitle1' className='flex items-center gap-5'>
                            <FaLocationDot className='text-xl' />
                            <p>Uttara Sector-4, Road-10, Dhaka-1230</p>
                        </Typography>
                </Box>
                <Box className="mt-14 flex gap-5">
                    <div className='w-fit p-[2px] rounded-full bg-gradient-to-r from-[#df4018] to-[#af3db8] hover:-translate-y-2 duration-500 cursor-pointer'>
                        <div className='p-3 bg-[#1b1b1b] rounded-full'>
                            <FaFacebookF className='text-3xl' />
                        </div>
                    </div>
                    <div className='w-fit p-[2px] rounded-full bg-gradient-to-r from-[#df4018] to-[#af3db8] hover:-translate-y-2 duration-500 cursor-pointer'>
                        <div className='p-3 bg-[#1b1b1b] rounded-full'>
                            <FaGithub className='text-3xl' />
                        </div>
                    </div>
                    <div className='w-fit p-[2px] rounded-full bg-gradient-to-r from-[#df4018] to-[#af3db8] hover:-translate-y-2 duration-500 cursor-pointer'>
                        <div className='p-3 bg-[#1b1b1b] rounded-full'>
                            <FaLinkedin className='text-3xl' />
                        </div>
                    </div>
                </Box>
            </Box>
            <Box>

            </Box>
            </Container>
        </div>
    );
};

export default Contact;