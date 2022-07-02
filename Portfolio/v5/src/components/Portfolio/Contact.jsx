export default function Contact() {
  const pdf = "/";
  return (
    <div id="contact">
      <a
        href="https://www.linkedin.com/in/videau-launay-ethan/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact-box">
          <span>Linkedin</span>
        </div>
      </a>
      <a href="https://github.com/setsudan" target="_blank" rel="noreferrer">
        <div className="contact-box">
          <span>Github</span>
        </div>
      </a>
      <a
        onClick={(e) => {
          e.preventDefault;
        }}
        className="disabled"
        //href={pdf} /*rel="noreferrer" target="_blank"*/
      >
        <div className="contact-box">
          <span>Download My resume</span>
        </div>
      </a>
      <div className="info-box">
        <span className="catchphrase">Find more about me right there</span>
        <p>
          You can find me on my linkedin and github. I aslo left my resume in
          case you want to see it. Or you can contact me{" "}
          <a href="tel:+33 7 62 26 16 82">by phone</a> or{" "}
          <a href="mailto:launay.videau.ethan@gmail.com">mail</a>
        </p>
      </div>
    </div>
  );
}
