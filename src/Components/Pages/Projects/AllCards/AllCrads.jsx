import ProjectCard from "../ProjectCard/ProjectCard";
import project1 from "../../../../assets/projects/project1.png";
import project2 from "../../../../assets/projects/project2.png";
import project3 from "../../../../assets/projects/project3.png";
import project4 from "../../../../assets/projects/project4.png";
import project5 from "../../../../assets/projects/project5.png";
import project6 from "../../../../assets/projects/project6.png";

const AllCrads = () => {
  return (
    <>
      <ProjectCard
        image={project1}
        title={"Blog Page"}
        description={"Daily blog posting website"}
        projectLink={"https://blog-page-8238c.web.app/"}
      />
      <ProjectCard
        image={project2}
        title={"E-Management"}
        description={"Event management website"}
        projectLink={"https://blog-page-8238c.web.app/"}
      />
      <ProjectCard
        image={project3}
        title={"Gamer"}
        description={"Online gaming platform"}
        projectLink={"https://blog-page-8238c.web.app/"}
      />
      <ProjectCard
        image={project4}
        title={"Blood Center"}
        description={"Blood Donation Website"}
        projectLink={"https://blood-center-d8665.web.app/"}
      />
      <ProjectCard
        image={project5}
        title={"Furit Brust"}
        description={"Online furits Shop"}
        projectLink={"https://mehedihasan128.github.io/fruits-brust/"}
      />
      <ProjectCard
        image={project6}
        title={"Brigate"}
        description={"Contrauction Platform"}
        projectLink={"https://mehedihasan128.github.io/Desing-1/desing.html"}
      />
    </>
  );
};

export default AllCrads;
