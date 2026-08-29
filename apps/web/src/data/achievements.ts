export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Entrepreneurship' | 'Research' | 'Leadership' | 'Extracurricular';
  dateStr: string;
  description: string;
  badgeText: string;
}

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'nec-winner',
    title: 'National Entrepreneurship Challenge (NEC) Winner',
    issuer: 'IIT Bombay',
    category: 'Entrepreneurship',
    dateStr: '2023 — 2025',
    description: '3-Time Winner across Basic and Advanced Tracks in the National Entrepreneurship Challenge organized by E-Cell, IIT Bombay.',
    badgeText: '🏆 3-Time National Winner',
  },
  {
    id: 'ieee-paper',
    title: 'IEEE Conference Research Paper Co-Author',
    issuer: 'IEEE Conference',
    category: 'Research',
    dateStr: '2025',
    description: 'Co-authored and submitted a technical research paper for BizHub — AI-Driven Gamified E-Learning Architecture.',
    badgeText: '📄 Research Publication',
  },
  {
    id: 'gsa-selection',
    title: 'Google Student Ambassador Selection',
    issuer: 'Google / Google Gemini',
    category: 'Leadership',
    dateStr: 'April 2026',
    description: 'Selected as Google Student Ambassador to champion AI and Gemini developer technologies across student communities.',
    badgeText: '✨ Google Ambassador',
  },
  {
    id: 'ecell-lead',
    title: 'Technical Head & Selection Lead',
    issuer: 'E-Cell, GCOEK',
    category: 'Leadership',
    dateStr: '2024 — 2026',
    description: 'Selected and mentored a 4-developer core team out of 200+ applicants for college web platform initiatives.',
    badgeText: '🎯 Technical Leader',
  },
  {
    id: 'sports',
    title: 'Sports & Extracurricular Excellence',
    issuer: 'Inter-College Competition',
    category: 'Extracurricular',
    dateStr: '2022 — 2026',
    description: 'Active participant and achievement recipient in competitive sports including Cricket, Kabaddi, and Badminton.',
    badgeText: '🥇 Sports & Extracurriculars',
  },
];
