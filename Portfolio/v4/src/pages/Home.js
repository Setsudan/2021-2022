//Import of components
import Contact from "../components/Home/Contact";
import Description from "../components/Home/Description";
import Landing from "../components/Home/Landing";
import Projects from "../components/Home/Projects";
import Footer from "../components/Home/Footers";
// Import of Image
import LandSep from "../img/seperators/LandingSep.svg";
import ContactSep from "../img/seperators/ContactWaves.svg";
import FooterSep from "../img/seperators/FooterWaves.svg";
//import FUCKIN LINK
import { Link } from "react-router-dom";
import NavIco from "../img/ico/nav-menu.svg";
//Animate on scroll and all
import Aos from "aos";
import "aos/dist/aos.css";
//ScollToTop
import ScrollToTop from "../img/ico/ScrollTop.svg";
import { useEffect, useState } from "react";
function Home() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    Aos.init({ duration: 900 });
  });
  return (
    <div className="full-page">
      <Link className="NavBtn" to="/NavMenu">
        <img src={NavIco} alt="" />
      </Link>
      <Landing />
      <img src={LandSep} alt="" className="land-sep" />
      <Description />
      <Projects />
      <img src={ContactSep} alt="" className="Contact-sep" />
      <Contact />
      <img src={FooterSep} alt="" className="Footer-sep" />
      <Footer />
      {showButton && (
        <button onClick={ScrollTop} className="back-to-top">
          <img src={ScrollToTop} alt="" />
        </button>
      )}
    </div>
  );
}

export default Home;
