import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Header from '../components/header';
import Intro from '../components/intro';
import Projects from '../components/projects';
import allProjects from '../config/projectConfig';
import Contact from '../components/contact';
import Skills from '../components/Skills';
import skillsConfig from '../config/skillsConfig';

function Landing() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Check if there is a hash in the URL
    if (location.hash) {
      // Get the element based on the hash
      const section = document.querySelector(location.hash);
      if (section) {
        // Scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Run effect when location changes

  return (
    <div className='flex-1'>
      <section className="flex h-screen bg-gradient-to-r from-purple-1 to-purple-2">
        <div className='flex-col flex flex-1'>
          <Header />
          <Intro />
        </div>
      </section>
      <section id="skills" className="">
        <Skills skillsData={skillsConfig} />
      </section>
      <section id="projects" className="">
        <Projects data={allProjects} />
      </section>
      <section id="section3" className="">
        <Contact />
      </section>
    </div>
  );
}

export default Landing;
