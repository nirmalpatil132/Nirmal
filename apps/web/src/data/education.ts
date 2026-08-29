export interface EducationItem {
  id: string;
  degree: string;
  fieldOfStudy: string;
  institution: string;
  location: string;
  period: string;
  result: string;
  highlights?: string;
  order: number;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    fieldOfStudy: 'Computer Science & Engineering',
    institution: 'Government College of Engineering, Kolhapur (GCOEK)',
    location: 'Kolhapur, Maharashtra',
    period: '2023 — Present',
    result: 'CGPA: 7.21',
    highlights: 'Technical Head at E-Cell, CSESA Executive Board Member, Placement Ecosystem Member.',
    order: 1,
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC — XII)',
    fieldOfStudy: 'Science & Mathematics',
    institution: 'Indira Gandhi Junior College, Dharangaon',
    location: 'Jalgaon, Maharashtra',
    period: '2020 — 2022',
    result: 'Percentage: 84.17%',
    highlights: 'Strong foundation in Mathematics, Physics, and Computer Science.',
    order: 2,
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC — X)',
    fieldOfStudy: 'General Secondary Education',
    institution: 'P. R. High School, Dharangaon',
    location: 'Jalgaon, Maharashtra',
    period: '2019 — 2020',
    result: 'Percentage: 93.00%',
    highlights: 'Academic excellence award and school-level merit performance.',
    order: 3,
  },
];
