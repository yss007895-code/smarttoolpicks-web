import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SaaS Tool Comparisons 2026 — Head-to-Head Reviews',
  description: 'Honest head-to-head comparisons of the top SaaS tools. We test, benchmark, and break down Notion vs Asana, ClickUp vs Monday, Slack vs Teams, and more.',
  keywords: ['saas comparison', 'software comparison 2026', 'notion vs asana', 'clickup vs monday', 'slack vs teams', 'best project management tool', 'saas tool comparison'],
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    title: 'SaaS Tool Comparisons 2026 — Head-to-Head Reviews',
    description: 'Honest head-to-head comparisons of the top SaaS tools.',
    type: 'website',
    url: `${SITE_URL}/compare`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/guides/hero-tech-premium.webp`, width: 1200, height: 630, alt: 'SaaS Tool Comparisons 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

const comparisons = [
  {
    slug: 'notion-vs-asana',
    title: 'Notion vs Asana 2026',
    desc: 'Flexible all-in-one workspace vs structured workflow manager — which suits your team?',
    badge: 'Project Management',
    winner: 'Notion',
    winnerNote: 'Best for docs + tasks',
  },
  {
    slug: 'clickup-vs-monday',
    title: 'ClickUp vs Monday.com 2026',
    desc: 'Feature-packed underdog vs polished enterprise platform — the complete breakdown.',
    badge: 'Team Productivity',
    winner: 'ClickUp',
    winnerNote: 'Best value for teams',
  },
  {
    slug: 'slack-vs-microsoft-teams',
    title: 'Slack vs Microsoft Teams 2026',
    desc: 'The two biggest business communication platforms compared across speed, integrations, and price.',
    badge: 'Communication',
    winner: 'Depends on stack',
    winnerNote: 'Teams if Microsoft 365',
  },
];

export default function ComparePage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SaaS Tool Comparisons 2026',
    description: 'Head-to-head SaaS tool comparisons with detailed analysis and benchmarks.',
    url: `${SITE_URL}/compare`,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    hasPart: comparisons.map(c => ({
      '@type': 'Article',
      name: c.title,
      url: `${SITE_URL}/compare/${c.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="pt-8 max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="section-title">SaaS Tool Comparisons</h1>
          <p className="text-gray-400 mt-2 text-sm max-w-2xl">
            We test tools side-by-side — real benchmarks, honest takes. No fluff, no paid placements.
          </p>
        </header>

        <div className="grid gap-6">
          {comparisons.map(c => (
            <Link key={c.slug} href={`/compare/${c.slug}`} className="card-hover p-6 group block">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="badge-new mb-2 inline-block text-xs">{c.badge}</span>
                  <h2 className="font-display font-bold text-gray-900 text-lg group-hover:text-gray-600 transition-colors mb-1">{c.title}</h2>
                  <p className="text-sm text-gray-400">{c.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-400 mb-1">Our pick</p>
                  <p className="font-mono font-bold text-gray-900 text-sm">{c.winner}</p>
                  <p className="text-xs text-gray-400">{c.winnerNote}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-display font-bold text-gray-900 mb-4">Related Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/guides/best-project-management-tools-2026" className="card-hover p-4 group">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">Best Project Management Tools 2026</p>
              <p className="text-xs text-gray-400 mt-1">Full rankings across 10+ tools</p>
            </Link>
            <Link href="/guides/rise-of-no-code-ai-tools-build-automate" className="card-hover p-4 group">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">No-Code AI Tools Guide</p>
              <p className="text-xs text-gray-400 mt-1">Build and automate without code</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
