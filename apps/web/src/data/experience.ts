export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: 'professional' | 'leadership' | 'ambassador';
  location?: string;
  workArrangement?: string;
  description: string;
  highlights: string[];
  skillsGained: string[];
  isCurrent?: boolean;
}

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'evnorix',
    organization: 'Evnorix Infotech Pvt. Ltd.',
    role: 'SDE / Software Developer Intern',
    period: '1 August 2026 — Present',
    type: 'professional',
    location: 'Pune (Remote from Kolhapur)',
    workArrangement: 'Remote',
    isCurrent: true,
    description: 'Currently contributing to fintech software systems and the company\'s Loan Origination System (LOS) ecosystem across high-level application workflows.',
    highlights: [
      'Contributing to backend and frontend application workflows for the LOS Intake Application.',
      'Developing features for the LOS Staff Application supporting financial loan origination management.',
      'Collaborating in an active software engineering team applying modern full-stack practices.',
    ],
    skillsGained: ['Software Development', 'Fintech Workflows', 'Loan Origination Systems', 'Backend & Application Logic', 'Collaborative Development'],
  },
  {
    id: 'codetech',
    organization: 'Codetech IT Solutions',
    role: 'Backend Web Developer Intern',
    period: 'August 2025 — November 2025',
    type: 'professional',
    location: 'Remote',
    workArrangement: 'Remote',
    isCurrent: false,
    description: 'Engineered backend systems and gained practical experience with Node.js, Express.js, RESTful APIs, database structures and queries.',
    highlights: [
      'Engineered scalable Node.js and Express.js RESTful API endpoints.',
      'Structured database schemas and optimized data queries for web application services.',
      'Built functional backend logic connecting persistent data storage with client interfaces.',
    ],
    skillsGained: ['Node.js', 'Express.js', 'RESTful APIs', 'Database Design', 'Backend Architecture'],
  },
];

export const LEADERSHIP_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'ecell',
    organization: 'E-Cell, Government College of Engineering, Kolhapur',
    role: 'Technical Head',
    period: 'May 2024 — April 2026',
    type: 'leadership',
    location: 'GCOEK, Kolhapur',
    description: 'Guided a technical team of 4 junior developers selected from over 200 applicants, leading web development projects for student portals.',
    highlights: [
      'Selected and mentored a 4-member developer core team out of 200+ student applicants.',
      'Spearheaded development of technical web portals and student event platforms.',
      'Coordinated technical workflows, code reviews, and project implementation schedules.',
    ],
    skillsGained: ['Technical Leadership', 'Team Mentorship', 'Web Project Coordination', 'Code Reviews'],
  },
  {
    id: 'csesa',
    organization: 'Computer Science Engineering Students Association (CSESA)',
    role: 'Executive Board Member',
    period: 'August 2024 — Present',
    type: 'leadership',
    location: 'GCOEK, Kolhapur',
    isCurrent: true,
    description: 'Contributed to departmental workshops, collaborative technical events and student community initiatives.',
    highlights: [
      'Organized technical workshops and coding competitions for CS students.',
      'Facilitated student engagement and technical community initiatives at GCOEK.',
    ],
    skillsGained: ['Event Management', 'Community Building', 'Technical Coordination', 'Communication'],
  },
  {
    id: 'gsa',
    organization: 'Google / Google Gemini Program',
    role: 'Google Student Ambassador',
    period: 'April 2026 — Present',
    type: 'ambassador',
    isCurrent: true,
    description: 'Advocating Google AI and Gemini technologies through student demonstrations, workshops, and hands-on activities.',
    highlights: [
      'Demonstrated Google Gemini AI tools and generative AI workflows to engineering students.',
      'Hosted technology awareness sessions and student AI engagement initiatives.',
    ],
    skillsGained: ['AI Advocacy', 'Public Speaking', 'Community Outreach', 'Google Gemini AI'],
  },
  {
    id: 'tpo',
    organization: 'Placement & Career Development Ecosystem (PDC / TPO)',
    role: 'Executive Board Member',
    period: '2024 — Present',
    type: 'leadership',
    isCurrent: true,
    description: 'Contributed to technical mock interviews, placement preparation, and student career readiness activities.',
    highlights: [
      'Facilitated technical mock interview sessions for junior engineering students.',
      'Supported placement awareness and career preparation initiatives at GCOEK.',
    ],
    skillsGained: ['Career Preparation', 'Mock Interviewing', 'Student Mentorship'],
  },
  {
    id: 'internshala',
    organization: 'Internshala',
    role: 'Internshala Student Partner / Ambassador',
    period: '2024 — 2025',
    type: 'ambassador',
    isCurrent: false,
    description: 'Participated in student outreach and awareness around learning, internship, and skill-building opportunities.',
    highlights: [
      'Promoted skill-based learning and internship opportunities across the student community.',
    ],
    skillsGained: ['Student Outreach', 'Communication', 'Community Engagement'],
  },
];

export const AMBASSADOR_EXPERIENCE: ExperienceItem[] = LEADERSHIP_EXPERIENCE.filter((item) => item.type === 'ambassador');
