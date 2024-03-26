/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const AboutMe = ({ setIsActiveNav, isActiveNav }) => {
  const latestScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      latestScrollPosition.current = currentScrollPosition;
      setIsActiveNav(currentScrollPosition > 450);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsActiveNav]);

  return (
    <div
      className="about container"
      style={{ marginTop: isActiveNav ? "51px" : "0px" }}
    >
      <img
        src="https://preview.colorlib.com/theme/ronaldo/images/about.jpg.webp"
        alt="About Image"
      />
      <div>
        <h1>About Me</h1>
        <p className="secondary">
          I am a passionate Full Stack Developer specializing in the MERN
          (MongoDB, Express.js, React.js, Node.js) stack, with expertise in
          Next.js for building robust web applications. I hold a Bachelor's
          degree in Information Technology, where I honed my skills in software
          development and engineering.
        </p>
        <p className="secondary">
          {" "}
          Additionally, I possess a foundational understanding of React Native
          for mobile app development and Django for Python-based web
          applications
        </p>
        <div className="info-container">
          <div className="info-item">
            <p className="bold">Name: </p>
            <p className="secondary">Muhammad Shahzaib Afzal</p>
          </div>
          <div className="info-item">
            <p className="bold">Date of birth: </p>
            <p className="secondary">June 14, 2000</p>
          </div>

          <div className="info-item">
            <p className="bold">Address: </p>
            <p className="secondary">Jhelum, Punjab, Pakistan</p>
          </div>

          <div className="info-item">
            <p className="bold">Zipcode: </p>
            <p className="secondary">49600</p>
          </div>

          <div className="info-item">
            <p className="bold">Email: </p>
            <p className="secondary">shahzaibafzalofficial@gmail.com</p>
          </div>

          <div className="info-item">
            <p className="bold">Phone: </p>
            <p className="secondary">+923010542238</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
