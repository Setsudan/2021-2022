/* import Pdata from "../../api/projects.json"; */
import Pdata from "../../api/projectslist.api";
import p1 from "../../img/Project/PoleAnglais.png";
import p2 from "../../img/Project/I-Art.png";
import p3 from "../../img/Project/Hestia.png";
import p4 from "../../img/Project/EvlV1.png";
import p5 from "../../img/Project/Kelly.png";
import p6 from "../../img/Project/EthLnyV2.png";
import { Component } from "react";
var max = Pdata.length;
let images = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
};
function limitedlist() {
  return Pdata.filter((projects) => {
    max = Pdata.length;
    return projects.id >= max - 3;
  });
}
class Plist extends Component {
  render() {
    return (
      <div
        className="project-list"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        {limitedlist()
          .reverse()
          .map((projectDetail) => {
            return (
              <a
                href={projectDetail.link}
                target="_blank"
                className="project-block"
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
    );
  }
}
export default Plist;
