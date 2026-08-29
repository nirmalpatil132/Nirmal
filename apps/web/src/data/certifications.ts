export interface CertificationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  issuer?: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-agentic-ai',
    title: 'The Complete Agentic AI Engineering',
    category: 'AI & Multi-Agent Systems',
    description: 'Specialization covering CrewAI, LangGraph, AutoGen, autonomous agent tool calling, and multi-agent system orchestration.',
    skills: ['CrewAI', 'LangGraph', 'AutoGen', 'LLM Orchestration', 'Agentic AI'],
  },
  {
    id: 'cert-data-analytics',
    title: 'Data Analytics & AI-Powered Python',
    category: 'Data Science & Analytics',
    description: 'Comprehensive training in Python data processing, Pandas dataframe manipulation, visualization, and AI-assisted data analytics workflows.',
    skills: ['Python', 'Pandas', 'Data Visualization', 'Advanced Excel', 'Data Analytics'],
  },
  {
    id: 'cert-fullstack',
    title: 'Full Stack Web Development Masterclass',
    category: 'Web Engineering',
    description: 'Full-stack web application engineering including Node.js, Express, REST APIs, database schemas, and modern responsive frontend development.',
    skills: ['Node.js', 'Express.js', 'JavaScript', 'REST APIs', 'PostgreSQL', 'HTML/CSS'],
  },
  {
    id: 'cert-python',
    title: '100 Days of Code — Python Development',
    category: 'Programming & Logic',
    description: 'In-depth Python programming logic, Object-Oriented Programming (OOP), automation scripts, and practical software projects.',
    skills: ['Python', 'OOP', 'Automation', 'Algorithms', 'Data Structures'],
  },
  {
    id: 'cert-figma',
    title: 'Figma UI/UX Design & Prototyping',
    category: 'Design & User Experience',
    description: 'User interface design principles, glassmorphism visual tokens, responsive component wireframing, and interactive UI prototyping in Figma.',
    skills: ['Figma', 'UI/UX Design', 'Design Systems', 'Wireframing', 'Prototyping'],
  },
];
