import Link from 'next/link';
import { guides, categories } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';
import TrendingProducts from '@/components/TrendingProducts';
import ShopByCategory from '@/components/ShopByCategory';
import AdUnit from '@/components/AdUnit';

export default function HomePage() {
  const inDepthReviews = guides.slice(0, 3);
  const latestReviews = guides.slice(3, 9);

  const categoryChips = [
    { label: 'AI Writing', href: '/guides/best-ai-writing-assistants-2026', icon: '&#9889;' },
    { label: 'CRM', href: '/guides/best-crm-software-small-business-2026', icon: '&#128202;' },
    { label: 'Design', href: '/guides/best-design-tools-2026', icon: '&#127912;' },
    { label: 'Productivity', href: '/guides/best-project-management-tools-2026', icon: '&#9889;' },
    { label: 'Dev Tools', href: '/guides/best-developer-tools-2026', icon: '&#128187;' },
  ];

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://twitter.com/SmartToolPicks',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@smarttoolpicks.net',
      contactType: 'customer service',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is SmartToolPicks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SmartToolPicks is an independent review platform that provides expert SaaS reviews, software comparisons, and productivity tool guides to help you pick the right tools for your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you evaluate software tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate each tool based on features, pricing, ease of use, integrations, customer support, and real user feedback. Every review is independently researched by our team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your recommendations independent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. While we may earn affiliate commissions, our editorial team independently researches and tests every product. Affiliate relationships never influence our rankings or recommendations.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div>
        {/* Hero — Zapier-style clean split */}
        <section className="py-16 sm:py-24 text-center">
          <p className="text-sm font-display font-semibold text-brand-orange uppercase tracking-widest mb-5">Trusted by 50,000+ readers</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] font-black text-brand-ink leading-[1.08] tracking-tight max-w-3xl mx-auto">
            Find your next favorite tool.
          </h1>
          <p className="text-lg text-brand-slate mt-6 max-w-xl mx-auto leading-relaxed">
            Expert SaaS reviews, software comparisons, and productivity guides to help you work smarter.
          </p>

          {/* Search bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input
                type="text"
                placeholder="Search for tools, categories, or reviews..."
                className="w-full pl-12 pr-6 py-4 text-base bg-white border border-surface-border rounded-full focus:outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Category Navigation — Zapier pill chips */}
        <div className="mb-14 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2 justify-center">
            {categoryChips.map(chip => (
              <Link
                key={chip.label}
                href={chip.href}
                className="px-5 py-2.5 bg-white text-brand-slate font-display font-medium text-sm rounded-full border border-surface-border hover:border-brand-purple hover:text-brand-purple transition-all whitespace-nowrap"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-10" />

        {/* Today's Top Picks */}
        <TrendingProducts />

        {/* Featured Reviews */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">Featured Reviews</h2>
              <p className="text-sm text-brand-slate mt-1 font-display">Deep dives into the tools that matter</p>
            </div>
            <Link href="/guides" className="text-sm text-brand-orange hover:text-brand-purple font-display font-semibold transition-colors">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inDepthReviews.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>

        {/* Latest Reviews */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Latest Reviews</h2>
            <Link href="/guides" className="text-sm text-brand-orange hover:text-brand-purple font-display font-semibold transition-colors">
              See all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReviews.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-10" />

        {/* Shop by Category */}
        <ShopByCategory />

        {/* Newsletter */}
        <section className="mb-20">
          <NewsletterCTA />
        </section>
      </div>
    </>
  );
}
