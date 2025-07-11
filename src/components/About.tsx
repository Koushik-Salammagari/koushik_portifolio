import React from 'react';
import { Brain, Code, Rocket, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-violet-400" />,
      title: "AI/ML Expertise",
      description: "Deep Learning, LLMs, Computer Vision, NLP, and Reinforcement Learning"
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Full-Stack Development",
      description: "Modern web applications with React, Python, FastAPI, and cloud deployment"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "Innovation Focus",
      description: "Building cutting-edge solutions that bridge AI research and practical applications"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Research & Development",
      description: "Continuous learning and experimentation with latest AI technologies"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="aurora-text">Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-6 aurora-glow"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate AI/ML Engineer with expertise in developing intelligent systems 
              that solve real-world problems. My journey spans from deep learning research to 
              production-ready applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  With extensive experience in AI/ML development, I specialize in creating 
                  sophisticated systems that leverage the latest advances in artificial intelligence. 
                  From building misinformation detection systems to developing multi-agent AI assistants, 
                  I thrive on solving complex technical challenges.
                </p>
                <p>
                  My expertise spans across various domains including <span className="text-violet-400 font-semibold">Natural Language Processing</span>, 
                  <span className="text-blue-400 font-semibold"> Computer Vision</span>, <span className="text-blue-400 font-semibold">Reinforcement Learning</span>, and 
                  <span className="text-purple-400 font-semibold"> Large Language Models</span>. I'm particularly 
                  passionate about developing RAG (Retrieval-Augmented Generation) systems and 
                  multimodal AI applications.
                </p>
                <p>
                  Beyond AI/ML, I'm a proficient full-stack developer, capable of building 
                  end-to-end solutions that bring AI models to production through modern web 
                  technologies and cloud platforms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600 backdrop-blur-sm group aurora-glow"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="aurora-border rounded-2xl p-8 text-center relative overflow-hidden fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-lg text-gray-300 mb-6">
                I'm always excited to collaborate on innovative AI projects and challenging technical problems.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25 aurora-pulse"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;