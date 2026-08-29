export interface LearningStage {
  stageNumber: string;
  title: string;
  learningFocus: string;
  appliedThrough: string;
  skills: string[];
  icon: string;
}

export const LEARNING_STAGES: LearningStage[] = [
  {
    stageNumber: 'Stage 01',
    title: 'Foundations',
    learningFocus: 'Python, HTML, CSS, programming logic, Git, and GitHub.',
    appliedThrough: 'Tic Tac Toe, Snake Game, To-Do App, and early Python logic scripts.',
    skills: ['Python', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Programming Logic'],
    icon: '🌱',
  },
  {
    stageNumber: 'Stage 02',
    title: 'Web Development',
    learningFocus: 'JavaScript, DOM manipulation, responsive UI design, and UX layout principles.',
    appliedThrough: 'CineMood, HTML Portfolio V1, and My Resume Website.',
    skills: ['JavaScript', 'Responsive Design', 'DOM API', 'CSS Grid/Flexbox', 'UI/UX'],
    icon: '🌐',
  },
  {
    stageNumber: 'Stage 03',
    title: 'Python, Data & Problem Solving',
    learningFocus: 'Data analysis, visualization, Advanced Excel, Pandas, and analytical problem solving.',
    appliedThrough: 'Data Analytics Case Studies, Python Projects repository, and Stock Analysis research.',
    skills: ['Python Data Stack', 'Pandas', 'Matplotlib', 'Advanced Excel', 'Data Cleaning'],
    icon: '📊',
  },
  {
    stageNumber: 'Stage 04',
    title: 'Backend & Full-Stack',
    learningFocus: 'Node.js, Express.js, RESTful API architecture, authentication, and database schemas.',
    appliedThrough: 'Codetech Internship, Blog Backend System, and Stock Analysis Platform.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL/MySQL', 'Auth & Encryption'],
    icon: '⚙️',
  },
  {
    stageNumber: 'Stage 05',
    title: 'AI & Agentic Systems',
    learningFocus: 'LLM orchestration, CrewAI, LangGraph, AutoGen, multi-agent pipelines, and Docker containers.',
    appliedThrough: 'Autonomous Deep Research System and 4-Agent Software Engineering Workflow.',
    skills: ['CrewAI', 'LangGraph', 'AutoGen', 'LLM Orchestration', 'Multi-Agent AI', 'Docker'],
    icon: '🤖',
  },
  {
    stageNumber: 'Stage 06',
    title: 'Product Development',
    learningFocus: 'Product thinking, user journey mapping, scalable web architecture, and B2B/B2C products.',
    appliedThrough: 'Path Pilot, Job Hub, and Virat Plast B2B Platform.',
    skills: ['TypeScript', 'Next.js', 'Product Design', 'User Journeys', 'Full-Stack Architecture'],
    icon: '🚀',
  },
  {
    stageNumber: 'Stage 07',
    title: 'Current Professional Learning',
    learningFocus: 'Fintech systems, Loan Origination System (LOS) workflows, and team engineering practices.',
    appliedThrough: 'Evnorix Infotech LOS Intake Application & Staff Application.',
    skills: ['Fintech Workflows', 'LOS Ecosystem', 'Enterprise Application Logic', 'Team Collaboration'],
    icon: '💼',
  },
];

export const TIMELINE_MESSAGE =
  "I don't see my skills as a finished list. Each project has pushed me to learn something new — from web fundamentals and Python to full-stack development, data workflows, AI agents and product development. My portfolio represents that journey: learn, build, reflect and build better.";
