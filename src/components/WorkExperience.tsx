import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    'Tuya Cloud', 'Playwright', 'Gradio', 'Streamlit', 'MERN', 'MCP', 'Whisper', 'Deepseek'
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

const experiences = [
  {
    company: 'Balance AI, USA',
    role: 'Software Developer & GenAI Engineer',
    dates: 'Sept 2025 – Current',
    highlights: [
      'Architected an intelligent analytics chatbot using LangGraph multi-agent orchestration, processing 10K+ sensor data points per query with <2s response latency across temperature, presence, and environmental monitoring use cases.',
      'Integrated Tuya Cloud APIs with AWS serverless infrastructure (Lambda, Timestream, DynamoDB) to enable real-time streaming analytics, reducing data retrieval overhead by 60% through optimized query patterns and caching strategies.',
      'Developed autonomous agent logic for statistical computations (correlation analysis, trend detection, anomaly identification) with dynamic visualization selection, delivering actionable insights that identified 15-35% potential energy optimization opportunities.',
      'Deployed production-ready Next.js frontend into AWS Amplify with real-time streaming responses, state persistence, and conversational memory—achieving 95% user query success rate in beta testing.'
    ]
  },
  {
    company: 'AT&T, USA',
    role: 'Machine Learning & GenAI Engineer',
    dates: 'Sep 2024 – July 2025',
    highlights: [
      'Engineered AI pipelines for intelligent call routing using LangGraph and LangChain multi-agent frameworks with Model Context Protocol (MCP) integration, enhancing customer support automation and reducing resolution times by 45%.',
      'Created RAG-based GenAI applications that integrated vector stores (FAISS, Pinecone) with OpenAI embeddings for semantic search and document Q&A across 10K+ enterprise documents.',
      'Built fairness-aware training pipelines for NLP systems, reducing flagged incidents in compliance testing by 30%.',
      'Designed multi-agent orchestration frameworks and automation pipelines for customer service and fraud detection workflows.',
      'Fine-tuned GPT-4 and LLaMA2 models with QLoRA and LORA, improving response relevance by 27% in domain-specific knowledge systems.',
      'Built interactive web tools using FastAPI and LangChain for HR, Finance, and Legal departments to query internal knowledge bases with natural language.'
    ]
  },
  {
    company: 'Symmantrix, India',
    role: 'Machine Learning Engineer',
    dates: 'Aug 2020 – Aug 2022',
    highlights: [
      'Implemented NLP pipelines for document classification, named entity recognition, and semantic similarity using BERT and spaCy',
      'Deployed LSTM-based deep learning models into production using FastAPI and containerized environments (Docker, AWS Lambda).',
      'Transitioned rule-based logic into classical ML pipelines for automated email triage and document tagging.',
      'Developed interactive chatbot frontends with React-JavaScript for user-facing applications powered by machine learning models.',
      'Collaborated with data engineers to automate data pipelines and model training workflows on AWS (S3, EC2, SageMaker)',
      'Built supervised and unsupervised ML models (Random Forest, K-Means, XGBoost) to detect anomalies and forecast sales',
      'Created Power BI dashboards to visualize KPIs and ML predictions for business teams.'
    ]
  },
  {
    company: 'Learnasky, India',
    role: 'Co-Founder, Full Stack Developer',
    dates: 'May 2019 – Aug 2020',
    highlights: [
      'Co-founded a startup and developed a web application using the MERN stack for assignment posting and submission, improving academic workflow efficiency by 30%.',
      'Architected MongoDB schemas and built RESTful APIs with Node.js and React to optimize data storage and reduce latency by 15%.'
    ]
  }
];

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Work <span className="gradient-text-dark">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-12"></div>
          <div className="space-y-4">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={exp.company}
                  className={`clean-card-dark transition-all duration-300 ${
                    isExpanded 
                      ? 'border-2 border-blue-500/50 bg-slate-800/80 shadow-lg shadow-blue-500/20' 
                      : 'border border-slate-700 hover:border-blue-500/30'
                  }`}
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleExpanded(idx)}
                    className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-1 transition-colors ${
                          isExpanded ? 'text-blue-400' : 'text-blue-400'
                        }`}>
                          {exp.company}
                        </h3>
                        <p className="text-lg text-white font-semibold">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2 md:mt-0">
                        <span className="text-sm text-blue-300 font-mono">{exp.dates}</span>
                        <div className={`transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-blue-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="list-disc pl-5 space-y-2 pb-2">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="text-base">{highlightTechnologies(point)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 
