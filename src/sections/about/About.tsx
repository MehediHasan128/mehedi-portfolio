import Container from "../../components/container/Container";
import HeaderContent from "../../components/ui/HeaderContent";
import mehedi from "../../assets/images/3.jpg";
import Button from "../../components/ui/Button";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2Day } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="bg-[#f0f0f0]">
      <Container>
        <div>
          <HeaderContent title="ABOUT ME" />

          <div className="flex flex-col xl:flex-row justify-center items-center gap-10 2xl:gap-0">
            <div className="xl:w-[50%]">
              <img
                className="2xl:w-[85%] object-cover rounded-lg"
                src={mehedi}
                alt=""
              />
            </div>
            <div className="xl:w-[50%]">
              <h1 id="aboutTitle" className="text-5xl md:text-7xl font-bold">
                So, who am I?
              </h1>
              <p className="my-10 xl:my-16 2xl:my-20 md:text-xl xl:text-lg text-justify text-gray-600">
                I’m Mehedi Hasan Baized, a passionate and self-driven Full Stack
                Developer with a strong interest in building modern, responsive,
                and user-focused web applications. I specialize in both frontend
                and backend development, with experience in technologies like
                React, Node.js, Express, and MongoDB. I enjoy transforming ideas
                into real-world solutions, writing clean and scalable code, and
                continuously learning new tools and frameworks. Whether it’s
                crafting intuitive user interfaces or developing secure APIs, I
                aim to deliver value through technology. I’m always excited to
                take on new challenges, collaborate with others, and grow as a
                developer in this ever-evolving digital world.
              </p>
              <div className="mb-10 xl:mb-16 2xl:mb-20 grid md:grid-cols-2 gap-y-3 xl:gap-y-5 xl:gap-x-9  2xl:gap-x-0 2xl:gap-y-8 w-full md:text-xl xl:text-base">
                <div className="flex items-center gap-2">
                  <FiMail className="text-2xl" />{" "}
                  <span>mehedihasanbaized@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-2xl" /> <span>+8801302557956</span>
                </div>
                <div className="flex items-center gap-2">
                  <GrLocation className="text-2xl" />{" "}
                  <span>Uttara Dhaka-1230, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsCalendar2Day className="text-2xl" />{" "}
                  <span>21 August, 2000</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  icon={<AiOutlineDownload className="text-2xl" />}
                  btnTitle="Resume"
                  className="bg-[#11212d] text-white"
                />
                <Button
                  icon={<AiFillGithub className="text-2xl" />}
                  btnTitle="GitHub"
                  className="bg-transparent border"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
