import React from 'react';

const experiences = [
  {
    company: 'AT&T USA',
    role: 'Machine Learning & GenAI Engineer',
    dates: 'May 2024 – Current',
    highlights: [
      'Developed AI pipelines for intelligent call routing and multi-agent virtual assistants using LangGraph and LangChain with Model Context Protocol (MCP), reducing resolution times by 35%.',
      'Created GenAI applications using RAG with FAISS/Pinecone and OpenAI embeddings for semantic search across 100K+ documents.',
      'Built fairness-aware NLP training pipelines, cutting compliance-related flagged incidents by 30%.',
      'Designed multi-agent orchestration frameworks for customer service and fraud detection workflows.',
      'Fine-tuned GPT-4 and LLaMA2 using QLoRA and DPO, improving response relevance by 27%.',
      'Developed interactive tools with FastAPI and LangChain enabling HR, Finance, and Legal teams to query internal knowledge bases via natural language.'
    ]
  },
  {
    company: 'Symmantrix, India',
    role: 'Machine Learning Engineer',
    dates: 'Aug 2020 – Aug 2022',
    highlights: [
      'Built NLP pipelines for document classification, NER, and semantic similarity using BERT and spaCy.',
      'Deployed LSTM-based models via FastAPI in Docker and AWS Lambda environments.',
      'Transitioned systems from rule-based to LLM-driven classifiers for email triage and document tagging.',
      'Automated data pipelines and training workflows using AWS (S3, EC2, SageMaker).',
      'Built ML models (Random Forest, K-Means, XGBoost) for anomaly detection and sales forecasting.',
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
          Work <span className="aurora-text">Experience</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="bg-gray-900/60 border border-gray-700 rounded-2xl shadow-lg p-8 relative overflow-hidden aurora-card"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-violet-400 mb-1">{exp.company}</h3>
                  <p className="text-lg text-white font-semibold">{exp.role}</p>
                </div>
                <span className="text-sm text-cyan-300 mt-2 md:mt-0 font-mono">{exp.dates}</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
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