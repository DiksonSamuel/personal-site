import React from 'react';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import Projects from './components/projects';
import allProjects from './config/projectConfig';
import Contact from './components/contact';

function App() {

  return (
    <div className='flex-1'>
      <Header />
      <section id="section1" className="justify-center items-center flex h-screen">
        <Intro/>
      </section>
      <section id="section2" className="justify-center items-center w-screen">
        <Projects data={allProjects}/>
      </section>
      <section id="section3" className="">
        <Contact />
      </section>
    </div>
  )
}

export default App;
