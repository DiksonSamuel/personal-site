import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';
import Projects from '../components/projects';
import allProjects from '../config/projectConfig';
import Contact from '../components/contact';

function Landing() {

  return (
    <div className='flex-1'>

      <section id="section1" className="flex h-screen bg-gradient-to-r from-purple-1 to-purple-2">
        <div className='flex-col flex flex-1'>
          <Header />
          <Intro />
        </div>
      </section>
      <section id="section2" className="">
        <Projects data={allProjects} />
      </section>
      <section id="section3" className="">
        <Contact />
      </section>
    </div>
  )
}

export default Landing;