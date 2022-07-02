import Socials from "./Socials";
import CV from "../../img/CV-VideauEthan.pdf";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1 className="empathy" data-aos="fade-left" data-aos-duration="600">
          Let's form a contract !
        </h1>
        <a
          data-aos="fade-left"
          data-aos-duration="900"
          className="email"
          rel="noreferrer"
          href="emailto:evl.procontact@gmail.com"
        >
          evl.procontact@gmail.com
        </a>
        <br />
        <a
          data-aos="fade-left"
          data-aos-duration="1200"
          href={CV}
          target="_blank"
          rel="noreferrer"
          className="resume"
        >
          Or check my resume
        </a>
      </div>
      <Socials />
    </div>
  );
};
export default Contact;
