// Components
import { Landing } from "../components/Portfolio/Landing";
import Intro from "../components/Portfolio/Intro";
import Skills from "../api/Skills";
import Contact from "../components/Portfolio/Contact";
import FamilyContentAccess from "../components/Launay/access";
import EOP from "../components/Portfolio/EOP";
import { RenderProject } from "../api/renderProjects";

export default function Portfolio() {
  return (
    <>
      <div className="LandingPage">
        <Landing />
        <Intro />
        <RenderProject />
        <Skills />
        <Contact />
        <FamilyContentAccess />
        <EOP />
      </div>
    </>
  );
}
