import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { guides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';
import TrendingProducts from '@/components/TrendingProducts';
import ShopByCategory from '@/components/ShopByCategory';
import AdUnit from '@/components/AdUnit';

export default function HomePage() {
  const editorPicks = guides.slice(0, 3);

  const featuredGuides = [
    { title: 'Best Project Management Tools 2026', image: '/images/guides/guide-pm-tools.webp', url: '/guides/best-project-management-tools-2026' },
    { title: 'Top CRM Software Compared', image: '/images/guides/guide-crm.webp', url: '/guides/best-crm-software-small-business-2026' },
    { title: 'Best AI Writing Assistants 2026', image: '/images/guides/guide-no-code.webp', url: '/guides/best-ai-writing-assistants-2026' },
    { title: 'Best Video Editing Software 2026', image: '/images/guides/guide-design-tools.webp', url: '/guides/best-video-editing-software-2026' },
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
        {/* Hero â Clean editorial style */}
        <section className="pt-16 pb-20">
          <p className="text-sm text-gray-400 font-mono tracking-wide uppercase mb-4">
            Your Smart Software Guide
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 text-gray-900">
            Pick the right tools{' '}
            <span className="font-display italic text-gray-400">for your business</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
            Expert SaaS reviews, software comparisons, and productivity tool guides
            to help you work smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/shop" className="btn-primary text-center">Browse Top Tools</Link>
            <Link href="/guides" className="btn-secondary text-center">Read Software Reviews</Link>
          </div>
        </section>

        {/* Ad banner between hero and products */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />

        {/* Trending Products */}
        <TrendingProducts />

        {/* Editor's Picks â Top 3 guides */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Editor&apos;s Picks</h2>
              <p className="text-sm text-gray-400 mt-1">Hand-selected reviews by our editorial team</p>
            </div>
            <Link href="/guides" className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editorPicks.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>

        {/* Ad banner between guides and shop */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />

        {/* Shop by Category */}
        <ShopByCategory />

        {/* Newsletter */}
        <section className="mb-20">
          <NewsletterCTA />
        </section>

        {/* Pinterest Gallery â 4 pins */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Popular Reviews</h2>
              <p className="text-sm text-gray-400 mt-1">Our most-read software guides this week</p>
            </div>
            <Link href="/guides"
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {featuredGuides.map((pin, i) => (
              <Link key={i} href={pin.url} className="group relative rounded-xl overflow-hidden aspect-[2/3] block">
                <SafeImage
                  src={pin.image}
                  alt={pin.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display font-bold text-white text-sm leading-tight">
                    {pin.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
