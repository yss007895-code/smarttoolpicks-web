import Link from 'next/link';
import { guides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';
import TrendingProducts from '@/components/TrendingProducts';
import ShopByCategory from '@/components/ShopByCategory';
import AdUnit from '@/components/AdUnit';

export default function HomePage() {
  const inDepthReviews = guides.slice(0, 3);

  const categoryChips = [
    { label: 'AI Writing', href: '/guides/best-ai-writing-assistants-2026' },
    { label: 'CRM', href: '/guides/best-crm-software-small-business-2026' },
    { label: 'Design', href: '/guides/best-design-tools-2026' },
    { label: 'Productivity', href: '/guides/best-project-management-tools-2026' },
    { label: 'Dev Tools', href: '/guides/best-developer-tools-2026' },
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
        {/* Hero — Clean, centered, Product Hunt style */}
        <section className="py-16 sm:py-20 text-center">
          <h1 className="font-display text-[2.2rem] sm:text-[2.8rem] font-bold text-[#1F2937] leading-tight tracking-tight">
            Find your next favorite tool.
          </h1>
          <p className="text-lg text-gray-500 mt-3 max-w-lg mx-auto">
            Expert SaaS reviews, software comparisons, and productivity guides to help you work smarter.
          </p>

          {/* Prominent search bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input
                type="text"
                placeholder="Search for tools, categories, or reviews..."
                className="w-full pl-12 pr-6 py-4 text-base bg-white border-2 border-border rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 shadow-sm transition-all"
              />
            </div>
          </div>
        </section>

        {/* Category Chips — horizontal scroll */}
        <div className="mb-10 -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {categoryChips.map(chip => (
              <Link
                key={chip.label}
                href={chip.href}
                className="px-5 py-2 bg-surface text-gray-600 font-display font-medium text-sm rounded-full border border-border hover:border-accent hover:text-accent hover:bg-accent/5 transition-all whitespace-nowrap"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-8" />

        {/* Today's Picks — Vertical list */}
        <TrendingProducts />

        {/* In-Depth Reviews */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">In-Depth Reviews</h2>
            <Link href="/guides" className="text-sm text-accent hover:text-accent-hover font-medium transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {inDepthReviews.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-8" />

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
