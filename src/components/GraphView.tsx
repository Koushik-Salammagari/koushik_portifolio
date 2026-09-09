import React, { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import ForceGraph2D, { ForceGraphMethods, NodeObject, LinkObject } from 'react-force-graph-2d';
import { X, Search, RotateCcw, ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { repos, formatStars } from './OpenSource';

type CategoryKey = 'root' | 'about' | 'skills' | 'experience' | 'projects' | 'opensource' | 'contact';
type NodeKind = 'root' | 'hub' | 'leaf';

interface PanelLink {
  label: string;
  url: string;
}

interface NodePanel {
  title: string;
  meta?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  links?: PanelLink[];
}

interface GNode {
  id: string;
  name: string;
  kind: NodeKind;
  category: CategoryKey;
  val: number;
  panel: NodePanel;
  x?: number;
  y?: number;
}

interface GLink {
  source: string;
  target: string;
}

const categoryColors: Record<CategoryKey, string> = {
  root: '#ffffff',
  about: '#38bdf8',
  skills: '#a78bfa',
  experience: '#34d399',
  projects: '#fb923c',
  opensource: '#f472b6',
  contact: '#facc15',
};

const categoryLabels: Record<Exclude<CategoryKey, 'root'>, string> = {
  about: 'About',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  opensource: 'Open Source',
  contact: 'Contact',
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const buildGraph = (): { nodes: GNode[]; links: GLink[] } => {
  const nodes: GNode[] = [];
  const links: GLink[] = [];

  nodes.push({
    id: 'root',
    name: 'Koushik Salammagari',
    kind: 'root',
    category: 'root',
    val: 100,
    panel: {
      title: 'Koushik Salammagari',
      meta: 'AI/ML Engineer & Full-Stack Developer',
      description:
        "Building intelligent systems that solve real-world problems — from production LLM agents to full-stack applications. Click any node to explore, drag to rearrange, and scroll to zoom.",
    },
  });

  const hubs: { id: string; name: string; category: CategoryKey; panel: NodePanel }[] = [
    {
      id: 'hub-about',
      name: 'About',
      category: 'about',
      panel: {
        title: 'About Me',
        description:
          "A passionate AI/ML Engineer with expertise in developing intelligent systems that solve real-world problems — from building misinformation detection systems to multi-agent AI assistants. Also a proficient full-stack developer, bringing AI models to production through modern web technologies and cloud platforms.",
      },
    },
    {
      id: 'hub-skills',
      name: 'Skills',
      category: 'skills',
      panel: { title: 'Skills & Expertise', description: 'A toolkit spanning AI/ML, full-stack web development, and cloud infrastructure.' },
    },
    {
      id: 'hub-experience',
      name: 'Experience',
      category: 'experience',
      panel: { title: 'Work Experience', description: 'From a co-founded startup to enterprise GenAI engineering — building and shipping production AI systems.' },
    },
    {
      id: 'hub-projects',
      name: 'Projects',
      category: 'projects',
      panel: { title: 'Projects', description: 'A showcase of AI/ML, RAG systems, computer vision, and full-stack applications.' },
    },
    {
      id: 'hub-opensource',
      name: 'Open Source',
      category: 'opensource',
      panel: { title: 'Open Source Contributions', description: "Merged pull requests to production codebases — including Google's Agent Development Kit." },
    },
    {
      id: 'hub-contact',
      name: 'Contact',
      category: 'contact',
      panel: {
        title: 'Get In Touch',
        description: 'Open to AI/ML and full-stack opportunities, collaborations, and interesting problems.',
        links: [{ label: 'Email Me', url: 'mailto:koushik.s1007@gmail.com' }],
      },
    },
  ];

  hubs.forEach((h) => {
    nodes.push({ id: h.id, name: h.name, kind: 'hub', category: h.category, val: 49, panel: h.panel });
    links.push({ source: 'root', target: h.id });
  });

  const aboutLeaves: { id: string; name: string; description: string }[] = [
    { id: 'about-aiml', name: 'AI/ML Expertise', description: 'Deep Learning, LLMs, Computer Vision, NLP, and Reinforcement Learning.' },
    { id: 'about-fullstack', name: 'Full-Stack Development', description: 'Modern web applications with React, Python, FastAPI, and cloud deployment.' },
    { id: 'about-innovation', name: 'Innovation Focus', description: 'Building cutting-edge solutions that bridge AI research and practical applications.' },
    { id: 'about-research', name: 'Research & Development', description: 'Continuous learning and experimentation with the latest AI technologies.' },
  ];
  aboutLeaves.forEach((l) => {
    nodes.push({ id: l.id, name: l.name, kind: 'leaf', category: 'about', val: 20, panel: { title: l.name, description: l.description } });
    links.push({ source: 'hub-about', target: l.id });
  });

  const skillCategories: { id: string; name: string; tags: string[] }[] = [
    { id: 'skills-aiml', name: 'AI/ML & Deep Learning', tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'BERT', 'GPT', 'LLMs', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'Neural Networks', 'CNN', 'LSTM', 'Transfer Learning'] },
    { id: 'skills-frameworks', name: 'AI Frameworks & Tools', tags: ['LangChain', 'LlamaIndex', 'Hugging Face', 'OpenAI API', 'Groq API', 'RAG Systems', 'Vector Databases', 'ChromaDB', 'FAISS', 'Supabase', 'Streamlit', 'Gradio', 'Jupyter'] },
    { id: 'skills-web', name: 'Web Development', tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'FastAPI', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs', 'WebSockets', 'Chrome Extensions', 'Responsive Design'] },
    { id: 'skills-cloud', name: 'Cloud & DevOps', tags: ['Google Cloud', 'AWS', 'Docker', 'Git', 'Linux', 'Database Design', 'PostgreSQL', 'MongoDB', 'Redis', 'API Development', 'Microservices', 'CI/CD'] },
  ];
  skillCategories.forEach((s) => {
    nodes.push({ id: s.id, name: s.name, kind: 'leaf', category: 'skills', val: 20, panel: { title: s.name, tags: s.tags } });
    links.push({ source: 'hub-skills', target: s.id });
  });

  const experiences: { id: string; company: string; role: string; dates: string; highlights: string[] }[] = [
    {
      id: 'exp-balanceai',
      company: 'Balance AI, USA',
      role: 'Software Developer & GenAI Engineer',
      dates: 'Sept 2025 – Current',
      highlights: [
        'Architected an intelligent analytics chatbot using LangGraph multi-agent orchestration, processing 10K+ sensor data points per query with <2s response latency.',
        'Integrated Tuya Cloud APIs with AWS serverless infrastructure (Lambda, Timestream, DynamoDB), reducing data retrieval overhead by 60%.',
        'Developed autonomous agent logic for statistical computations with dynamic visualization selection, surfacing 15-35% potential energy optimization opportunities.',
        'Deployed a production-ready Next.js frontend to AWS Amplify with real-time streaming, achieving a 95% user query success rate in beta.',
      ],
    },
    {
      id: 'exp-att',
      company: 'AT&T, USA',
      role: 'Machine Learning & GenAI Engineer',
      dates: 'Sep 2024 – July 2025',
      highlights: [
        'Engineered AI pipelines for intelligent call routing using LangGraph, LangChain, and MCP, reducing resolution times by 45%.',
        'Built RAG applications integrating FAISS and Pinecone with OpenAI embeddings for semantic search across 10K+ enterprise documents.',
        'Built fairness-aware NLP training pipelines, reducing flagged compliance incidents by 30%.',
        'Fine-tuned GPT-4 and LLaMA2 with QLoRA/LORA, improving response relevance by 27%.',
      ],
    },
    {
      id: 'exp-symmantrix',
      company: 'Symmantrix, India',
      role: 'Machine Learning Engineer',
      dates: 'Aug 2020 – Aug 2022',
      highlights: [
        'Implemented NLP pipelines for classification, NER, and semantic similarity using BERT and spaCy.',
        'Deployed LSTM models to production with FastAPI and Docker on AWS Lambda.',
        'Built supervised and unsupervised ML models (Random Forest, K-Means, XGBoost) for anomaly detection and forecasting.',
        'Created Power BI dashboards to visualize KPIs and ML predictions for business teams.',
      ],
    },
    {
      id: 'exp-learnasky',
      company: 'Learnasky, India',
      role: 'Co-Founder, Full Stack Developer',
      dates: 'May 2019 – Aug 2020',
      highlights: [
        'Co-founded a startup and built a MERN-stack web app for assignment posting and submission, improving workflow efficiency by 30%.',
        'Architected MongoDB schemas and RESTful APIs with Node.js and React, reducing latency by 15%.',
      ],
    },
  ];
  experiences.forEach((e) => {
    nodes.push({
      id: e.id,
      name: e.company,
      kind: 'leaf',
      category: 'experience',
      val: 20,
      panel: { title: e.company, meta: `${e.role} · ${e.dates}`, bullets: e.highlights },
    });
    links.push({ source: 'hub-experience', target: e.id });
  });

  const projects: { id: string; title: string; description: string; tags: string[] }[] = [
    { id: 'proj-webagent', title: 'WebAgent Chrome Extension', description: 'Extracts key insights from any webpage and answers questions in natural, conversational language.', tags: ['LangGraph', 'LangChain', 'FastAPI', 'Chrome Extension'] },
    { id: 'proj-menumind', title: 'Menu Mind - AI Dining Assistant', description: 'Multi-agent system that finds safe food options at restaurants based on dietary restrictions.', tags: ['LangGraph', 'GPT-4o-mini', 'Playwright', 'Multi-Agent'] },
    { id: 'proj-autoflow', title: 'AutoFlow - Intelligent Workflow Agent', description: 'Hourly automation agent monitoring email, Sheets, and calendar via GitHub Actions cron jobs.', tags: ['LangGraph', 'LangChain', 'Google APIs', 'GitHub Actions'] },
    { id: 'proj-misinfo', title: 'Misinformation Classification Engine', description: 'GloVe + LSTM classifier trained on 70,000+ articles to flag true vs. false information.', tags: ['TensorFlow', 'BERT', 'LSTM', 'GloVe'] },
    { id: 'proj-docrag', title: 'Complex Document Analysis RAG', description: 'Dynamic Q&A system for financial and medical documents using LlamaParse.', tags: ['LangChain', 'LlamaParse', 'ChromaDB'] },
    { id: 'proj-multimodalrag', title: 'Multimodal RAG System', description: 'Processes PowerPoint and PDF content with multimodal text + image embeddings.', tags: ['LangChain', 'FAISS', 'Multimodal Embeddings'] },
    { id: 'proj-emailrag', title: 'Email Generator RAG', description: 'RAG framework for tailored cold email generation from resume, portfolio, and job description.', tags: ['LangChain', 'ChromaDB', 'Streamlit'] },
    { id: 'proj-transferlearning', title: 'Transfer Learning Image Recognition', description: 'CNN architecture comparison (ResNet, AlexNet, MobileNetV2); 80% accuracy on Plant Species.', tags: ['TensorFlow', 'ResNet50', 'MobileNetV2'] },
    { id: 'proj-nnclassifier', title: 'Neural Network Classifier', description: 'Configurable neural network API benchmarked across SGD, Adam, and SCG optimizers.', tags: ['PyTorch', 'NumPy', 'Neural Networks'] },
    { id: 'proj-rlrobot', title: 'Reinforcement Learning Robot Control', description: 'RL model controlling a robotic arm with tuned hyperparameters for precision.', tags: ['PyTorch', 'Reinforcement Learning', 'Robotics'] },
    { id: 'proj-tictactoe', title: 'Tic Tac Toe using Q-learning', description: 'Q-learning agent that learns optimal strategy through self-play.', tags: ['Q-Learning', 'NumPy', 'PyTorch'] },
    { id: 'proj-rlgame', title: 'Reinforcement Learning Game Agent', description: 'Q-learning agent for strategic gameplay with custom reward structures.', tags: ['Q-Learning', 'Game Theory'] },
    { id: 'proj-voiceassistant', title: 'Voice Controlled Smart Assistant', description: "Raspberry Pi 'JARVIS' assistant with custom multi-label intent classification.", tags: ['Raspberry Pi', 'Google Speech API', 'IoT'] },
    { id: 'proj-expensetracker', title: 'Expense Tracker', description: 'Full-stack financial management app with expense tracking and reporting.', tags: ['React', 'Node.js', 'Full-Stack'] },
  ];
  projects.forEach((p) => {
    nodes.push({ id: p.id, name: p.title, kind: 'leaf', category: 'projects', val: 20, panel: { title: p.title, description: p.description, tags: p.tags } });
    links.push({ source: 'hub-projects', target: p.id });
  });

  repos.forEach((repo) => {
    const repoId = `os-${slug(repo.name)}`;
    nodes.push({
      id: repoId,
      name: repo.name,
      kind: 'leaf',
      category: 'opensource',
      val: 32,
      panel: {
        title: repo.name,
        meta: `${repo.language}${formatStars(repo.stars) ? ` · ${formatStars(repo.stars)} ★` : ''}`,
        description: repo.note ? `${repo.description} ${repo.note}` : repo.description,
        links: [{ label: 'View Repository', url: repo.url }],
      },
    });
    links.push({ source: 'hub-opensource', target: repoId });

    repo.contributions.forEach((c) => {
      const prId = `${repoId}-pr-${c.prNumber}`;
      nodes.push({
        id: prId,
        name: `#${c.prNumber}`,
        kind: 'leaf',
        category: 'opensource',
        val: 16,
        panel: {
          title: c.title,
          meta: `${c.type} · #${c.prNumber}`,
          description: c.summary,
          links: [{ label: 'View Pull Request', url: c.url }],
        },
      });
      links.push({ source: repoId, target: prId });
    });
  });

  const contactLeaves: { id: string; name: string; panel: NodePanel }[] = [
    { id: 'contact-email', name: 'Email', panel: { title: 'Email', description: 'koushik.s1007@gmail.com', links: [{ label: 'Send an Email', url: 'mailto:koushik.s1007@gmail.com' }] } },
    { id: 'contact-phone', name: 'Phone', panel: { title: 'Phone', description: '+1 510 945 9447' } },
    { id: 'contact-location', name: 'Location', panel: { title: 'Location', description: 'San Jose, California' } },
    { id: 'contact-github', name: 'GitHub', panel: { title: 'GitHub', description: '@Koushik-Salammagari', links: [{ label: 'View Profile', url: 'https://github.com/Koushik-Salammagari' }] } },
    { id: 'contact-linkedin', name: 'LinkedIn', panel: { title: 'LinkedIn', description: "Let's connect professionally.", links: [{ label: 'View Profile', url: 'https://linkedin.com' }] } },
  ];
  contactLeaves.forEach((c) => {
    nodes.push({ id: c.id, name: c.name, kind: 'leaf', category: 'contact', val: 20, panel: c.panel });
    links.push({ source: 'hub-contact', target: c.id });
  });

  return { nodes, links };
};

const contactIcons: Record<string, React.ReactNode> = {
  'contact-email': <Mail size={16} />,
  'contact-phone': <Phone size={16} />,
  'contact-location': <MapPin size={16} />,
  'contact-github': <Github size={16} />,
  'contact-linkedin': <Linkedin size={16} />,
};

const GraphView = () => {
  const fgRef = useRef<ForceGraphMethods<GNode, GLink> | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const { nodes, links } = useMemo(() => buildGraph(), []);
  const graphData = useMemo(() => ({ nodes, links }), [nodes, links]);

  const [selected, setSelected] = useState<GNode | null>(null);
  const [hovered, setHovered] = useState<GNode | null>(null);
  const [query, setQuery] = useState('');

  const neighborMap = useMemo(() => {
    const map = new Map<string, Set<string>>();
    links.forEach((l) => {
      const s = typeof l.source === 'string' ? l.source : (l.source as unknown as GNode).id;
      const t = typeof l.target === 'string' ? l.target : (l.target as unknown as GNode).id;
      if (!map.has(s)) map.set(s, new Set());
      if (!map.has(t)) map.set(t, new Set());
      map.get(s)!.add(t);
      map.get(t)!.add(s);
    });
    return map;
  }, [links]);

  const activeId = selected?.id ?? hovered?.id ?? null;
  const highlightSet = useMemo(() => {
    if (!activeId) return null;
    const set = new Set<string>([activeId]);
    neighborMap.get(activeId)?.forEach((id) => set.add(id));
    return set;
  }, [activeId, neighborMap]);

  const matchSet = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.trim().toLowerCase();
    return new Set(nodes.filter((n) => n.name.toLowerCase().includes(q)).map((n) => n.id));
  }, [query, nodes]);

  useEffect(() => {
    const t = setTimeout(() => {
      fgRef.current?.zoomToFit(600, 60);
    }, 350);
    return () => clearTimeout(t);
  }, []);

  const handleReset = useCallback(() => {
    setSelected(null);
    setQuery('');
    fgRef.current?.zoomToFit(600, 60);
  }, []);

  const handleNodeClick = useCallback((node: NodeObject<GNode>) => {
    setSelected(node as GNode);
    const n = node as GNode;
    if (typeof n.x === 'number' && typeof n.y === 'number') {
      fgRef.current?.centerAt(n.x, n.y, 500);
    }
  }, []);

  const nodeRadius = (n: GNode) => Math.sqrt(n.val);

  return (
    <div className="fixed inset-0 pt-20 bg-black overflow-hidden" ref={containerRef}>
      {/* Search */}
      <div className="absolute top-24 left-4 z-20 flex items-center gap-2">
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-2">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the vault..."
            className="bg-transparent text-sm text-white placeholder-slate-500 outline-none w-40 sm:w-56"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-500 hover:text-white transition-colors">
              <X size={14} />
            </button>
          )}
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 hover:border-slate-500 rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors"
        >
          <RotateCcw size={14} />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-4 z-20 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-3 hidden sm:block">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((key) => (
            <div key={key} className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: categoryColors[key] }} />
              {categoryLabels[key]}
            </div>
          ))}
        </div>
      </div>

      <ForceGraph2D
        ref={fgRef}
        graphData={graphData as never}
        backgroundColor="#000000"
        nodeRelSize={1}
        nodeVal={(n) => (n as GNode).val}
        onNodeClick={handleNodeClick}
        onNodeHover={(n) => setHovered((n as GNode) ?? null)}
        onBackgroundClick={() => setSelected(null)}
        enableNodeDrag={true}
        cooldownTime={4000}
        linkDirectionalParticles={1.5}
        linkDirectionalParticleWidth={1.5}
        linkDirectionalParticleSpeed={0.004}
        linkDirectionalParticleColor={(link: LinkObject<GNode, GLink>) => {
          const target = link.target as unknown as GNode;
          const dimmed = matchSet ? !matchSet.has(target?.id) : highlightSet ? !highlightSet.has(target?.id) : false;
          return dimmed ? 'rgba(100,116,139,0.15)' : categoryColors[target?.category] ?? '#64748b';
        }}
        linkColor={(link: LinkObject<GNode, GLink>) => {
          const s = link.source as unknown as GNode;
          const t = link.target as unknown as GNode;
          const dimmed = matchSet ? !(matchSet.has(s?.id) && matchSet.has(t?.id)) : highlightSet ? !(highlightSet.has(s?.id) && highlightSet.has(t?.id)) : false;
          return dimmed ? 'rgba(51,65,85,0.35)' : 'rgba(148,163,184,0.6)';
        }}
        linkWidth={(link: LinkObject<GNode, GLink>) => {
          const s = link.source as unknown as GNode;
          const t = link.target as unknown as GNode;
          const isActive = highlightSet && highlightSet.has(s?.id) && highlightSet.has(t?.id);
          return isActive ? 2 : 1;
        }}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const n = node as GNode;
          if (typeof n.x !== 'number' || typeof n.y !== 'number') return;
          const radius = nodeRadius(n);
          const isSelected = selected?.id === n.id;
          const isHovered = hovered?.id === n.id;
          const isMatch = matchSet?.has(n.id) ?? false;
          const dimmed = matchSet ? !isMatch : highlightSet ? !highlightSet.has(n.id) : false;

          ctx.save();
          ctx.globalAlpha = dimmed ? 0.18 : 1;

          if ((isSelected || isMatch) && !dimmed) {
            ctx.shadowColor = categoryColors[n.category];
            ctx.shadowBlur = 14;
          }

          ctx.beginPath();
          ctx.arc(n.x, n.y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = categoryColors[n.category];
          ctx.fill();

          if (isSelected || isHovered) {
            ctx.lineWidth = 1.5 / globalScale;
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();
          }
          ctx.shadowBlur = 0;

          const showLabel = n.kind !== 'leaf' || globalScale > 2.4 || isHovered || isSelected || isMatch;
          if (showLabel) {
            const fontSize = (n.kind === 'root' ? 15 : n.kind === 'hub' ? 12.5 : 10.5) / globalScale;
            ctx.font = `${n.kind === 'leaf' ? '500' : '700'} ${fontSize}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillStyle = dimmed ? 'rgba(226,232,240,0.25)' : n.kind === 'root' ? '#ffffff' : '#e2e8f0';
            ctx.fillText(n.name, n.x, n.y + radius + 2);
          }
          ctx.restore();
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          const n = node as GNode;
          if (typeof n.x !== 'number' || typeof n.y !== 'number') return;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(n.x, n.y, nodeRadius(n) + 2, 0, 2 * Math.PI);
          ctx.fill();
        }}
      />

      {/* Detail panel */}
      {selected && (
        <div className="absolute top-24 right-4 bottom-6 w-[90vw] sm:w-96 z-20 clean-card-dark overflow-y-auto animate-[fade-in_0.2s_ease-out]">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: categoryColors[selected.category] }} />
              {selected.category !== 'root' && (
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {categoryLabels[selected.category]}
                </span>
              )}
            </div>
            <button onClick={() => setSelected(null)} className="p-1 hover:bg-slate-800 rounded-lg transition-colors flex-shrink-0">
              <X size={18} className="text-slate-400 hover:text-white" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-2">
            {contactIcons[selected.id]}
            <h3 className="text-xl font-bold text-white">{selected.panel.title}</h3>
          </div>

          {selected.panel.meta && <p className="text-sm text-blue-400 font-medium mb-3">{selected.panel.meta}</p>}

          {selected.panel.description && (
            <p className="text-sm text-slate-300 leading-relaxed mb-4">{selected.panel.description}</p>
          )}

          {selected.panel.bullets && (
            <ul className="space-y-2 mb-4">
              {selected.panel.bullets.map((b, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {selected.panel.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selected.panel.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-slate-800/50 text-white rounded-md text-xs font-medium border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {selected.panel.links && (
            <div className="space-y-2 pt-3 border-t border-slate-800">
              {selected.panel.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={14} />
                  {l.label}
                </a>
              ))}
            </div>
          )}

          {neighborMap.get(selected.id) && neighborMap.get(selected.id)!.size > 0 && (
            <div className="pt-4 mt-4 border-t border-slate-800">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Connected</p>
              <div className="flex flex-wrap gap-2">
                {Array.from(neighborMap.get(selected.id)!)
                  .map((id) => nodes.find((n) => n.id === id))
                  .filter((n): n is GNode => !!n)
                  .map((n) => (
                    <button
                      key={n.id}
                      onClick={() => {
                        setSelected(n);
                        if (typeof n.x === 'number' && typeof n.y === 'number') fgRef.current?.centerAt(n.x, n.y, 500);
                      }}
                      className="px-2.5 py-1 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white rounded-md text-xs font-medium border border-slate-700 hover:border-slate-500 transition-colors"
                    >
                      {n.name}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GraphView;
