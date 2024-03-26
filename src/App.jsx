import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  return (
    <div>
      <Navbar isActiveNav={isActiveNav} />
      <Hero />
      <AboutMe setIsActiveNav={setIsActiveNav} isActiveNav={isActiveNav} />
    </div>
  );
};

export default App;
