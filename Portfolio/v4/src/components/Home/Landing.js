import Arrow from "../../img/ico/arr-down.svg";
const Landing = () => {
  return (
    <div className="landing">
      <div className="catch-txt">
        <h1 data-aos="fade-right" data-aos-duration="900" className="empathy">
          EVL
        </h1>
        <h2 data-aos="fade-right" data-aos-duration="1200" className="empathy">
          The <span className="red">evil</span> you can{" "}
          <span
            data-aos="fade-up"
            data-aos-duration="1300"
            className="empathyI blue"
          >
            trust
          </span>
        </h2>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1500" className="discover-txt">
        <p>Discover the devil's work</p>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};
export default Landing;
