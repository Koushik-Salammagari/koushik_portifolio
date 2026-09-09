import React from 'react';
import { Github, ExternalLink, Star, GitPullRequest } from 'lucide-react';

type ContributionType = 'Bug Fix' | 'Feature' | 'Tests';

interface Contribution {
  title: string;
  prNumber: number;
  url: string;
  type: ContributionType;
  summary: string;
}

interface Repo {
  name: string;
  url: string;
  description: string;
  stars?: number;
  language: string;
  note?: string;
  contributions: Contribution[];
}

const typeStyles: Record<ContributionType, string> = {
  'Bug Fix': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Feature: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Tests: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const formatStars = (count?: number) => {
  if (!count) return null;
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`;
};

const repos: Repo[] = [
  {
    name: 'google/adk-python',
    url: 'https://github.com/google/adk-python',
    description: "Google's official open-source framework for building and deploying production AI agents — the toolkit powering agent development across the Gemini ecosystem.",
    stars: 21456,
    language: 'Python',
    note: 'Google merges via an internal Copybara pipeline, so these show as "closed" rather than "merged" on GitHub — each was verified against the actual merge commit on main.',
    contributions: [
      {
        title: 'Await cancelled tasks in _merge_agent_run_pre_3_11 to prevent aclose() RuntimeError',
        prNumber: 5416,
        url: 'https://github.com/google/adk-python/pull/5416',
        type: 'Bug Fix',
        summary: "Tracked down and eliminated a race condition deep in ADK's multi-agent orchestration core — a Python 3.10 concurrency bug that was silently masking real failures in parallel agent workflows.",
      },
      {
        title: 'Include function-call events in invocation_events when skip_summarization is set',
        prNumber: 5417,
        url: 'https://github.com/google/adk-python/pull/5417',
        type: 'Bug Fix',
        summary: "Found and fixed a critical scoring defect in ADK's evaluation engine that was returning a false 0.0 trajectory score for any tool using skip_summarization — even on a perfect match.",
      },
      {
        title: 'Unit test coverage: events, sessions, evaluation & tools modules',
        prNumber: 6208,
        url: 'https://github.com/google/adk-python/pull/6208',
        type: 'Tests',
        summary: "Hardened core ADK internals — event handling, session state, evaluation parsing, and tool confirmation — with 5 merged test suites, closing coverage gaps before they could become production bugs.",
      },
    ],
  },
  {
    name: 'Giskard-AI/giskard-oss',
    url: 'https://github.com/Giskard-AI/giskard-oss',
    description: 'A leading open-source evaluation and red-teaming framework for LLM agents.',
    stars: 5805,
    language: 'Python',
    contributions: [
      {
        title: 'Add Toxicity LLM judge check',
        prNumber: 2385,
        url: 'https://github.com/Giskard-AI/giskard-oss/pull/2385',
        type: 'Feature',
        summary: 'Designed and shipped a brand-new safety check for the framework — an LLM-judge Toxicity detector spanning 6 harm categories, complete with prompt engineering, full serialization support, and 10 unit tests.',
      },
    ],
  },
  {
    name: 'pomvox/pomvox',
    url: 'https://github.com/pomvox/pomvox',
    description: 'Local-first, on-device voice dictation for macOS on Apple Silicon.',
    stars: 3,
    language: 'Swift',
    contributions: [
      {
        title: 'Custom dictionary: user words + misheard-term replacements',
        prNumber: 28,
        url: 'https://github.com/pomvox/pomvox/pull/28',
        type: 'Feature',
        summary: 'Architected and built a custom dictionary engine from spec — cached prompt hints plus post-cleanup correction — engineered for zero added per-utterance latency, backed by 16 new tests.',
      },
    ],
  },
  {
    name: 'oraios/serena',
    url: 'https://github.com/oraios/serena',
    description: 'A powerful MCP toolkit for coding — semantic retrieval and editing for AI coding agents.',
    stars: 29045,
    language: 'Python',
    contributions: [
      {
        title: 'Fix Lean4 stale cache: skip caching empty document symbol responses',
        prNumber: 1356,
        url: 'https://github.com/oraios/serena/pull/1356',
        type: 'Bug Fix',
        summary: 'Diagnosed and fixed a caching defect that could permanently break Lean4 symbol resolution — a silent failure that hid every symbol in a file until a user manually cleared the cache.',
      },
      {
        title: 'Add missing children field to DocumentSymbol TypedDict',
        prNumber: 1375,
        url: 'https://github.com/oraios/serena/pull/1375',
        type: 'Bug Fix',
        summary: "Closed a spec-compliance gap in Serena's type system, aligning it precisely with the LSP v3.17 standard.",
      },
    ],
  },
  {
    name: 'topoteretes/cognee',
    url: 'https://github.com/topoteretes/cognee',
    description: 'Open-source AI memory platform — persistent, long-term memory for agents via a self-hosted knowledge graph.',
    stars: 30600,
    language: 'Python',
    contributions: [
      {
        title: 'Remove stale TODO and add top_k limit assertions in CompletionRetriever tests',
        prNumber: 2614,
        url: 'https://github.com/topoteretes/cognee/pull/2614',
        type: 'Tests',
        summary: "Closed a real coverage gap in cognee's retrieval engine, proving the result-limiting behavior is correct end-to-end rather than assumed.",
      },
    ],
  },
  {
    name: 'Agenta-AI/agenta',
    url: 'https://github.com/Agenta-AI/agenta',
    description: 'An open-source workspace for building and evaluating LLM agents and automations.',
    stars: 4732,
    language: 'TypeScript',
    contributions: [
      {
        title: 'Wrap API key inside the create-key modal',
        prNumber: 4746,
        url: 'https://github.com/Agenta-AI/agenta/pull/4746',
        type: 'Bug Fix',
        summary: 'Root-caused and fixed a UI-breaking overflow bug in the API key flow, shipping a clean layout fix without touching the underlying key logic.',
      },
    ],
  },
  {
    name: 'Graphify-Labs/graphify',
    url: 'https://github.com/Graphify-Labs/graphify',
    description: 'Turns a codebase — docs, schemas, configs — into a queryable knowledge graph for AI coding agents.',
    language: 'Python',
    contributions: [
      {
        title: 'Expand ~ in core.hooksPath before resolving install target',
        prNumber: 554,
        url: 'https://github.com/Graphify-Labs/graphify/pull/554',
        type: 'Bug Fix',
        summary: "Fixed a path-resolution bug in Graphify's git hook installer that silently broke installs for any user with a custom hooksPath.",
      },
    ],
  },
];

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Source <span className="gradient-text-dark">Contributions</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Recent contributions to the open-source projects shaping how AI gets built.
            </p>
          </div>

          {/* Repo cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {repos.map((repo) => (
              <div key={repo.name} className="clean-card-dark hover-lift-dark flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} className="flex-shrink-0" />
                    <span className="break-all">{repo.name}</span>
                  </a>
                  {formatStars(repo.stars) && (
                    <div className="flex items-center gap-1 text-sm text-yellow-400 flex-shrink-0">
                      <Star size={14} fill="currentColor" />
                      {formatStars(repo.stars)}
                    </div>
                  )}
                </div>

                <p className="text-slate-300 text-sm mb-4">{repo.description}</p>

                <span className="inline-block w-fit px-3 py-1 bg-slate-800/50 text-white rounded-md text-xs font-medium border border-slate-700 mb-5">
                  {repo.language}
                </span>

                <div className="space-y-4 flex-1">
                  {repo.contributions.map((c) => (
                    <div key={c.prNumber} className="border-l-2 border-slate-700 pl-4">
                      <div className="flex items-start gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border flex-shrink-0 ${typeStyles[c.type]}`}>
                          {c.type}
                        </span>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          #{c.prNumber}
                          <ExternalLink size={12} className="flex-shrink-0" />
                        </a>
                      </div>
                      <p className="text-sm text-slate-200 font-medium mb-1">{c.title}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{c.summary}</p>
                    </div>
                  ))}
                </div>

                {repo.note && (
                  <p className="text-xs text-slate-500 italic mt-5 pt-4 border-t border-slate-800">
                    {repo.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Koushik-Salammagari?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900/50 hover:bg-slate-800/50 text-slate-300 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-slate-600 backdrop-blur-sm hover-lift-dark"
            >
              <GitPullRequest size={20} />
              View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
