import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Edu from './components/edu/edu';
import Achive from './components/achive/Achive';
import Projects from './components/projects/Projects';
import Extra from './components/extra/Extra';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Edu />
        <Achive />
        <Projects />
        <Extra />
        <Contact />
      </main>
    </>
  )
}

export default App

