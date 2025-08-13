
import React, { useState } from 'react';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Loader from '../Components/Loader';
import Skills from '../Components/Skills';

const Home = () => {
  const [ready, setReady] = useState(false);

  return (
    <div className="min-h-screen w-full relative">
      {!ready && <Loader onDone={() => setReady(true)} />}
      <main className={ready ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}>
        <Hero />
        <Skills></Skills>
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;



