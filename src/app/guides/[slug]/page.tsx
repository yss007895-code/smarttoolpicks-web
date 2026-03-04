import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug, getRelatedGuides } from '@/lib/guides-data';
import type { AffiliateProduct } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import SafeImage from '@/components/SafeImage';
import GuideCard from '@/components/GuideCard';
import AdUnit from '@/components/AdUnit';
import AffiliateDisclosureBanner from '@/components/AffiliateDisclosureBanner';
import ShareButtons from '@/components/ShareButtons';

// ---------- Static params for export ----------

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

// ---------- Dynamic metadata ----------

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return { title: 'Review Not Found' };
  }
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `${SITE_URL}/guides/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      url: `${SITE_URL}/guides/${guide.slug}`,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: guide.date,
      images: guide.image ? [{ url: guide.image, width: 1200, height: 630, alt: guide.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SmartToolPicks',
      title: guide.title,
      description: guide.description,
    },
  };
}

// ---------- Rating badge color ----------

function ratingColor(rating: number): string {
  if (rating >= 9.0) return 'bg-emerald-600';
  if (rating >= 8.0) return 'bg-brand-purple';
  return 'bg-amber-500';
}

// ---------- Page component ----------

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return notFound();

  const related = getRelatedGuides(guide.slug, 3);
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;

  // ----- JSON-LD -----
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: pageUrl },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    image: guide.image ? `${SITE_URL}${guide.image}` : undefined,
    datePublished: guide.date,
    dateModified: guide.date,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  const productJsonLd = guide.affiliateProducts.map((p: AffiliateProduct) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    brand: { '@type': 'Brand', name: p.brand },
    image: p.image ? `${SITE_URL}${p.image}` : undefined,
    description: p.pros.join('. '),
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: p.rating, bestRating: 10 },
      author: { '@type': 'Organization', name: SITE_NAME },
    },
    offers: {
      '@type': 'Offer',
      price: p.price.replace(/[^0-9.]/g, '') || '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: p.url,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {productJsonLd.map((pld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pld) }}
        />
      ))}

      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 font-display mb-6 mt-2">
          <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-purple transition-colors">Reviews</Link>
          <span>/</span>
          <span className="text-brand-slate truncate max-w-[200px]">{guide.title}</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-new">{guide.tag}</span>
            <span className="text-xs text-gray-400 font-display">{guide.readTime}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-ink leading-[1.1] tracking-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-brand-slate leading-relaxed max-w-2xl">
            {guide.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400 font-display">
            <time dateTime={guide.date}>
              {new Date(guide.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{guide.affiliateProducts.length} tools compared</span>
          </div>
        </header>

        {/* Hero Image */}
        {guide.image && (
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-surface-muted mb-10">
            <SafeImage
              src={guide.image}
              alt={guide.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {/* Ad - header slot */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-8" />

        {/* Affiliate disclosure */}
        <AffiliateDisclosureBanner />

        {/* Table of Contents */}
        <nav className="mb-10 p-5 bg-white border border-surface-border rounded-xl">
          <h2 className="font-display font-bold text-sm text-brand-ink uppercase tracking-wider mb-3">Table of Contents</h2>
          <ol className="space-y-2">
            {guide.sections.map((s, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-sm text-brand-slate hover:text-brand-purple transition-colors font-display"
                >
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
            <li>
              <a href="#comparison-table" className="text-sm text-brand-slate hover:text-brand-purple transition-colors font-display">
                {guide.sections.length + 1}. Product Comparison
              </a>
            </li>
          </ol>
        </nav>

        {/* Article Sections */}
        <div className="prose-style">
          {guide.sections.map((section, i) => (
            <section key={i} id={`section-${i}`}>
              <h2>{section.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}
        </div>

        {/* Mid-article Ad */}
        <AdUnit slot="8863913673" format="rectangle" className="my-10" />

        {/* Product Comparison Table */}
        <section id="comparison-table" className="my-12">
          <h2 className="font-display text-2xl font-bold text-brand-ink mb-6 tracking-tight">Product Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden border border-surface-border">
              <thead>
                <tr className="bg-brand-ink text-white">
                  <th className="font-display text-sm font-semibold px-4 py-3 text-left">Tool</th>
                  <th className="font-display text-sm font-semibold px-4 py-3 text-center">Rating</th>
                  <th className="font-display text-sm font-semibold px-4 py-3 text-left">Price</th>
                  <th className="font-display text-sm font-semibold px-4 py-3 text-left hidden md:table-cell">Top Pro</th>
                  <th className="font-display text-sm font-semibold px-4 py-3 text-left hidden md:table-cell">Top Con</th>
                  <th className="font-display text-sm font-semibold px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {guide.affiliateProducts.map((p, i) => (
                  <tr key={i} className="border-b border-surface-border last:border-0 hover:bg-surface-muted/50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        {p.image && (
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-surface-muted shrink-0">
                            <SafeImage src={p.image} alt={p.name} fill sizes="40px" className="object-cover" />
                          </div>
                        )}
                        <div>
                          <p className="font-display font-bold text-sm text-brand-ink">{p.name}</p>
                          <p className="text-xs text-gray-400">{p.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg text-white font-display font-bold text-sm ${ratingColor(p.rating)}`}>
                        {p.rating}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-mono font-bold text-sm text-brand-ink">{p.price}</span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-600">{p.pros[0]}</span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-500">{p.cons[0]}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                        className="inline-block bg-brand-orange text-white text-xs font-display font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                      >
                        View Deal
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual Product Cards */}
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold text-brand-ink mb-8 tracking-tight">Detailed Product Reviews</h2>
          <div className="space-y-8">
            {guide.affiliateProducts.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-surface-border rounded-xl p-6 hover:border-brand-purple/20 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product image */}
                  {p.image && (
                    <div className="relative w-full sm:w-40 h-40 rounded-lg overflow-hidden bg-surface-muted shrink-0">
                      <SafeImage src={p.image} alt={p.name} fill sizes="160px" className="object-cover" />
                    </div>
                  )}
                  {/* Product info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {p.badge && (
                            <span className="text-xs font-display font-semibold text-brand-purple bg-brand-purple-light px-2.5 py-0.5 rounded-full">
                              {p.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-xl text-brand-ink">{p.name}</h3>
                        <p className="text-sm text-gray-400 mt-0.5">{p.brand}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white font-display font-bold text-base ${ratingColor(p.rating)}`}>
                          {p.rating}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">/10</p>
                      </div>
                    </div>

                    <p className="font-mono font-bold text-lg text-brand-ink mb-4">{p.price}</p>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div>
                        <h4 className="text-xs font-display font-semibold text-emerald-700 uppercase tracking-wider mb-2">Pros</h4>
                        <ul className="space-y-1.5">
                          {p.pros.map((pro, pi) => (
                            <li key={pi} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-display font-semibold text-red-600 uppercase tracking-wider mb-2">Cons</h4>
                        <ul className="space-y-1.5">
                          {p.cons.map((con, ci) => (
                            <li key={ci} className="flex items-start gap-2 text-sm text-gray-500">
                              <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="inline-block bg-brand-orange text-white text-sm font-display font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                    >
                      Check Price &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Share Buttons */}
        <div className="my-10 py-6 border-t border-surface-border">
          <p className="text-center text-sm text-gray-400 font-display mb-4">Found this helpful? Share it.</p>
          <ShareButtons url={pageUrl} title={guide.title} image={guide.image} />
        </div>

        {/* Related Reviews */}
        {related.length > 0 && (
          <section className="my-12">
            <h2 className="section-title mb-8">Related Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(g => <GuideCard key={g.slug} guide={g} />)}
            </div>
          </section>
        )}

        {/* Bottom Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-10" />
      </article>
    </>
  );
}
