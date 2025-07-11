import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-4 aurora-text">Koushik Salammagari</h3>
              <p className="text-gray-400 leading-relaxed">
                AI/ML Engineer passionate about building intelligent systems 
                that solve real-world problems through innovative technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="fade-in-up">
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </a>
                <a href="#about" className="block text-gray-400 hover:text-green-400 transition-colors">
                  About
                </a>
                <a href="#skills" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Skills
                </a>
                <a href="#projects" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Specialties */}
            <div className="fade-in-up">
              <h4 className="text-lg font-semibold mb-4 text-white">Specialties</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                  Machine Learning & Deep Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                  Large Language Models (LLMs)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  RAG Systems & AI Agents
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                  Computer Vision & NLP
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                  Full-Stack Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                  Cloud & DevOps
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and</span>
                <Code className="w-4 h-4 text-green-400" />
                <span>by Koushik Salammagari</span>
              </div>
              
              <div className="text-gray-400">
                © {currentYear} Koushik Salammagari. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;