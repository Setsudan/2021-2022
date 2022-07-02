import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <div id="nav-menu">
      <div id="links" data-aos="fade-up" data-aos-duration="900">
        <Link to="/" data-aos="fade-right" data-aos-duration="1600">
          <h1>Home</h1>
        </Link>
        <Link to="/Web-Projects" data-aos="fade-right" data-aos-duration="1900">
          <h1>Web Projects</h1>
        </Link>
        <Link
          to="/Visual-Projects"
          data-aos="fade-right"
          data-aos-duration="2200"
        >
          <h1>Visual Projects</h1>
        </Link>
      </div>
    </div>
  );
};
export default NavMenu;
