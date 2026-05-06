import React from 'react';
import { Github, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 fade-in-up">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 gradient-text-dark">
              Hey, I'm Koushik!
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-white to-gray-200 mx-auto rounded-full"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl text-cyan-200 mb-8 font-light fade-in-up">
            <span className="text-white">AI/ML Engineer</span> & <span className="text-gray-300">Full-Stack Developer</span>
          </h2>
          
          <p className="text-xl text-cyan-300 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Passionate about building intelligent systems that solve real-world problems. 
            Specializing in <span className="text-white font-semibold">Deep Learning</span>, <span className="text-gray-300 font-semibold">Large Language Models</span>, and cutting-edge AI applications.
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up">
            <a
              href="#projects"
              className="btn-primary hover-lift-dark"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary hover-lift-dark"
            >
              Get In Touch
            </a>
          </div>

          {/* Clean Social Links */}
          <div className="flex justify-center space-x-6 mb-16 fade-in-up">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 border border-slate-700 hover:border-white hover-lift-dark"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="text-slate-300 hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 border border-slate-700 hover:border-white hover-lift-dark"
              aria-label="Email Contact"
            >
              <Mail size={24} className="text-slate-300 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Clean scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-cyan-300">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;