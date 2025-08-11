import React from 'react';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div className="min-h-screen w-full relative">
            {/* Azure Depths */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
                }}
            />
            {/* Content/Components */}
              <Hero></Hero>
              <Projects></Projects>
        </div>
    );
};

export default Home;


