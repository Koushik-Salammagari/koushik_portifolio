import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML & Deep Learning",
      skills: [
        "Python", "TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV",
        "BERT", "GPT", "LLMs", "Computer Vision", "NLP", "Reinforcement Learning",
        "Neural Networks", "CNN", "LSTM", "Transfer Learning"
      ],
      color: "from-violet-500 to-blue-600",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20"
    },
    {
      title: "AI Frameworks & Tools",
      skills: [
        "LangChain", "LlamaIndex", "Hugging Face", "OpenAI API", "Groq API",
        "RAG Systems", "Vector Databases", "ChromaDB", "FAISS", "Supabase",
        "Streamlit", "Gradio", "Jupyter"
      ],
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      title: "Web Development",
      skills: [
        "JavaScript", "TypeScript", "React", "Node.js", "FastAPI",
        "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "WebSockets",
        "Chrome Extensions", "Responsive Design"
      ],
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Google Cloud", "AWS", "Docker", "Git", "Linux",
        "Database Design", "PostgreSQL", "MongoDB", "Redis",
        "API Development", "Microservices", "CI/CD"
      ],
      color: "from-purple-500 to-green-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & <span className="aurora-text">Expertise</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-6 aurora-glow"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building next-generation AI applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-gray-600 backdrop-blur-sm group hover:scale-105 aurora-glow`}
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  {category.title}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 ${category.bgColor} text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300 cursor-default border ${category.borderColor} hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm aurora-glow">
              <div className="text-3xl font-bold text-violet-400 mb-2">15+</div>
              <div className="text-gray-300">AI/ML Projects</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm aurora-glow">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm aurora-glow">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Technologies Mastered</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm aurora-glow">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-300">Learning Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;