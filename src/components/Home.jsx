import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Skills from "./Skills";
import Studies from "./Studies";
import Works from "./Works";

const Home = () => {
  return (
    <div>
      <div className="gradiente">
        <Header />
        <AboutMe />
        <Studies />
        <Skills />
        <Works />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
