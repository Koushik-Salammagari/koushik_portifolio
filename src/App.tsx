import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OpenSource from './components/OpenSource';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="min-h-screen minimal-dark-bg">
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <OpenSource />
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;