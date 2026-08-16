import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact/>
        </div>
    );
};

export default Home;