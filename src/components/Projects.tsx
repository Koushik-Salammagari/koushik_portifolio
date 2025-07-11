import React, { useState, useCallback, useMemo } from 'react';
import { ExternalLink, Github, Calendar, Tag, Award, Code, Database, Brain, Zap, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  tech: string[];
  category: string;
  date: string;
  github: string;
  demo?: string;
  achievements: string[];
  challenges: string[];
  impact: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI/ML', 'RAG Systems', 'Full-Stack', 'Computer Vision', 'Reinforcement Learning'];

  const projects: Project[] = [
    {
      title: "WebAgent Chrome Extension",
      description: "A smart Chrome extension that extracts key insights from any webpage and answers questions in natural, conversational language. Built to solve the problem of dense, overwhelming web content by providing instant, simplified answers.",
      detailedDescription: "WebAgent addresses the common frustration of landing on promising webpages only to get lost in dense, never-ending text. This intelligent Chrome extension acts like a smart friend who reads the page for you and instantly tells you what matters. The system extracts key insights from any webpage and answers questions in natural, conversational language while maintaining conversation context for natural follow-ups.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["JavaScript", "HTML", "CSS", "Chrome Extension APIs", "Python", "FastAPI", "Pydantic", "Uvicorn", "LangGraph", "LangChain", "Groq API", "Llama3-8b", "Async Processing"],
      category: "AI/ML",
      date: "2024",
      github: "#",
      achievements: [
        "Built intelligent web content extraction and summarization system",
        "Implemented conversational AI with context memory for natural follow-ups",
        "Created seamless Chrome extension integration with backend AI services",
        "Developed real-time webpage analysis and question-answering capabilities"
      ],
      challenges: [
        "Integrating Chrome Extension APIs with sophisticated AI backend",
        "Managing async processing for real-time webpage analysis",
        "Maintaining conversation context across multiple interactions",
        "Optimizing performance for instant response times"
      ],
      impact: "The extension helps users quickly extract key concepts from lengthy research papers, fact-check information from news articles, summarize long-form content, and analyze complex documents like terms of service - all without spending hours reading dense content."
    },
    {
      title: "Menu Mind - AI Dining Assistant",
      description: "Multi-agent AI system that helps discover safe food options at restaurants based on dietary restrictions. Uses real menu data scraping and specialized agents for planning, working, and evaluation.",
      detailedDescription: "This innovative multi-agent AI assistant solves a practical and personal problem: finding safe food options at any restaurant based on dietary restrictions. The system brings together three specialized agents - Planner, Worker, and Evaluator - to provide accurate, real-time dietary guidance using actual restaurant menus rather than pre-fed databases.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["LangGraph", "OpenAI GPT-4o-mini", "Playwright", "Google Serper", "Gradio", "Multi-Agent Systems", "Web Scraping", "Dietary Analysis"],
      category: "AI/ML",
      date: "2024",
      github: "#",
      achievements: [
        "Built multi-agent orchestration system for dietary analysis",
        "Implemented real-time menu scraping with Playwright",
        "Created intelligent dietary restriction compliance checking",
        "Developed interactive chat-style interface with Gradio"
      ],
      challenges: [
        "Orchestrating multiple AI agents for complex decision-making",
        "Ensuring accurate dietary analysis from diverse menu formats",
        "Maintaining real-time performance with live web scraping",
        "Cross-validating results for dietary compliance accuracy"
      ],
      impact: "The system helps people with dietary restrictions safely navigate restaurant menus, supporting multiple restrictions simultaneously (e.g., vegan + gluten-free) and working with any restaurant location worldwide."
    },
    {
      title: "AutoFlow - Intelligent Workflow Agent",
      description: "Advanced automation agent that runs every hour via GitHub Actions to monitor emails, update Google Sheets, send push notifications, and manage calendar events. Integrates Gmail, Google Sheets, and Google Calendar APIs for comprehensive workflow automation.",
      detailedDescription: "This sophisticated LangGraph ReAct Agent Template creates reasoning and action agents using LangGraph and LangChain frameworks. The agent runs automated workflows every hour through GitHub Actions cron jobs, performing intelligent email monitoring, Google Sheets updates, push notifications, and calendar management. It demonstrates advanced AI agent capabilities for real-world automation tasks.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "TypeScript", "LangGraph", "LangChain", "OpenAI", "Anthropic", "Google APIs", "Milvus", "Weaviate", "Redis", "GitHub Actions", "Cron Jobs", "Gmail API", "Google Sheets API", "Google Calendar API"],
      category: "AI/ML",
      date: "2024",
      github: "#",
      achievements: [
        "Built automated reasoning and action agents using LangGraph",
        "Implemented hourly cron job automation via GitHub Actions",
        "Created intelligent email monitoring and response detection",
        "Developed comprehensive Google Workspace integration"
      ],
      challenges: [
        "Orchestrating complex multi-step automation workflows",
        "Integrating multiple Google APIs for seamless data flow",
        "Implementing reliable cron job scheduling and error handling",
        "Designing intelligent decision-making for email prioritization"
      ],
      impact: "The agent automates job application tracking, email monitoring, and calendar management, significantly reducing manual administrative tasks and ensuring timely responses to important communications."
    },
    {
      title: "Misinformation Classification Engine",
      description: "Developed a classification engine using GloVe embeddings and LSTM to determine whether information is TRUE or FALSE. Merged multiple data sources including tweets, 70,000+ articles, and blogs for training. Experimented with various ML & DL models, fine-tuned BERT, and applied Stratified K-Fold Cross-Validation to address data imbalance.",
      detailedDescription: "This comprehensive misinformation detection system was built to combat the spread of fake news and misleading information. The project involved extensive data preprocessing, including tokenization and lemmatization of diverse text sources. The system achieved high accuracy through ensemble methods combining multiple models and careful hyperparameter tuning.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "TensorFlow", "PyTorch", "BERT", "GloVe", "LSTM", "CNN", "Random Forest", "scikit-learn", "Stratified K-Fold"],
      category: "AI/ML",
      date: "Jul 2023 - Dec 2023",
      github: "#",
      demo: "#",
      achievements: [
        "Processed and analyzed 70,000+ articles and social media posts",
        "Implemented ensemble methods for improved classification accuracy",
        "Applied advanced NLP techniques including BERT fine-tuning",
        "Addressed data imbalance using Stratified K-Fold Cross-Validation"
      ],
      challenges: [
        "Handling diverse data sources with different formats and languages",
        "Managing class imbalance in the training dataset",
        "Optimizing model performance across multiple architectures"
      ],
      impact: "The system demonstrated significant improvement in misinformation detection accuracy compared to baseline models, providing a robust foundation for content verification systems."
    },
    {
      title: "Complex Document Analysis RAG",
      description: "Created a dynamic document analysis and Q&A system for financial and medical documents. Leverages LlamaParse for parsing complex documents, transforming them into structured markdown, and utilizing advanced language models for enhanced document understanding and information retrieval.",
      detailedDescription: "This advanced RAG system specializes in processing complex financial reports, medical documents, and research papers. The system can handle multi-page documents with tables, charts, and structured data, providing accurate context-aware responses to user queries. The implementation includes sophisticated document chunking strategies and semantic search capabilities.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["LangChain", "LlamaParse", "Mixtral-8x7b", "ChromaDB", "Streamlit", "Groq API", "BAAI/bge-base-en-v1.5"],
      category: "RAG Systems",
      date: "2024",
      github: "#",
      demo: "#",
      achievements: [
        "Successfully parsed complex financial and medical documents",
        "Implemented context-aware Q&A with high accuracy",
        "Built user-friendly Streamlit interface for document upload and interaction",
        "Integrated multiple embedding models for optimal performance"
      ],
      challenges: [
        "Parsing complex document structures with tables and charts",
        "Maintaining context across large document sections",
        "Optimizing response quality for domain-specific queries"
      ],
      impact: "The system enables users to quickly extract insights from complex documents, significantly reducing time spent on manual document analysis."
    },
    {
      title: "Multimodal RAG System",
      description: "Developed an advanced RAG system that processes PowerPoint presentations and PDFs, extracting text, tables, and images with multimodal embedding capabilities. Enhanced with multimodal embedding capabilities to process both text and images from PowerPoint slides.",
      detailedDescription: "This cutting-edge multimodal RAG system can process both text and visual content from presentations and documents. The system extracts and embeds images alongside text, enabling comprehensive content understanding. It features advanced chunking strategies and similarity-based retrieval for both textual and visual information.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["LangChain", "FAISS", "SentenceTransformer", "Groq API", "Llama3", "Multimodal Embeddings"],
      category: "RAG Systems",
      date: "2024",
      github: "#",
      achievements: [
        "Implemented multimodal embedding for text and image processing",
        "Built efficient similarity search across multiple content types",
        "Created comprehensive content extraction from PowerPoint presentations",
        "Achieved high accuracy in multimodal content retrieval"
      ],
      challenges: [
        "Synchronizing text and image embeddings for coherent retrieval",
        "Optimizing processing speed for large presentation files",
        "Maintaining context between visual and textual elements"
      ],
      impact: "The system provides comprehensive analysis of presentation content, enabling users to extract insights from both textual and visual information."
    },
    {
      title: "Email Generator RAG",
      description: "Developed a RAG framework for cold email generation, tailoring content based on portfolio, resume, and job description. Utilizes ChromaDB as the vector store and features a Streamlit-based UI for seamless interaction.",
      detailedDescription: "This intelligent email generation system analyzes job descriptions, company information, and candidate profiles to create personalized cold emails. The system uses advanced NLP techniques to understand context and generate compelling, professional emails that increase response rates.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "LangChain", "ChromaDB", "OpenAI API", "Streamlit"],
      category: "RAG Systems",
      date: "2024",
      github: "#",
      demo: "#",
      achievements: [
        "Generated personalized cold emails with high relevance",
        "Built intuitive Streamlit interface for easy interaction",
        "Implemented context-aware content generation",
        "Achieved significant improvement in email response rates"
      ],
      challenges: [
        "Balancing personalization with professional tone",
        "Ensuring generated content maintains authenticity",
        "Optimizing for different job types and industries"
      ],
      impact: "The system helps job seekers create more effective cold emails, leading to higher response rates and better networking opportunities."
    },
    {
      title: "Transfer Learning Image Recognition",
      description: "Performed in-depth analysis of CNN architectures (ResNet, AlexNet, MobileNetV2) for fine-grained image recognition. Fine-tuned ResNet50 on Plant Species dataset achieving 80% accuracy and adapted MobileNetV2 on custom datasets using transfer learning.",
      detailedDescription: "This comprehensive computer vision project involved extensive experimentation with state-of-the-art CNN architectures. The project focused on transfer learning techniques to achieve high accuracy on specialized datasets while maintaining computational efficiency. The work included detailed performance analysis and optimization strategies.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "TensorFlow", "ResNet50", "MobileNetV2", "Transfer Learning", "CNN", "Feature Engineering"],
      category: "Computer Vision",
      date: "2023",
      github: "#",
      achievements: [
        "Achieved 80% accuracy on Plant Species dataset using ResNet50",
        "Successfully adapted MobileNetV2 for custom datasets",
        "Performed comprehensive architecture comparison and analysis",
        "Implemented efficient transfer learning strategies"
      ],
      challenges: [
        "Optimizing model performance for fine-grained classification",
        "Managing computational resources for large model training",
        "Ensuring robust feature extraction across different architectures"
      ],
      impact: "The project demonstrates effective transfer learning techniques for image recognition tasks, providing a foundation for specialized computer vision applications."
    },
    {
      title: "Neural Network Classifier",
      description: "Designed and implemented a neural network classifier with configurable API to support experimentation across different image-based datasets. Built modular input, hidden, and output layers, evaluated performance across optimizers like SGD, Adam, and SCG.",
      detailedDescription: "This flexible neural network framework was designed for rapid prototyping and experimentation with different architectures and optimization strategies. The system supports various image datasets and provides comprehensive performance analysis tools including confusion matrices and detailed metrics.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "NumPy", "PyTorch", "Matplotlib", "Neural Networks", "SGD", "Adam", "SCG"],
      category: "AI/ML",
      date: "2023",
      github: "#",
      achievements: [
        "Built flexible neural network API for multiple datasets",
        "Implemented comprehensive performance evaluation tools",
        "Achieved high accuracy through iterative optimization",
        "Created modular architecture for easy experimentation"
      ],
      challenges: [
        "Designing flexible architecture for diverse datasets",
        "Optimizing hyperparameters across different optimizers",
        "Ensuring reproducible results across experiments"
      ],
      impact: "The framework enables rapid development and testing of neural network architectures, accelerating research and development in machine learning."
    },
    {
      title: "Reinforcement Learning Robot Control",
      description: "Trained a reinforcement learning model to control a robotic arm by experimenting with various configurations. Tuned model parameters including hidden layer structure, learning steps, epsilon, gamma, and SCG iterations to optimize performance.",
      detailedDescription: "This advanced RL project focused on developing intelligent control systems for robotic manipulation tasks. The work involved extensive hyperparameter optimization and careful analysis of different RL algorithms to achieve precise control over robotic arm movements.",
      image: "https://images.pexels.com/photos/8567434/pexels-photo-8567434.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "PyTorch", "Reinforcement Learning", "Robotics", "Parameter Tuning"],
      category: "Reinforcement Learning",
      date: "2023",
      github: "#",
      achievements: [
        "Optimized RL hyperparameters for robotic arm control",
        "Achieved precise control over complex robotic movements",
        "Conducted comprehensive parameter analysis and optimization",
        "Developed effective training strategies for RL agents"
      ],
      challenges: [
        "Balancing exploration vs exploitation in RL training",
        "Optimizing reward functions for complex robotic tasks",
        "Managing training stability and convergence"
      ],
      impact: "The project advanced understanding of RL applications in robotics, providing valuable insights for autonomous control systems."
    },
    {
      title: "Tic Tac Toe using Q-learning",
      description: "Built a classic Tic Tac Toe game powered by Q-learning to develop an AI agent that learns optimal strategies through reinforcement learning. Designed the agent to balance exploration and exploitation with iterative training.",
      detailedDescription: "This educational RL project demonstrates fundamental concepts of reinforcement learning through a familiar game environment. The Q-learning agent progressively improves its strategy through self-play and careful exploration of the game state space.",
      image: "https://images.pexels.com/photos/8567434/pexels-photo-8567434.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "NumPy", "PyTorch", "Reinforcement Learning", "Q-Learning", "pandas"],
      category: "Reinforcement Learning",
      date: "2023",
      github: "#",
      achievements: [
        "Implemented Q-learning algorithm for game strategy optimization",
        "Created effective exploration-exploitation balance",
        "Built comprehensive performance analysis tools",
        "Demonstrated progressive learning through self-play"
      ],
      challenges: [
        "Designing appropriate reward structures for game outcomes",
        "Balancing exploration and exploitation in training",
        "Ensuring convergence to optimal strategies"
      ],
      impact: "The project serves as an excellent educational tool for understanding RL concepts and provides a foundation for more complex RL applications."
    },
    {
      title: "Reinforcement Learning Game Agent",
      description: "Developed a Q-learning agent for strategic gameplay, implementing exploration-exploitation balance and reward structures. Created comprehensive performance analysis tools to evaluate agent behavior and decision-making patterns.",
      detailedDescription: "This reinforcement learning project focused on developing intelligent game-playing agents using Q-learning algorithms. The system implemented sophisticated reward structures and exploration strategies to optimize agent performance in strategic game environments.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "NumPy", "Matplotlib", "Q-Learning", "Reinforcement Learning", "Game Theory"],
      category: "Reinforcement Learning",
      date: "2023",
      github: "#",
      achievements: [
        "Successfully implemented Q-learning for strategic gameplay",
        "Demonstrated measurable improvements in AI performance",
        "Created effective exploration-exploitation balance",
        "Built comprehensive performance analysis tools"
      ],
      challenges: [
        "Designing appropriate reward structures for game outcomes",
        "Balancing exploration and exploitation in training",
        "Ensuring convergence to optimal strategies"
      ],
      impact: "The project serves as an excellent educational tool for understanding RL concepts and provides a foundation for more complex RL applications."
    },
    {
      title: "Voice Controlled Smart Assistant",
      description: "Built a voice-controlled smart assistant 'JARVIS' using Raspberry Pi, integrating Google Speech-to-Text and Text-to-Speech APIs. Developed a multi-label classification model with custom datasets to accurately interpret complex user intents.",
      detailedDescription: "This IoT project combines hardware and software to create an intelligent voice assistant. The system processes natural language commands and provides spoken responses, demonstrating practical applications of AI in embedded systems. The custom classification model ensures accurate interpretation of user intentions.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Raspberry Pi", "Google Speech API", "Python", "PyTorch", "Multi-label Classification", "IoT"],
      category: "AI/ML",
      date: "2023",
      github: "#",
      achievements: [
        "Enabled accurate voice command recognition and response",
        "Built custom multi-label classification for intent recognition",
        "Successfully integrated hardware and software components",
        "Created responsive and reliable voice interaction system"
      ],
      challenges: [
        "Optimizing performance on limited Raspberry Pi resources",
        "Ensuring reliable speech recognition in various environments",
        "Designing effective intent classification for complex commands"
      ],
      impact: "The project demonstrates practical AI applications in IoT devices, providing a foundation for smart home and automation systems."
    },
    {
      title: "Expense Tracker",
      description: "Full-stack web application for tracking all expenses with comprehensive financial management features. Built with modern web technologies for seamless user experience and robust data management.",
      detailedDescription: "This comprehensive financial management application provides users with detailed expense tracking, categorization, and analysis tools. The system includes features for budget management, expense reporting, and financial insights, helping users maintain better control over their finances.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["JavaScript", "React", "Node.js", "Database", "Full-Stack", "Web Development"],
      category: "Full-Stack",
      date: "2024",
      github: "#",
      demo: "#",
      achievements: [
        "Built comprehensive expense tracking and categorization system",
        "Implemented secure user authentication and data management",
        "Created intuitive user interface for financial management",
        "Developed robust backend with efficient data processing"
      ],
      challenges: [
        "Designing scalable database architecture for financial data",
        "Ensuring data security and privacy for sensitive financial information",
        "Creating responsive and intuitive user interface"
      ],
      impact: "The application helps users better manage their finances through comprehensive tracking and analysis tools, leading to improved financial awareness and control."
    }
  ];

  const filteredProjects = useMemo(() => 
    selectedCategory === 'All' 
    ? projects 
      : projects.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  const getCategoryIcon = useCallback((category: string) => {
    switch(category) {
      case 'AI/ML': return <Brain className="w-5 h-5" />;
      case 'RAG Systems': return <Database className="w-5 h-5" />;
      case 'Full-Stack': return <Code className="w-5 h-5" />;
      case 'Computer Vision': return <Zap className="w-5 h-5" />;
      case 'Reinforcement Learning': return <Award className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  }, []);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="aurora-text">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A showcase of innovative AI/ML solutions, RAG systems, and full-stack applications
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 backdrop-blur-sm group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <Calendar size={14} />
                      {project.date}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm font-medium text-violet-400">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-md text-xs font-medium border border-violet-500/30">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-1.5 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-violet-400 mb-2">Impact:</h4>
                      <p className="text-xs text-gray-400">
                        {project.impact.substring(0, 120)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900/50 hover:bg-gray-800/50 text-gray-300 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gray-600 backdrop-blur-sm"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/95 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 backdrop-blur-sm">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {getCategoryIcon(selectedProject.category)}
                    <span className="text-sm font-medium text-violet-400">{selectedProject.category}</span>
                    <span className="text-sm text-gray-400">• {selectedProject.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Project Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.detailedDescription}</p>
              </div>

              {/* Technology Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Challenges</h3>
                <ul className="space-y-3">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Impact & Results</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.impact}</p>
              </div>


            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;