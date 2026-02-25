import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import StyleQuizClient from './StyleQuizClient';

export const metadata: Metadata = {
  title: 'Tool Finder — Discover the Right Software for You',
  description: 'Answer 5 quick questions to get personalized software recommendations tailored to your business needs and budget.',
  keywords: ['tool finder', 'software quiz', 'best saas for me', 'software recommendation', 'tool comparison'],
  alternates: { canonical: `${SITE_URL}/style-quiz` },
  openGraph: {
    title: 'Tool Finder — Discover the Right Software for You',
    description: 'Answer 5 quick questions to get personalized software recommendations.',
    url: `${SITE_URL}/style-quiz`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/guides/hero-tech-premium.webp', width: 1200, height: 630, alt: 'Software Tool Finder Quiz' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

export default function StyleQuizPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'SmartToolPicks Tool Finder Quiz',
    description: 'Discover the right software tools with our free 5-question quiz.',
    url: `${SITE_URL}/style-quiz`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StyleQuizClient />
    </>
  );
}
