import React from "react";
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients.jsx";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto "  >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
    </div>
  );
};

export default App;
