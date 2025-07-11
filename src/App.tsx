import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="min-h-screen aurora-bg relative overflow-hidden">
      {/* Aurora background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse float-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000 float-animation"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
      
      {/* Aurora field effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 aurora-field"></div>
      </div>
      
      {/* Aurora effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 aurora"></div>
      </div>
      
      {/* Aurora waves */}
      <div className="aurora-wave" style={{ top: '20%', animationDelay: '0s' }}></div>
      <div className="aurora-wave" style={{ top: '40%', animationDelay: '2s' }}></div>
      <div className="aurora-wave" style={{ top: '60%', animationDelay: '4s' }}></div>
      <div className="aurora-wave" style={{ top: '80%', animationDelay: '6s' }}></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
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