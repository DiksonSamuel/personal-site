import React from 'react';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import Projects from './components/projects';
import allProjects from './config/projectConfig';

function App() {


  return (
    <div className='flex-1'>
      {/* <Header /> */}
      <section id="section1" className="justify-center items-center flex h-screen">
        <Intro/>
      </section>

      <section id="section2" className="justify-center items-center">
        <Projects data={allProjects}/>
      </section>

      {/* <section id="section3" className="justify-center items-center flex h-screen">
        <h2>Section 3</h2>
      </section> */}
    </div>
  )
}

export default App;
