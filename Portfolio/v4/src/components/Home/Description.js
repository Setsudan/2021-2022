import Socials from "./Socials";
import divider from "../../img/ico/line.svg";
const Description = () => {
  return (
    <div className="description">
      <div className="txt" data-aos="fade-right" data-aos-duration="900">
        <p>
          I always loved <strong>discovering</strong>, <strong>learning</strong>
          ,<strong>create</strong>, <strong>failing</strong>,
          <strong>successing</strong> and <strong>sharing</strong> my results. I
          choosed the path of programming and designing to create my own little
          world where I could have things like I wanted. And even if I learned
          things for myself, I’m always willing to help others achieve their
          dreams and reach their goals. My nickname may sound{" "}
          <span className="red">
            <strong>evil</strong>
          </span>{" "}
          but I’ll be helping as much as a non-evil person.
        </p>
      </div>
      <img
        src={divider}
        className="divider"
        data-aos="fade-up"
        data-aos-duration="1100"
      />
      <Socials />
    </div>
  );
};
export default Description;
