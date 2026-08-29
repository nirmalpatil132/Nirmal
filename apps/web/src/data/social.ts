export interface SocialLink {
  platform: string;
  url: string;
  category: 'primary' | 'developer' | 'social';
  username?: string;
  icon?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/patilnirmal?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    category: 'primary',
    username: 'patilnirmal',
    icon: '💼',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/nirmalpatil132',
    category: 'primary',
    username: 'nirmalpatil132',
    icon: '🐙',
  },
  {
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/nirmal_patil',
    category: 'developer',
    username: 'nirmal_patil',
    icon: '🧠',
  },
  {
    platform: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/nirmalpatil615',
    category: 'developer',
    username: 'nirmalpatil615',
    icon: '💻',
  },
  {
    platform: 'Devpost',
    url: 'https://devpost.com/nirmalpatil615?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
    category: 'developer',
    username: 'nirmalpatil615',
    icon: '🚀',
  },
  {
    platform: 'Behance',
    url: 'https://www.behance.net/nirmalpatil4',
    category: 'developer',
    username: 'nirmalpatil4',
    icon: '🎨',
  },
  {
    platform: 'Previous Portfolio',
    url: 'https://nirmalpatil132.github.io/My-Resume-Website/',
    category: 'developer',
    username: 'My-Resume-Website',
    icon: '🌐',
  },
  {
    platform: 'X / Twitter',
    url: 'https://x.com/_patil_nirmal',
    category: 'social',
    username: '_patil_nirmal',
    icon: '🐦',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/_patil_nirmal?igsh=MXcycXg3cmI5bzJjaw==',
    category: 'social',
    username: '_patil_nirmal',
    icon: '📸',
  },
];
