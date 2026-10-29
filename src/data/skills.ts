export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Data',
    skills: [
      'Python',
      'SQL',
      'Java fundamentals',
      'C#/.NET fundamentals',
      'Pandas',
      'NumPy',
    ],
  },
  {
    id: 'ai',
    title: 'Agentic AI & Generative AI',
    skills: [
      'AI agents',
      'Multi-agent workflow concepts',
      'LangGraph',
      'LangChain',
      'Large Language Models',
      'Prompt engineering',
      'Retrieval-Augmented Generation (RAG)',
      'Embeddings and contextual retrieval',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    skills: [
      'FastAPI',
      'REST API concepts',
      'JSON',
      'PostgreSQL',
      'Qdrant',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Responsive UI development',
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    skills: [
      'Git',
      'GitHub',
      'Docker fundamentals',
      'Ollama',
      'OpenAI API',
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    skills: [
      'Machine learning fundamentals',
      'scikit-learn fundamentals',
      'TensorFlow/PyTorch fundamentals',
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    skills: [
      'Security-alert analysis concepts',
      'Threat intelligence',
      'AI-assisted security analysis',
      'SOC workflow concepts',
      'Linux and networking fundamentals',
    ],
  },
];
