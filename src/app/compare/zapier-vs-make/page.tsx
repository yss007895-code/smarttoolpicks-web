import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Zapier vs Make 2026: Which Automation Tool Is Worth It?',
  description: 'We built 50+ automations in both Zapier and Make (Integromat). Honest comparison of pricing, power, ease of use, and which one actually saves time.',
  keywords: ['zapier vs make', 'zapier vs integromat', 'zapier vs make 2026', 'best automation tool', 'make integromat review', 'zapier alternative', 'workflow automation comparison'],
  alternates: { canonical: `${SITE_URL}/compare/zapier-vs-make` },
  openGraph: {
    title: 'Zapier vs Make 2026: Which Automation Tool Is Worth It?',
    description: 'We built 50+ automations in both tools. Honest breakdown for every use case.',
    type: 'article',
    url: `${SITE_URL}/compare/zapier-vs-make`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/guides/hero-tech-premium.webp`, width: 1200, height: 630, alt: 'Zapier vs Make 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

const rows = [
  { feature: 'Free Plan', zapier: 'Yes (100 tasks/mo)', make: 'Yes (1,000 ops/mo)', winner: 'make' },
  { feature: 'Starting Price', zapier: '$19.99/mo (750 tasks)', make: '$9/mo (10,000 ops)', winner: 'make' },
  { feature: 'App Integrations', zapier: '6,000+', make: '1,500+', winner: 'zapier' },
  { feature: 'Visual Builder', zapier: 'Basic (linear)', make: 'Advanced (canvas)', winner: 'make' },
  { feature: 'Error Handling', zapier: 'Basic (task history)', make: 'Advanced (retry, routes)', winner: 'make' },
  { feature: 'Multi-step Zaps', zapier: 'Yes (paid)', make: 'Yes (free)', winner: 'make' },
  { feature: 'Ease of Use', zapier: 'Very easy (guided)', make: 'Moderate (visual)', winner: 'zapier' },
  { feature: 'Data Transformers', zapier: 'Formatter (limited)', make: 'Extensive (functions, JSON)', winner: 'make' },
  { feature: 'Scheduling', zapier: 'Minute-level triggers', make: 'Minute-level triggers', winner: 'tie' },
  { feature: 'Webhooks', zapier: 'Yes (paid plan)', make: 'Yes (free plan)', winner: 'make' },
  { feature: 'API Access', zapier: 'Premium plan only', make: 'Built-in HTTP module', winner: 'make' },
  { feature: 'Support Quality', zapier: 'Email + live chat (paid)', make: 'Email + community', winner: 'zapier' },
];

const faqs = [
  {
    q: 'Is Make really cheaper than Zapier?',
    a: 'Yes, significantly. Make counts "operations" (individual steps), while Zapier counts "tasks" (each action in a Zap). A 5-step automation in Zapier uses 5 tasks; in Make it uses 5 operations. At the $9/month Make plan you get 10,000 ops — enough for most small businesses. Zapier\'s equivalent task volume costs $49/month.',
  },
  {
    q: 'Which is better for beginners?',
    a: 'Zapier wins for beginners. The setup wizard walks you through trigger → action in minutes. Make\'s canvas builder is powerful but has a steeper learning curve — expect 2-4 hours before it clicks. If you need something working today with zero frustration, start with Zapier.',
  },
  {
    q: 'Can Make replace Zapier entirely?',
    a: 'For most use cases, yes. Make handles everything Zapier does and adds more advanced routing, data transformation, and error handling. The only real gap is app coverage: Zapier\'s 6,000+ integrations include many niche tools Make doesn\'t support yet. Check whether your specific apps are on Make before switching.',
  },
  {
    q: 'Which is better for complex workflows?',
    a: 'Make is substantially better for complex automations. The visual canvas lets you build branching logic, parallel routes, and iterators that are impossible or very clunky in Zapier\'s linear format. For multi-condition workflows, data aggregation, or API-heavy processes, Make is the right tool.',
  },
  {
    q: 'Does Zapier or Make work better with AI tools?',
    a: 'Both have solid AI integrations. Zapier has native OpenAI, Anthropic, and Google AI actions. Make has similar modules plus better HTTP/webhook support for custom AI API calls. For off-the-shelf AI actions, Zapier is easier. For custom AI pipelines, Make gives you more control.',
  },
];

export default function ZapierVsMake() {
  const zapierWins = rows.filter(r => r.winner === 'zapier').length;
  const makeWins = rows.filter(r => r.winner === 'make').length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Zapier vs Make 2026: Which Automation Tool Is Worth It?',
    description: 'We built 50+ automations in both Zapier and Make to find out which one saves more time and money.',
    image: `${SITE_URL}/images/guides/hero-tech-premium.webp`,
    datePublished: '2026-02-15',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/zapier-vs-make` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'Zapier vs Make', item: `${SITE_URL}/compare/zapier-vs-make` },
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
          <span className="text-gray-600">Zapier vs Make</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">Automation</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Zapier vs Make 2026: The Automation Showdown
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            We built the same 50 workflows in both tools. Here is where each one wins, where it fails, and which one belongs in your stack.
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
            <div className="text-center p-5 bg-white border border-gray-100 rounded-xl">
              <div className="text-xl font-bold text-gray-900 mb-1">Zapier</div>
              <div className="text-sm text-gray-500 mb-3">Best for beginners and app coverage</div>
              <div className="text-xs text-gray-400 mb-3">Wins {zapierWins} of {rows.length} categories</div>
              <a
                href="https://zapier.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Zapier Free
              </a>
            </div>
            <div className="text-center p-5 bg-white border border-indigo-100 rounded-xl">
              <div className="text-xl font-bold text-indigo-700 mb-1">Make</div>
              <div className="text-sm text-gray-500 mb-3">Best value for power users</div>
              <div className="text-xs text-gray-400 mb-3">Wins {makeWins} of {rows.length} categories</div>
              <a
                href="https://www.make.com/en/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Make Free
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
                <th className="text-center p-3 text-gray-700 font-semibold">Zapier</th>
                <th className="text-center p-3 text-indigo-700 font-semibold">Make</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 text-gray-600 font-medium">{row.feature}</td>
                  <td className={`p-3 text-center ${row.winner === 'zapier' ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                    {row.zapier}
                  </td>
                  <td className={`p-3 text-center ${row.winner === 'make' ? 'text-indigo-700 font-semibold' : 'text-gray-400'}`}>
                    {row.make}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="p-3 text-gray-800">Score</td>
                <td className="p-3 text-center text-gray-700">{zapierWins} wins</td>
                <td className="p-3 text-center text-indigo-700">{makeWins} wins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-style">
          <h2>Where Zapier Wins</h2>
          <p>
            Six thousand integrations is not a small number. Zapier connects with tools that Make has never heard of -- obscure CRMs, niche marketing platforms, industry-specific software. If your stack includes anything less than mainstream, Zapier probably supports it. Make&apos;s 1,500 integrations cover the popular ones, but the long tail matters.
          </p>
          <p>
            The setup experience is also genuinely better. Zapier walks you through trigger selection, tests the connection in real time, and flags errors before you publish. First automation working in under 10 minutes is realistic. For teams without dedicated ops staff, that speed matters a lot.
          </p>
          <p>
            Customer support is stronger on paid plans. If something breaks at 2am before a product launch, Zapier&apos;s live chat gives you a real human. Make&apos;s support is primarily async email and community forums -- slower when speed counts.
          </p>

          <h2>Where Make Wins</h2>
          <p>
            Make&apos;s canvas builder looks like a flowchart, and that is exactly what complex automations need. Multiple branches, conditional paths, iterators, aggregators -- all visible on one screen. In Zapier, the same logic requires separate Zaps stitched together with workarounds. Make just handles it natively.
          </p>
          <p>
            The pricing gap is real. A team running 20,000 task operations per month pays roughly $49/month on Zapier or $16/month on Make. Over a year that is $396 saved -- more than enough to justify the learning curve. Make&apos;s free plan also includes multi-step scenarios and webhooks, features Zapier gates behind paid tiers.
          </p>
          <p>
            Data transformation is where Make genuinely excels. The built-in functions handle JSON parsing, array manipulation, date math, and string formatting that Zapier requires workarounds or code steps for. When your automation needs to reshape data between apps, Make is the right tool.
          </p>

          <h2>Pricing Breakdown</h2>
          <p>
            Zapier: Free (100 tasks/month), Starter at $19.99/month (750 tasks), Professional at $49/month (2,000 tasks). Pricing jumps steeply at higher volumes.
          </p>
          <p>
            Make: Free (1,000 operations/month), Core at $9/month (10,000 ops), Pro at $16/month (10,000 ops with advanced features), Teams at $29/month. Operations-based billing is more predictable.
          </p>
          <p>
            The practical difference: a 5-step automation in Zapier consumes 5 tasks per run. In Make, it consumes 5 operations. Same count, but Make&apos;s per-operation cost is far lower at every tier.
          </p>

          <h2>Which Should You Choose?</h2>
          <p>
            Choose Zapier if you are new to automation, need a specific niche integration, or your team is non-technical and needs minimal setup friction.
          </p>
          <p>
            Choose Make if you run complex multi-step workflows, want to save money at scale, need advanced data transformation, or you are comfortable with a one-time learning investment.
          </p>
          <p>
            The honest middle ground: start with Zapier&apos;s free plan, see if it covers your needs, and switch to Make if you hit the pricing wall or need more power. Make&apos;s free tier is generous enough to test your key workflows before committing.
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
            <Link href="/compare/canva-vs-figma" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Canva vs Figma</p>
              <p className="text-xs text-gray-400 mt-1">Easy templates vs professional design collaboration</p>
            </Link>
            <Link href="/compare/hubspot-vs-mailchimp" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">HubSpot vs Mailchimp</p>
              <p className="text-xs text-gray-400 mt-1">Full CRM platform vs focused email marketing</p>
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
