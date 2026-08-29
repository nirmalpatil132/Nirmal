export interface ProfileData {
  fullName: string;
  displayName: string;
  headline: string;
  alternativeHeadlines: string[];
  tagline: string;
  currentRole: string;
  currentOrganization: string;
  rolePeriod: string;
  location: string;
  workArrangement: string;
  openToOpportunities: boolean;
  shortBio: string;
  philosophy: string;
  contactEmail: string;
  contactPhone: string;
  profileImagePath: string;
  resumePdfPath: string;
  identityTags: string[];
}

export const PROFILE_DATA: ProfileData = {
  fullName: 'Nirmal Rajendra Patil',
  displayName: 'Nirmal Patil',
  headline: 'Software Developer Intern | Full-Stack & Backend Development | Agentic AI Systems | Building Real-World Digital Products',
  alternativeHeadlines: [
    'Software Developer Intern | Full-Stack & Backend Developer | Agentic AI Explorer',
    'Software Developer Building Full-Stack Applications, AI Systems & Real-World Digital Products',
  ],
  tagline: 'I learn by building — turning ideas, problems, and emerging technologies into practical digital products.',
  currentRole: 'SDE / Software Developer Intern',
  currentOrganization: 'Evnorix Infotech Pvt. Ltd.',
  rolePeriod: '1 August 2026 — Present',
  location: 'Kolhapur, Maharashtra, India',
  workArrangement: 'Working remotely for a Pune-based software company',
  openToOpportunities: true,
  shortBio: "I'm Nirmal Patil, a Software Developer Intern currently working at Evnorix Infotech Pvt. Ltd. I enjoy building web applications, backend systems, AI-powered workflows, and practical digital products. My journey has taken me from learning programming fundamentals and building small projects to working on larger systems, real-world applications, and Agentic AI workflows.",
  philosophy: 'I learn by building — turning ideas, problems, and emerging technologies into practical digital products.',
  contactEmail: 'nirmalpatil615@gmail.com',
  contactPhone: '+91 93223 51145',
  profileImagePath: '/images/nirmal-passport-photo.png',
  resumePdfPath: '/resume/Nirmal_Patil_Resume.pdf',
  identityTags: [
    'Software Developer',
    'Full-Stack Development',
    'Backend Systems',
    'Agentic AI',
    'Data Analytics',
    'Product Building',
  ],
};
