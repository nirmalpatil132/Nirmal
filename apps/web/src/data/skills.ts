export type SkillStatus = 'Applied' | 'Working With' | 'Learning' | 'Explored';

export interface SkillItem {
  name: string;
  status: SkillStatus;
  category: string;
  icon?: string;
}

export interface SkillCategoryGroup {
  category: string;
  skills: SkillItem[];
}

export const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', status: 'Applied', category: 'Programming Languages', icon: '🐍' },
      { name: 'JavaScript (ES6+)', status: 'Applied', category: 'Programming Languages', icon: '📜' },
      { name: 'TypeScript', status: 'Applied', category: 'Programming Languages', icon: '🔷' },
      { name: 'HTML5 & CSS3', status: 'Applied', category: 'Programming Languages', icon: '🎨' },
      { name: 'Java', status: 'Learning', category: 'Programming Languages', icon: '☕' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', status: 'Applied', category: 'Backend & Databases', icon: '🟢' },
      { name: 'Express.js', status: 'Applied', category: 'Backend & Databases', icon: '⚡' },
      { name: 'RESTful APIs', status: 'Applied', category: 'Backend & Databases', icon: '🔗' },
      { name: 'PostgreSQL', status: 'Applied', category: 'Backend & Databases', icon: '🐘' },
      { name: 'MongoDB', status: 'Working With', category: 'Backend & Databases', icon: '🍃' },
      { name: 'Prisma ORM', status: 'Applied', category: 'Backend & Databases', icon: '💎' },
    ],
  },
  {
    category: 'AI & Agentic Systems',
    skills: [
      { name: 'Agentic AI Workflows', status: 'Applied', category: 'AI & Agentic Systems', icon: '🤖' },
      { name: 'CrewAI', status: 'Applied', category: 'AI & Agentic Systems', icon: '👥' },
      { name: 'LLM Orchestration', status: 'Applied', category: 'AI & Agentic Systems', icon: '🧠' },
      { name: 'LangGraph', status: 'Explored', category: 'AI & Agentic Systems', icon: '🕸️' },
      { name: 'AutoGen', status: 'Explored', category: 'AI & Agentic Systems', icon: '🔄' },
      { name: 'Google Gemini API', status: 'Applied', category: 'AI & Agentic Systems', icon: '✨' },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Python Data Analysis', status: 'Applied', category: 'Data & Analytics', icon: '📈' },
      { name: 'Advanced Excel', status: 'Applied', category: 'Data & Analytics', icon: '📊' },
      { name: 'Data Visualization', status: 'Applied', category: 'Data & Analytics', icon: '📉' },
      { name: 'AI-Assisted Analysis', status: 'Applied', category: 'Data & Analytics', icon: '🔍' },
    ],
  },
  {
    category: 'Development & Tools',
    skills: [
      { name: 'Git & GitHub', status: 'Applied', category: 'Development & Tools', icon: '🐙' },
      { name: 'Next.js App Router', status: 'Applied', category: 'Development & Tools', icon: '▲' },
      { name: 'Docker', status: 'Working With', category: 'Development & Tools', icon: '🐳' },
      { name: 'Postman / API Testing', status: 'Applied', category: 'Development & Tools', icon: '🚀' },
      { name: 'Vercel Deployment', status: 'Applied', category: 'Development & Tools', icon: '▲' },
    ],
  },
  {
    category: 'Design & Digital Tools',
    skills: [
      { name: 'Figma', status: 'Working With', category: 'Design & Digital Tools', icon: '🎨' },
      { name: 'UI/UX Glassmorphism Tokens', status: 'Applied', category: 'Design & Digital Tools', icon: '✨' },
      { name: 'Canva', status: 'Applied', category: 'Design & Digital Tools', icon: '🖼️' },
      { name: 'PowerPoint Presentations', status: 'Applied', category: 'Design & Digital Tools', icon: '📊' },
    ],
  },
  {
    category: 'Professional & Leadership',
    skills: [
      { name: 'Problem Solving', status: 'Applied', category: 'Professional & Leadership', icon: '🧩' },
      { name: 'Technical Leadership', status: 'Applied', category: 'Professional & Leadership', icon: '🎯' },
      { name: 'Group Project Management', status: 'Applied', category: 'Professional & Leadership', icon: '📋' },
      { name: 'Effective Communication', status: 'Applied', category: 'Professional & Leadership', icon: '💬' },
      { name: 'Technical Mentorship', status: 'Applied', category: 'Professional & Leadership', icon: '🤝' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'English', status: 'Applied', category: 'Languages', icon: '🗣️' },
      { name: 'Hindi', status: 'Applied', category: 'Languages', icon: '🗣️' },
      { name: 'Marathi', status: 'Applied', category: 'Languages', icon: '🗣️' },
    ],
  },
];
