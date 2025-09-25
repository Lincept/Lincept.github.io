import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
    </div>
  )
}

export default App
