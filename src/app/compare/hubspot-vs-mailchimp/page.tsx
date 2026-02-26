import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'HubSpot vs Mailchimp 2026: CRM vs Email Marketing Compared',
  description: 'HubSpot is a full CRM. Mailchimp is a focused email tool. We compared both across deliverability, automations, pricing, and ease of use for growing businesses.',
  keywords: ['hubspot vs mailchimp', 'hubspot vs mailchimp 2026', 'best email marketing tool', 'hubspot review', 'mailchimp review', 'crm email marketing comparison', 'mailchimp alternative'],
  alternates: { canonical: `${SITE_URL}/compare/hubspot-vs-mailchimp` },
  openGraph: {
    title: 'HubSpot vs Mailchimp 2026: CRM vs Email Marketing Compared',
    description: 'Full CRM platform vs focused email tool. We break down the real differences for growing businesses.',
    type: 'article',
    url: `${SITE_URL}/compare/hubspot-vs-mailchimp`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/guides/hero-tech-premium.webp`, width: 1200, height: 630, alt: 'HubSpot vs Mailchimp 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

const rows = [
  { feature: 'Free Plan', hubspot: 'Yes (CRM + email 2,000/mo)', mailchimp: 'Yes (500 contacts, 1,000 emails/mo)', winner: 'hubspot' },
  { feature: 'Starting Price', hubspot: '$20/mo (Starter)', mailchimp: '$13/mo (Essentials)', winner: 'mailchimp' },
  { feature: 'CRM Built-in', hubspot: 'Full CRM (free)', mailchimp: 'Basic contacts only', winner: 'hubspot' },
  { feature: 'Email Automations', hubspot: 'Advanced (workflows)', mailchimp: 'Good (journeys)', winner: 'hubspot' },
  { feature: 'Email Deliverability', hubspot: 'Very high', mailchimp: 'High (industry standard)', winner: 'tie' },
  { feature: 'Landing Pages', hubspot: 'Yes (Starter+)', mailchimp: 'Yes (basic)', winner: 'hubspot' },
  { feature: 'A/B Testing', hubspot: 'Yes (Starter+)', mailchimp: 'Yes (all plans)', winner: 'mailchimp' },
  { feature: 'Segmentation', hubspot: 'Advanced (smart lists)', mailchimp: 'Good (standard)', winner: 'hubspot' },
  { feature: 'Reporting', hubspot: 'Comprehensive', mailchimp: 'Good (email-focused)', winner: 'hubspot' },
  { feature: 'Ease of Use', hubspot: 'Moderate', mailchimp: 'Easy', winner: 'mailchimp' },
  { feature: 'Integrations', hubspot: '1,500+', mailchimp: '300+', winner: 'hubspot' },
  { feature: 'Price at 10K Contacts', hubspot: '$890/mo (Marketing Hub)', mailchimp: '$135/mo (Standard)', winner: 'mailchimp' },
];

const faqs = [
  {
    q: 'Is HubSpot really free?',
    a: 'HubSpot\'s CRM is genuinely free with no time limit. You get contact management, deal tracking, email templates, and live chat at no cost. The free Marketing Hub tier includes 2,000 email sends per month. The catch is that HubSpot branding appears on emails and forms, and advanced automation requires paid plans starting at $20/month.',
  },
  {
    q: 'Which is better for small businesses: HubSpot or Mailchimp?',
    a: 'Mailchimp wins on price for pure email marketing. If you just need to send newsletters and run simple drip campaigns, Mailchimp\'s Essentials plan at $13/month is hard to beat. HubSpot becomes the better choice when you also need CRM, sales pipeline management, or deeper contact tracking alongside your emails.',
  },
  {
    q: 'Does HubSpot have better deliverability than Mailchimp?',
    a: 'Both are strong. HubSpot and Mailchimp consistently achieve 99%+ deliverability rates in independent testing. Mailchimp has a slight advantage from its longer history and strict spam enforcement policies. At scale, your list hygiene matters far more than the platform you choose.',
  },
  {
    q: 'Can Mailchimp work as a CRM?',
    a: 'Very loosely. Mailchimp added contact management features, but it is not a true CRM. You cannot track deals, manage a sales pipeline, log calls, or assign contacts to reps the way HubSpot CRM does. If sales and marketing alignment matters to your business, HubSpot is the only option.',
  },
  {
    q: 'Which has better email automation?',
    a: 'HubSpot\'s workflow builder is more powerful, especially when combined with CRM data. You can trigger sequences based on contact properties, deal stages, form submissions, or website visits. Mailchimp\'s Customer Journeys tool is intuitive and covers standard drip campaigns well -- just without the CRM triggers. For basic nurture sequences, Mailchimp works fine.',
  },
];

export default function HubSpotVsMailchimp() {
  const hubspotWins = rows.filter(r => r.winner === 'hubspot').length;
  const mailchimpWins = rows.filter(r => r.winner === 'mailchimp').length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'HubSpot vs Mailchimp 2026: CRM vs Email Marketing Compared',
    description: 'We compared HubSpot and Mailchimp across deliverability, automation, pricing, and ease of use.',
    image: `${SITE_URL}/images/guides/hero-tech-premium.webp`,
    datePublished: '2026-02-15',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/hubspot-vs-mailchimp` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'HubSpot vs Mailchimp', item: `${SITE_URL}/compare/hubspot-vs-mailchimp` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="pt-8 max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-gray-600">Compare</Link>
          <span>/</span>
          <span className="text-gray-600">HubSpot vs Mailchimp</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">Email Marketing</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            HubSpot vs Mailchimp 2026: More Than Just Email
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Mailchimp does one thing really well. HubSpot does many things adequately -- and one thing Mailchimp cannot touch: CRM. Here is what that difference actually means for your business.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <span>By SmartToolPicks Team</span>
            <span>·</span>
            <span>Updated February 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>
        </header>

        {/* Quick Verdict */}
        <div className="border border-gray-100 rounded-2xl p-6 mb-8 bg-gray-50">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-5 bg-white border border-indigo-100 rounded-xl">
              <div className="text-xl font-bold text-indigo-700 mb-1">HubSpot</div>
              <div className="text-sm text-gray-500 mb-3">Best for CRM + marketing in one platform</div>
              <div className="text-xs text-gray-400 mb-3">Wins {hubspotWins} of {rows.length} categories</div>
              <a
                href="https://www.hubspot.com/pricing/marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try HubSpot Free
              </a>
            </div>
            <div className="text-center p-5 bg-white border border-gray-100 rounded-xl">
              <div className="text-xl font-bold text-gray-900 mb-1">Mailchimp</div>
              <div className="text-sm text-gray-500 mb-3">Best for focused email at lower cost</div>
              <div className="text-xs text-gray-400 mb-3">Wins {mailchimpWins} of {rows.length} categories</div>
              <a
                href="https://mailchimp.com/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Mailchimp Free
              </a>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-10 overflow-x-auto">
          <h2 className="font-display font-bold text-gray-900 text-xl mb-4">Head-to-Head Comparison</h2>
          <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 text-gray-700 font-semibold">Feature</th>
                <th className="text-center p-3 text-indigo-700 font-semibold">HubSpot</th>
                <th className="text-center p-3 text-gray-700 font-semibold">Mailchimp</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 text-gray-600 font-medium">{row.feature}</td>
                  <td className={`p-3 text-center ${row.winner === 'hubspot' ? 'text-indigo-700 font-semibold' : 'text-gray-400'}`}>
                    {row.hubspot}
                  </td>
                  <td className={`p-3 text-center ${row.winner === 'mailchimp' ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                    {row.mailchimp}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="p-3 text-gray-800">Score</td>
                <td className="p-3 text-center text-indigo-700">{hubspotWins} wins</td>
                <td className="p-3 text-center text-gray-700">{mailchimpWins} wins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-style">
          <h2>Where HubSpot Wins</h2>
          <p>
            The free CRM is genuinely excellent. Contact tracking, deal pipeline, email logging, meeting scheduling, live chat -- all free, all in one place. For any business with a sales team, HubSpot CRM is hard to say no to at $0. Once you have your contacts in HubSpot, marketing to them becomes dramatically more targeted.
          </p>
          <p>
            Smart lists and advanced segmentation let you create audiences based on CRM properties -- deal stage, company size, job title, pages visited, emails opened. Sending a campaign specifically to contacts who visited your pricing page but did not convert is trivial in HubSpot. In Mailchimp, it requires custom integrations and workarounds.
          </p>
          <p>
            The workflow automation builder is powerful. Multi-step sequences that adjust based on contact behavior, branch based on properties, and sync with sales activities are well within HubSpot&apos;s capabilities. The integration ecosystem is also larger -- 1,500+ native connections versus Mailchimp&apos;s 300.
          </p>

          <h2>Where Mailchimp Wins</h2>
          <p>
            Price at scale. HubSpot&apos;s Marketing Hub pricing jumps significantly as your contact list grows -- at 10,000 contacts you are looking at $890/month. Mailchimp&apos;s Standard plan for the same contact count runs around $135/month. For pure email marketing without CRM needs, that gap is hard to justify.
          </p>
          <p>
            Ease of use is genuinely better in Mailchimp. The drag-and-drop editor is more intuitive, the Customer Journeys builder is visual and accessible for non-technical users, and the onboarding is friendlier. Teams without dedicated marketing ops staff will get up and running faster in Mailchimp.
          </p>
          <p>
            A/B testing is available on all Mailchimp plans, including Essentials at $13/month. HubSpot gates A/B testing behind Starter ($20/month) and has limits on what you can test at lower tiers. For smaller teams who rely on testing to optimize campaigns, Mailchimp delivers this feature at a lower price point.
          </p>

          <h2>Pricing at Scale</h2>
          <p>
            At 1,000 contacts: Mailchimp Essentials ($13/mo) vs HubSpot Starter ($20/mo). Close enough to call it a tie.
          </p>
          <p>
            At 5,000 contacts: Mailchimp Standard ($75/mo) vs HubSpot Starter ($45/mo). HubSpot wins.
          </p>
          <p>
            At 10,000+ contacts: HubSpot pricing jumps dramatically. Mailchimp maintains more predictable per-contact pricing. For large lists focused purely on email, Mailchimp becomes significantly cheaper.
          </p>

          <h2>Which Should You Choose?</h2>
          <p>
            Choose HubSpot if your business has a sales team, needs CRM alongside email marketing, or values sales and marketing alignment. The free CRM alone is worth starting here.
          </p>
          <p>
            Choose Mailchimp if you primarily send newsletters and campaigns, do not need a full CRM, and want to keep costs low as your list grows.
          </p>
          <p>
            Many growing companies start on Mailchimp and migrate to HubSpot when they hire their first sales rep. That transition is manageable -- HubSpot has migration tools -- but plan for it early rather than late.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-10 mb-8">
          <h2 className="font-display font-bold text-gray-900 text-xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* More Comparisons */}
        <div className="my-8">
          <h3 className="font-display font-bold text-gray-900 mb-4">More SaaS Comparisons</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/compare/zapier-vs-make" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Zapier vs Make</p>
              <p className="text-xs text-gray-400 mt-1">Automation giants compared on power, price, and ease</p>
            </Link>
            <Link href="/compare/canva-vs-figma" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Canva vs Figma</p>
              <p className="text-xs text-gray-400 mt-1">Easy templates vs professional design collaboration</p>
            </Link>
            <Link href="/compare/notion-vs-asana" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Notion vs Asana</p>
              <p className="text-xs text-gray-400 mt-1">Flexible workspace vs structured project management</p>
            </Link>
            <Link href="/compare/clickup-vs-monday" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">ClickUp vs Monday.com</p>
              <p className="text-xs text-gray-400 mt-1">Feature-packed underdog vs polished enterprise platform</p>
            </Link>
          </div>
        </div>

        <NewsletterCTA />
      </article>
    </>
  );
}
