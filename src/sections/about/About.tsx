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
    <div>
      <Container>
        <div>
          <HeaderContent />

          <div className="flex justify-center items-center my-24">
            <div className="w-[50%]">
              <img
                className="w-[80%] object-cover rounded-lg"
                src={mehedi}
                alt=""
              />
            </div>
            <div className="w-[50%]">
              <h1 id="aboutTitle" className="text-7xl font-bold">
                So, who am I?
              </h1>
              <p className="my-20 text-justify text-gray-600">
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
              <div className="mb-20 grid grid-cols-2 gap-y-8">
                <div className="flex items-center gap-2 text-lg">
                  <FiMail className="text-2xl" />{" "}
                  <span>mehedihasanbaized@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <FiPhone className="text-2xl" /> <span>+8801302557956</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <GrLocation className="text-2xl" />{" "}
                  <span>Uttara Dhaka-1230, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <BsCalendar2Day className="text-2xl" />{" "}
                  <span>21 August, 2000</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  icon={<AiOutlineDownload className="text-2xl" />}
                  btnTitle="Resume"
                  className="bg-[#21252B] text-white"
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
