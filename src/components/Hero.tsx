import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced aurora background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/25 rounded-full blur-3xl animate-pulse float-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl animate-pulse delay-1000 float-animation"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Aurora field pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 aurora-field opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 aurora-text aurora-pulse">
              Koushik Salammagari
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 mx-auto rounded-full aurora-glow"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light fade-in-up">
            <span className="text-violet-400">AI/ML Engineer</span> & <span className="text-blue-400">Full-Stack Developer</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Passionate about building intelligent systems that solve real-world problems. 
            Specializing in <span className="text-violet-400 font-semibold">Deep Learning</span>, <span className="text-blue-400 font-semibold">Large Language Models</span>, and cutting-edge AI applications.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25 relative overflow-hidden aurora-glow"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-violet-400 hover:text-violet-400 hover:bg-violet-400/10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm aurora-glow"
            >
              Get In Touch
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 mb-16 fade-in-up">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20 backdrop-blur-sm border border-gray-700 hover:border-violet-400 aurora-glow"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="text-gray-400 hover:text-violet-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 aurora-glow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="text-gray-400 hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm border border-gray-700 hover:border-blue-400 aurora-glow"
              aria-label="Email Contact"
            >
              <Mail size={24} className="text-gray-400 hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-violet-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;