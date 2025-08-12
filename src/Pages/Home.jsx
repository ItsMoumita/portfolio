import React from 'react';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div className="min-h-screen w-full">
              <Hero></Hero>
              <Projects></Projects>
              <Contact></Contact>
        </div>
    );
};

export default Home;


