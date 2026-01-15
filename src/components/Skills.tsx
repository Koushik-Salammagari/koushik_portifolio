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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "AI Frameworks & Tools",
      skills: [
        "LangChain", "LlamaIndex", "Hugging Face", "OpenAI API", "Groq API",
        "RAG Systems", "Vector Databases", "ChromaDB", "FAISS", "Supabase",
        "Streamlit", "Gradio", "Jupyter"
      ],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20"
    },
    {
      title: "Web Development",
      skills: [
        "JavaScript", "TypeScript", "React", "Node.js", "FastAPI",
        "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "WebSockets",
        "Chrome Extensions", "Responsive Design"
      ],
      color: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-700/10",
      borderColor: "border-blue-700/20"
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Google Cloud", "AWS", "Docker", "Git", "Linux",
        "Database Design", "PostgreSQL", "MongoDB", "Redis",
        "API Development", "Microservices", "CI/CD"
      ],
      color: "from-blue-800 to-blue-900",
      bgColor: "bg-blue-800/10",
      borderColor: "border-blue-800/20"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & <span className="gradient-text-dark">Expertise</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building next-generation AI applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="clean-card-dark hover-lift-dark"
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-white text-black font-semibold mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  {category.title}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 ${category.bgColor} text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700 transition-all duration-300 cursor-default border ${category.borderColor} hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="clean-card-dark hover-lift-dark">
              <div className="text-3xl font-bold text-blue-400 mb-2">40+</div>
              <div className="text-slate-300">AI/ML Projects</div>
            </div>
            <div className="clean-card-dark hover-lift-dark">
              <div className="text-3xl font-bold text-blue-500 mb-2">5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="clean-card-dark hover-lift-dark">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-slate-300">Technologies Mastered</div>
            </div>
            <div className="clean-card-dark hover-lift-dark">
              <div className="text-3xl font-bold text-blue-700 mb-2">∞</div>
              <div className="text-slate-300">Learning Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;