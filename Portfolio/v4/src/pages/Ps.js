import p1 from "../img/Ps/EVL.jpg";
import p2 from "../img/Ps/Setsudan.jpg";
import p3 from "../img/Ps/QLN.jpg";
import p4 from "../img/Ps/Paris.jpg";
import p5 from "../img/Ps/London.jpg";
import p6 from "../img/Ps/Tokyo.jpg";
import p7 from "../img/Ps/StSeurin.jpg";
import p8 from "../img/Ps/Diago.jpg";
import p9 from "../img/Ps/Hetic.jpg";
import Pdata from "../api/ps.api";
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
  p7,
  p8,
  p9,
  p10,
};
class Ps extends Component {
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
          <h1 className="page-title">All my creations</h1>
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
                  className="pochette"
                  src={images[projectDetail.img]}
                  alt=""
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Ps;
