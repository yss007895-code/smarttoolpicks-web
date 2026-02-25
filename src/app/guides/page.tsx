import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { guides } from '@/lib/guides-data';
import GuidesClient from './GuidesClient';

export const metadata: Metadata = {
  title: 'Software Reviews — SaaS Comparisons & Tool Guides',
  description: 'Browse expert software reviews with detailed comparisons, pricing breakdowns, and tool recommendations for project management, CRM, design, and more.',
  keywords: ['software reviews', 'saas comparison', 'tool guides', 'best software 2026', 'productivity tools', 'business software'],
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: 'Software Reviews — SaaS Comparisons & Tool Guides',
    description: 'Browse expert software reviews with detailed comparisons and tool recommendations.',
    url: `${SITE_URL}/guides`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/guides/hero-tech-premium.webp', width: 1200, height: 630, alt: 'Software Reviews & SaaS Comparisons' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

export default function GuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SmartToolPicks Software Reviews',
    description: 'Browse expert software reviews with detailed comparisons and tool recommendations.',
    url: `${SITE_URL}/guides`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.slice(0, 10).map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/guides/${g.slug}`,
        name: g.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidesClient />
    </>
  );
}
