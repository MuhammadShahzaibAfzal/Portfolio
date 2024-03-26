import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container">
        <p>HEY! I AM</p>
        <h1>Shahzaib Afzal</h1>
        <h2>
          I am an expert{" "}
          <span className="primary">
            <Typewriter
              words={["< MERN Stack Developer />", "< Next JS Developer />"]}
              loop={5}
              cursor
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1300}
            />
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
