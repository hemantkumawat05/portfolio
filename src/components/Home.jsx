import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Education />
        </div>
    );
};

export default Home;