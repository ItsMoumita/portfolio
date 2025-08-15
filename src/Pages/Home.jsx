
import React from 'react';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Skills from '../Components/Skills';
import About from '../Components/About';
import Education from '../Components/Education';

const Home = () => {
  return (
    <div className="min-h-screen w-full relative">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
         <Education></Education>
        <Contact />

      </main>
    </div>
  );
};

export default Home;



