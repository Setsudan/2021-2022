import Link from "../../img/ico/Linkedin.svg";
import Github from "../../img/ico/Github.svg";
const Socials = () => {
  return (
    <div className="socials" data-aos="fade-left" data-aos-duration="1500">
      <h3 className="find-socials">Find me right there</h3>
      <div className="socials-links">
        <a
          href="https://www.linkedin.com/in/videau-launay-ethan/"
          target="_blank"
        >
          <img src={Link} alt="Linkedin" />
          Linkedin
        </a>
        <a href="https://github.com/Setsudan" target="_blank">
          <img src={Github} alt="Github" />
          Github
        </a>
      </div>
    </div>
  );
};
export default Socials;
