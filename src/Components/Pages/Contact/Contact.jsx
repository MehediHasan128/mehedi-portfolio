import { Box, Container, Typography } from "@mui/material";
import { FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b6x53gm",
        "template_s0utpjj",
        form.current,
        "D4CHXHb2DGQ7Y0YFe"
      )
      .then(
        (result) => {
          console.log(result);
          if(result.status == 200){
            Swal.fire({
              icon: "success",
              title: "Message sent",
              showConfirmButton: false,
              timer: 1500
            });
          }
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#1b1b1b] py-20" id="contact">
      <Container>
        <Box className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-36">
          <Box className="text-white">
            <Box>
              <Typography variant="h3">
                <p>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#df4018] to-[#af3db8]">
                    Get in Touch
                  </span>
                </p>
              </Typography>
              <Typography variant="body1">
                <p className="mt-3">
                  Have a question or a project in mind? I{"'"}d love to hear
                  from you. Let{"'"}s <br /> chat and make something amazing
                  together.
                </p>
              </Typography>
            </Box>
            <Box className="my-10 space-y-4">
              <Typography
                variant="subtitle1"
                className="flex items-center gap-5"
              >
                <FaPhoneAlt className="text-xl" />
                <p>(+880) 1302557956</p>
              </Typography>
              <Typography
                variant="subtitle1"
                className="flex items-center gap-5"
              >
                <MdEmail className="text-xl" />
                <p>mehedihasan120255@gmail.com</p>
              </Typography>
              <Typography
                variant="subtitle1"
                className="flex items-center gap-5"
              >
                <FaLocationDot className="text-xl" />
                <p>Uttara Sector-4, Road-10, Dhaka-1230</p>
              </Typography>
            </Box>
            <Box className="mt-14 flex gap-5">
              <a
                href="https://www.facebook.com/profile.php?id=100090680997623"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-fit p-[2px] rounded-full bg-gradient-to-r from-[#df4018] to-[#af3db8] hover:-translate-y-2 duration-500 cursor-pointer">
                  <div className="p-3 bg-[#1b1b1b] rounded-full">
                    <FaFacebookF className="text-xl" />
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/MehediHasan128"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-fit p-[2px] rounded-full bg-gradient-to-r from-[#df4018] to-[#af3db8] hover:-translate-y-2 duration-500 cursor-pointer">
                  <div className="p-3 bg-[#1b1b1b] rounded-full">
                    <FaGithub className="text-xl" />
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mehedi-hasan-2871992a3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-fit p-[2px] rounded-full bg-gradient-to-r from-[#df4018] to-[#af3db8] hover:-translate-y-2 duration-500 cursor-pointer">
                  <div className="p-3 bg-[#1b1b1b] rounded-full">
                    <FaLinkedin className="text-xl" />
                  </div>
                </div>
              </a>
            </Box>
          </Box>
          <Box className="w-[100%] lg:flex-1">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="lg:w-[100%] mx-auto space-y-3"
            >
              <Box>
                <label className="text-white">
                  <Typography variant="h6">
                    <p>Name:</p>
                  </Typography>
                </label>
                <input
                  className="px-5 py-3 w-full rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Enter your name"
                  name="from_name"
                />
              </Box>
              <Box>
                <label className="text-white">
                  <Typography variant="h6">
                    <p>Email:</p>
                  </Typography>
                </label>
                <input
                  className="px-5 py-3 w-full rounded-lg focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  name="from_email"
                />
              </Box>
              <Box>
                <label className="text-white">
                  <Typography variant="h6">
                    <p>Message:</p>
                  </Typography>
                </label>
                <textarea
                  className="px-5 py-3 w-full rounded-lg focus:outline-none"
                  cols="30"
                  rows="5"
                  placeholder="Write a message"
                  name="message"
                ></textarea>
              </Box>

              <Box className="bg-gradient-to-r from-[#df4018] to-[#af3db8] w-fit rounded-lg cursor-pointer p-[2px] relative hover:translate-y-3 duration-500">
                <Box className="flex items-center text-white text-xl bg-[#1b1b1b] rounded-lg">
                  <input
                    className="pl-5 pr-12 py-3 rounded-lg cursor-pointer"
                    type="submit"
                    value="Submit"
                  />
                  <RiSendPlaneFill className="absolute right-4 text-2xl" />
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
