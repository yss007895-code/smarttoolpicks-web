import Link from 'next/link';
import type { Metadata } from 'next';
import { guides, categories } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Expert SaaS Reviews & Software Guides',
  description: 'In-depth reviews, head-to-head comparisons, and buying guides for the best SaaS tools, productivity apps, developer tools, and smart gadgets in 2026.',
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: 'Expert SaaS Reviews & Software Guides | SmartToolPicks',
    description: 'In-depth reviews, head-to-head comparisons, and buying guides for the best SaaS tools, productivity apps, developer tools, and smart gadgets in 2026.',
    url: `${SITE_URL}/guides`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/guides/hero-tech-premium.webp', width: 1200, height: 630, alt: 'SmartToolPicks Reviews' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

export default function GuidesPage() {
  const featured = guides.slice(0, 3);
  const allGuides = guides;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/guides` },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Expert SaaS Reviews & Software Guides',
    description: 'In-depth reviews and buying guides for the best software tools in 2026.',
    url: `${SITE_URL}/guides`,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Hero */}
      <section className="relative -mx-6 px-6 py-16 sm:py-20 bg-brand-purple text-white text-center mb-12 rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-purple opacity-90" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-display font-semibold text-white/70 uppercase tracking-widest mb-4">SmartToolPicks Reviews</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] font-black leading-[1.08] tracking-tight mb-6">
            Expert Reviews &amp; Guides
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            In-depth, independently tested reviews of the best SaaS tools, productivity apps, developer tools, and smart gadgets.
          </p>
        </div>
      </section>

      {/* Category Filter Badges */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2 justify-center">
          <Link
            href="/guides"
            className="px-5 py-2.5 bg-brand-purple text-white font-display font-medium text-sm rounded-full transition-all whitespace-nowrap"
          >
            All Reviews
          </Link>
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/guides?category=${cat.slug}`}
              className="px-5 py-2.5 bg-white text-brand-slate font-display font-medium text-sm rounded-full border border-surface-border hover:border-brand-purple hover:text-brand-purple transition-all whitespace-nowrap"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Reviews */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Featured Reviews</h2>
            <p className="text-sm text-brand-slate mt-1 font-display">Our most popular, in-depth evaluations</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(g => <GuideCard key={g.slug} guide={g} />)}
        </div>
      </section>

      <AdUnit slot="8863913673" format="horizontal" className="mb-10" />

      {/* All Reviews */}
      <section className="mb-16">
        <h2 className="section-title mb-8">All Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGuides.map(g => <GuideCard key={g.slug} guide={g} />)}
        </div>
      </section>

      <AdUnit slot="8863913673" format="horizontal" className="mb-10" />

      {/* Browse by Category */}
      <section className="mb-16">
        <h2 className="section-title mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(cat => {
            const count = guides.filter(g => g.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/guides?category=${cat.slug}`}
                className="group p-6 bg-white border border-surface-border rounded-xl hover:border-brand-purple/30 hover:shadow-lg transition-all"
              >
                <h3 className="font-display font-bold text-brand-ink group-hover:text-brand-purple transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-brand-slate mb-3 leading-relaxed">{cat.description}</p>
                <p className="text-xs font-display font-semibold text-brand-orange">
                  {count} {count === 1 ? 'review' : 'reviews'} &rarr;
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
