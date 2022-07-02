export default function Footer() {
  return (
    <div id="footer">
      <div className="socials category">
        <span>Socials</span>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/videau-launay-ethan/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/setsudan"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <li>
              <a href="mailto:launay.videau.ethan@gmail.com">Email</a>
            </li>
            <li>
              <a href="tel:+33 7 62 26 16 82">Phone</a>
            </li>
          </li>
        </ul>
      </div>
      <div className="site-map category">
        <span>Site Map</span>
        <ul>
          <li>
            <a href="#Landing">Home</a>
          </li>
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#TOP">My types of projects</a>
          </li>
          <li>
            <a href="#webprojectsbg">Web Projects</a>
          </li>
          {/* <li>
            <a href="#graphicprojectbg">Graphic Projects</a>
          </li> */}
          <li>
            <a href="#skills">My skills</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#footer">End of the road</a>
          </li>
        </ul>
      </div>
      <div id="footerlogo"></div>
    </div>
  );
}
