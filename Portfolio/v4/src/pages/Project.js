import p1 from "../img/Project/PoleAnglais.png";
import p2 from "../img/Project/I-Art.png";
import p3 from "../img/Project/Hestia.png";
import p4 from "../img/Project/EvlV1.png";
import p5 from "../img/Project/Kelly.png";
import p6 from "../img/Project/EthLnyV2.png";
import Pdata from "../api/projectslist.api";
//import FUCKIN LINK
import { Link } from "react-router-dom";
import NavIco from "../img/ico/nav-menu.svg";
import { Component } from "react";
let images = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
};
console.log(Pdata.link);
class ProjectPage extends Component {
  render() {
    return (
      <div className="Project-Page">
        <Link className="NavBtn" to="/NavMenu">
          <img src={NavIco} alt="" />
        </Link>
        <div
          className="project-landing"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <h1 className="page-title">All my works</h1>
        </div>
        <div className="project-list">
          {Pdata.reverse().map((projectDetail, index) => {
            return (
              <a
                href={projectDetail.link}
                target="_blank"
                className="project-block"
                data-aos="fade-up"
                data-aos-duration="1600"
                rel="noreferrer"
              >
                <h2 className="project-title">{projectDetail.title}</h2>
                <p className="date">{projectDetail.date}</p>
                <p className="project-desc">{projectDetail.desc}</p>
                <img
                  className="project-img"
                  src={images[projectDetail.img]}
                  alt=""
                />
                <p className="madewith">made with {projectDetail.tags}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ProjectPage;
