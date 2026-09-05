import type { Metadata } from 'next';
import './globals.css';
import { PROFILE_DATA } from '../data/profile';
import { SOCIAL_LINKS } from '../data/social';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nirmalpatil.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PROFILE_DATA.displayName} | Software Developer & Full-Stack Engineer`,
    template: `%s | ${PROFILE_DATA.displayName}`,
  },
  description: `${PROFILE_DATA.headline}. ${PROFILE_DATA.tagline}`,
  keywords: [
    'Nirmal Patil',
    'Nirmal Rajendra Patil',
    'Software Developer',
    'Full-Stack Developer',
    'Backend Engineer',
    'Agentic AI',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'Prisma',
    'PostgreSQL',
    'Evnorix Infotech',
    'Kolhapur',
    'Pune',
  ],
  authors: [{ name: PROFILE_DATA.fullName, url: 'https://github.com/nirmalpatil132' }],
  creator: PROFILE_DATA.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${PROFILE_DATA.displayName} Portfolio`,
    title: `${PROFILE_DATA.displayName} | Software Developer & Full-Stack Engineer`,
    description: `${PROFILE_DATA.headline}. ${PROFILE_DATA.tagline}`,
    images: [
      {
        url: PROFILE_DATA.profileImagePath,
        width: 800,
        height: 800,
        alt: `${PROFILE_DATA.displayName} - Software Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${PROFILE_DATA.displayName} | Software Developer`,
    description: PROFILE_DATA.headline,
    creator: '@_patil_nirmal',
    images: [PROFILE_DATA.profileImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: PROFILE_DATA.fullName,
        alternateName: PROFILE_DATA.displayName,
        jobTitle: PROFILE_DATA.currentRole,
        worksFor: {
          '@type': 'Organization',
          name: PROFILE_DATA.currentOrganization,
        },
        description: PROFILE_DATA.headline,
        url: siteUrl,
        image: `${siteUrl}${PROFILE_DATA.profileImagePath}`,
        email: PROFILE_DATA.contactEmail,
        telephone: PROFILE_DATA.contactPhone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kolhapur',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        sameAs: SOCIAL_LINKS.map((s) => s.url),
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: `${PROFILE_DATA.displayName} - Developer Portfolio`,
        mainEntity: {
          '@id': `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
