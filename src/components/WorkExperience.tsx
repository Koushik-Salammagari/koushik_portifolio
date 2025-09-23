import React from 'react';

const experiences = [
  {
    company: 'AT&T USA',
    role: 'Machine Learning & GenAI Engineer',
    dates: 'May 2024 – Current',
    highlights: [
      'Developed AI pipelines for intelligent call routing and multi-agent virtual assistants using LangGraph and LangChain with Model Context Protocol (MCP), reducing resolution times by 5%.',
      'Created RAG-based GenAI applications that integrated vector stores (FAISS, Pinecone) with OpenAI embeddings for semantic search and document Q&A across 10K+ enterprise documents.',
      'Built fairness-aware NLP training pipelines, cutting compliance-related flagged incidents by 30%.',
      'Designed multi-agent orchestration frameworks for customer service and fraud detection workflows.',
      'Fine-tuned GPT-4 and LLaMA2 using QLoRA and DPO, improving response relevance by 27% domain-specific knowledge systems.',
      'Developed interactive tools with FastAPI and LangChain enabling HR, Finance, and Legal teams to query internal knowledge bases via natural language.'
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
    role: 'Data Scientist | Co-Founder',
    dates: 'May 2019 – Aug 2020',
    highlights: [
      'Co-founded a platform to streamline academic workflows, improving assignment management efficiency by 30%.',
      'Built a MERN stack application, architecting MongoDB schemas and RESTful APIs using Node.js and React.',
      'Reduced system latency by 15% through API optimization and data model redesign.'
    ]
  }
];

const WorkExperience = () => (
  <section id="experience" className="py-20 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Work <span className="gradient-text-dark">Experience</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-12"></div>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="clean-card-dark hover-lift-dark"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-1">{exp.company}</h3>
                  <p className="text-lg text-white font-semibold">{exp.role}</p>
                </div>
                <span className="text-sm text-blue-300 mt-2 md:mt-0 font-mono">{exp.dates}</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="text-base">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkExperience; 