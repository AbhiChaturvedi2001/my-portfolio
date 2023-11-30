import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectSection from "./Component/ProjectSection";

const App = () => {
  return (
    <>
      <div className="app ">
        <Navbar />
        <Hero />
        <Skills />
        <ProjectSection />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
