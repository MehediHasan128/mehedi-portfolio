import Container from "../../components/container/Container";
import HeaderContent from "../../components/ui/HeaderContent";
import mehedi from "../../assets/images/3.jpg";

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
              <p className="my-20 text-justify text-gray-600">I’m Mehedi, a passionate and self-driven Full Stack Developer with a strong interest in building modern, responsive, and user-focused web applications. I specialize in both frontend and backend development, with experience in technologies like React, Node.js, Express, and MongoDB. I enjoy transforming ideas into real-world solutions, writing clean and scalable code, and continuously learning new tools and frameworks. Whether it’s crafting intuitive user interfaces or developing secure APIs, I aim to deliver value through technology. I’m always excited to take on new challenges, collaborate with others, and grow as a developer in this ever-evolving digital world.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
