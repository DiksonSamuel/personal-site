import React from 'react';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';

function App() {


  return (
    <div className='flex-1'>
      {/* <Header /> */}
      <section id="section1" className="justify-center items-center flex h-screen">
        <Intro/>
      </section>

      {/* <section id="section2" className="justify-center items-center flex h-screen">
        <h2>Section 2</h2>
      </section>

      <section id="section3" className="justify-center items-center flex h-screen">
        <h2>Section 3</h2>
      </section> */}
    </div>
  )
}

export default App;
