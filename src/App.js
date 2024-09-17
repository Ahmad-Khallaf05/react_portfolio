import React from 'react';
import './App.css';
import Header from "./portfolio/Header";
import Home from "./portfolio/Home";
import About from "./portfolio/About";
import Education from "./portfolio/Education";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
