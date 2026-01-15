import React, { useState, useCallback, useMemo } from 'react';
import { ExternalLink, Github, Calendar, Tag, Award, Code, Database, Brain, Zap, X } from 'lucide-react';

// Helper function to highlight technologies in text
const highlightTechnologies = (text: string) => {
  // Common technology keywords to highlight
  const techKeywords = [
    'LangGraph', 'LangChain', 'AWS', 'GCP', 'OpenAI', 'GPT-4', 'LLaMA2', 'LLaMA', 'GPT', 'Claude', 'Mistral', 'Gemini',
    'FastAPI', 'Next.js', 'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL',
    'Docker', 'Kubernetes', 'Lambda', 'S3', 'EC2', 'DynamoDB', 'Timestream', 'Amplify', 'SageMaker',
    'FAISS', 'Pinecone', 'ChromaDB', 'Elastic Search', 'BERT', 'spaCy', 'TensorFlow', 'PyTorch',
    'XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'LSTM', 'CNN', 'ResNet',
    'MobileNetV2', 'Q-Learning', 'RLHF', 'RAG', 'MCP', 'Model Context Protocol', 'QLoRA', 'LORA',
    'Tuya Cloud', 'Playwright', 'Gradio', 'Streamlit', 'MERN', 'MCP', 'Whisper', 'Deepseek',
    'Groq API', 'Llama3', 'Mixtral', 'Chrome Extension', 'Flask', 'Raspberry Pi', 'Google Speech API',
    'GitHub Actions', 'Cron Jobs', 'Gmail API', 'Google Sheets API', 'Google Calendar API', 'Pydantic',
    'Uvicorn', 'LlamaParse', 'SentenceTransformer', 'BAAI', 'GloVe', 'Random Forest', 'K-Means',
    'Stratified K-Fold', 'SGD', 'Adam', 'SCG', 'Matplotlib', 'Jupyter', 'Power BI', 'Tableau'
  ];

  // Sort by length (longest first) to match longer phrases first
  const sortedKeywords = techKeywords.sort((a, b) => b.length - a.length);
  
  const parts: Array<{ text: string; isTech: boolean }> = [];
  let lastIndex = 0;

  // Find all matches
  const matches: Array<{ start: number; end: number; keyword: string }> = [];
  
  sortedKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        keyword: match[0]
      });
    }
  });

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  // Remove overlapping matches (keep the first one)
  const nonOverlapping: typeof matches = [];
  matches.forEach(match => {
    if (nonOverlapping.length === 0 || match.start >= nonOverlapping[nonOverlapping.length - 1].end) {
      nonOverlapping.push(match);
    }
  });

  // Build parts array
  nonOverlapping.forEach(match => {
    if (match.start > lastIndex) {
      parts.push({ text: text.substring(lastIndex, match.start), isTech: false });
    }
    parts.push({ text: match.keyword, isTech: true });
    lastIndex = match.end;
  });

  if (lastIndex < text.length) {
    parts.push({ text: text.substring(lastIndex), isTech: false });
  }

  // If no matches, return original text
  if (parts.length === 0) {
    return <span className="text-cyan-300">{text}</span>;
  }

  return (
    <span className="text-cyan-300">
      {parts.map((part, index) => 
        part.isTech ? (
          <span key={index} className="text-white font-semibold">{part.text}</span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </span>
  );
};

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
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["JavaScript", "HTML", "CSS", "Chrome Extension APIs", "Python", "FastAPI", "Pydantic", "Uvicorn", "LangGraph", "LangChain", "Groq API", "Llama3-8b", "Async Processing"],
      category: "AI/ML",
      date: "2025",
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
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["LangGraph", "OpenAI GPT-4o-mini", "Playwright", "Google Serper", "Gradio", "Multi-Agent Systems", "Web Scraping", "Dietary Analysis"],
      category: "AI/ML",
      date: "2025",
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
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "TypeScript", "LangGraph", "LangChain", "OpenAI", "Anthropic", "Google APIs", "Milvus", "Weaviate", "Redis", "GitHub Actions", "Cron Jobs", "Gmail API", "Google Sheets API", "Google Calendar API"],
      category: "AI/ML",
      date: "2025",
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
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
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
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
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
              Featured <span className="gradient-text-dark">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
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
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600 hover:border-slate-500'
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
                className="clean-card-dark hover-lift-dark group cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">
                    <div className="flex items-center gap-1 text-sm text-slate-300">
                      <Calendar size={14} />
                      {project.date}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm font-medium text-blue-400">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-cyan-300 mb-4 line-clamp-3">
                    {highlightTechnologies(project.description)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800/50 text-white rounded-md text-xs font-medium border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-blue-500/20 text-white rounded-md text-xs font-medium border border-blue-500/30">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{highlightTechnologies(achievement)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Impact:</h4>
                      <p className="text-xs">
                        {highlightTechnologies(project.impact.substring(0, 120) + '...')}
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900/50 hover:bg-slate-800/50 text-slate-300 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-slate-600 backdrop-blur-sm hover-lift-dark"
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
          <div className="bg-slate-900/95 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 backdrop-blur-sm">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {getCategoryIcon(selectedProject.category)}
                    <span className="text-sm font-medium text-blue-400">{selectedProject.category}</span>
                    <span className="text-sm text-slate-400">• {selectedProject.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-400 hover:text-white" />
                </button>
              </div>

              {/* Project Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                <p className="leading-relaxed">{highlightTechnologies(selectedProject.detailedDescription)}</p>
              </div>

              {/* Technology Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-slate-800/50 text-white rounded-lg text-sm font-medium border border-slate-700"
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
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlightTechnologies(achievement)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Challenges</h3>
                <ul className="space-y-3">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlightTechnologies(challenge)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Impact & Results</h3>
                <p className="leading-relaxed">{highlightTechnologies(selectedProject.impact)}</p>
              </div>


            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;