import Sep from "../../img/seperators/ProjectTop.svg";
import PorjectList from "./ProjectList";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="projects">
      <img layout="fill" src={Sep} alt="" className="Project-top" />
      <div className="project-content">
        <h1
          className="section-title empathy"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          My works
        </h1>
        <PorjectList />
        <div className="wsm">
          <Link to="/Web-Projects">Want to see more ?</Link>
        </div>
      </div>
    </div>
  );
};
export default Projects;
