import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Canva vs Figma 2026: Which Design Tool Fits Your Needs?',
  description: 'Canva is fast and template-driven. Figma is professional and collaborative. We break down which design tool saves time and which one produces better results.',
  keywords: ['canva vs figma', 'canva vs figma 2026', 'best design tool', 'canva review', 'figma review', 'canva alternative', 'figma alternative', 'graphic design software comparison'],
  alternates: { canonical: `${SITE_URL}/compare/canva-vs-figma` },
  openGraph: {
    title: 'Canva vs Figma 2026: Which Design Tool Fits Your Needs?',
    description: 'Templates and simplicity vs professional design power. We tested both for 3 months.',
    type: 'article',
    url: `${SITE_URL}/compare/canva-vs-figma`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/guides/hero-tech-premium.webp`, width: 1200, height: 630, alt: 'Canva vs Figma 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

const rows = [
  { feature: 'Free Plan', canva: 'Yes (generous)', figma: 'Yes (3 projects)', winner: 'canva' },
  { feature: 'Starting Price', canva: '$15/user/mo', figma: '$15/user/mo (editor)', winner: 'tie' },
  { feature: 'Templates', canva: '1M+ (all niches)', figma: 'Community files (varied)', winner: 'canva' },
  { feature: 'Real-time Collaboration', canva: 'Yes (paid)', figma: 'Yes (free)', winner: 'figma' },
  { feature: 'Prototyping', canva: 'Basic', figma: 'Advanced (interactive)', winner: 'figma' },
  { feature: 'Dev Handoff', canva: 'No', figma: 'Yes (inspect mode)', winner: 'figma' },
  { feature: 'Learning Curve', canva: 'Minimal', figma: 'Moderate', winner: 'canva' },
  { feature: 'Brand Kit', canva: 'Yes (paid)', figma: 'Via styles (manual)', winner: 'canva' },
  { feature: 'Vector Editing', canva: 'Basic', figma: 'Full pen tool', winner: 'figma' },
  { feature: 'Plugins/Integrations', canva: '1,000+ apps', figma: '1,000+ plugins', winner: 'tie' },
  { feature: 'AI Features', canva: 'Magic Design, AI image gen', figma: 'First Draft, AI layouts', winner: 'canva' },
  { feature: 'Export Options', canva: 'PDF, PNG, MP4, GIF', figma: 'SVG, PNG, PDF (limited video)', winner: 'canva' },
];

const faqs = [
  {
    q: 'Should designers use Canva or Figma?',
    a: 'Professional UI/UX designers should use Figma. It has proper vector tools, auto-layout, component systems, and developer handoff that serious design work requires. Canva is for non-designers who need polished output fast -- social media graphics, presentations, marketing materials -- without a design background.',
  },
  {
    q: 'Can Canva replace Figma for UI design?',
    a: 'No. Canva lacks the prototyping depth, component libraries, and dev-ready export that UI design requires. You cannot hand off a Canva file to a developer and expect it to work. Figma was built for product design; Canva was built for content creation. They serve different audiences.',
  },
  {
    q: 'Is Figma free to use?',
    a: 'Figma has a free plan that allows 3 active design files and unlimited personal files. For teams, the Figma Professional plan starts at $15/editor/month (viewers are free). Canva\'s free plan is more generous for basic design work, but Figma\'s free tier is perfectly usable for freelancers and small projects.',
  },
  {
    q: 'Which is better for social media content?',
    a: 'Canva, by a wide margin. The template library covers every social platform (Instagram, LinkedIn, Pinterest, TikTok) with correctly sized templates updated for algorithm changes. One-click resizing, built-in stock photos, and direct scheduling integrations make Canva the clear choice for social media teams.',
  },
  {
    q: 'Does the Adobe acquisition of Figma affect anything?',
    a: 'The Adobe/Figma acquisition was blocked by regulators in late 2023 and called off. Figma remains independent. This is good news for users who were concerned about pricing or platform changes under Adobe ownership. Figma continues to operate and develop independently.',
  },
];

export default function CanvaVsFigma() {
  const canvaWins = rows.filter(r => r.winner === 'canva').length;
  const figmaWins = rows.filter(r => r.winner === 'figma').length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Canva vs Figma 2026: Which Design Tool Fits Your Needs?',
    description: 'Canva for content creators, Figma for product designers. We break down the real differences.',
    image: `${SITE_URL}/images/guides/hero-tech-premium.webp`,
    datePublished: '2026-02-15',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/canva-vs-figma` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'Canva vs Figma', item: `${SITE_URL}/compare/canva-vs-figma` },
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
          <span className="text-gray-600">Canva vs Figma</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">Design Tools</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Canva vs Figma 2026: Different Tools, Different Users
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Three months of real design work across social content, app mockups, and marketing materials. The answer is less about which is better and more about what you are actually making.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <span>By SmartToolPicks Team</span>
            <span>·</span>
            <span>Updated February 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Quick Verdict */}
        <div className="border border-gray-100 rounded-2xl p-6 mb-8 bg-gray-50">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-5 bg-white border border-gray-100 rounded-xl">
              <div className="text-xl font-bold text-gray-900 mb-1">Canva</div>
              <div className="text-sm text-gray-500 mb-3">Best for content creators and non-designers</div>
              <div className="text-xs text-gray-400 mb-3">Wins {canvaWins} of {rows.length} categories</div>
              <a
                href="https://www.canva.com/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Canva Free
              </a>
            </div>
            <div className="text-center p-5 bg-white border border-indigo-100 rounded-xl">
              <div className="text-xl font-bold text-indigo-700 mb-1">Figma</div>
              <div className="text-sm text-gray-500 mb-3">Best for UI/UX designers and product teams</div>
              <div className="text-xs text-gray-400 mb-3">Wins {figmaWins} of {rows.length} categories</div>
              <a
                href="https://www.figma.com/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Figma Free
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
                <th className="text-center p-3 text-gray-700 font-semibold">Canva</th>
                <th className="text-center p-3 text-indigo-700 font-semibold">Figma</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 text-gray-600 font-medium">{row.feature}</td>
                  <td className={`p-3 text-center ${row.winner === 'canva' ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                    {row.canva}
                  </td>
                  <td className={`p-3 text-center ${row.winner === 'figma' ? 'text-indigo-700 font-semibold' : 'text-gray-400'}`}>
                    {row.figma}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="p-3 text-gray-800">Score</td>
                <td className="p-3 text-center text-gray-700">{canvaWins} wins</td>
                <td className="p-3 text-center text-indigo-700">{figmaWins} wins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-style">
          <h2>Where Canva Wins</h2>
          <p>
            Speed. For anyone who is not a professional designer, Canva is dramatically faster. Pick a template, swap in your content, export, done. The template library is massive -- over a million designs across social posts, presentations, videos, logos, and print materials. Most look professional without any design skill required.
          </p>
          <p>
            The AI tools in Canva are genuinely useful for content creators. Magic Design generates on-brand graphics from a text prompt. Background remover works in one click. The AI image generator is built in. For marketing teams producing high volumes of content, these features save hours per week.
          </p>
          <p>
            Canva&apos;s brand kit lets you lock in fonts, colors, and logos so everyone on the team creates consistent assets automatically. The scheduling integration lets you design and publish social content in the same tool. For content-heavy teams, Canva is practically a one-stop shop.
          </p>

          <h2>Where Figma Wins</h2>
          <p>
            Figma is a real design tool. Auto-layout creates components that resize correctly across screen sizes. The component system lets you build design systems with variables, styles, and documentation. These are not features Canva tries to compete with -- they are fundamentally different capabilities.
          </p>
          <p>
            Real-time collaboration in Figma is excellent, even on the free plan. Multiple designers can work on the same file simultaneously, see each other&apos;s cursors, and leave comments inline. Product teams running design reviews or stakeholder walkthroughs will find Figma&apos;s collaboration features genuinely superior.
          </p>
          <p>
            Developer handoff is Figma&apos;s killer feature for product teams. Inspect mode lets engineers see exact spacing, font sizes, hex colors, and export assets directly from the design file. This eliminates the back-and-forth that slows down every product cycle. Canva has no equivalent.
          </p>

          <h2>Pricing Breakdown</h2>
          <p>
            Canva: Free (limited templates), Pro at $15/user/month (all templates, brand kit, premium content), Teams at $10/user/month for 5+ users.
          </p>
          <p>
            Figma: Free (3 active files, unlimited personal), Professional at $15/editor/month (unlimited files, advanced prototyping), Organization at $45/editor/month. Viewers and commenters are always free.
          </p>
          <p>
            At the same price per user, both tools deliver their respective strengths. For most non-designer teams, Canva Pro is the better value. For product and design teams, Figma Professional is worth every dollar.
          </p>

          <h2>Which Should You Choose?</h2>
          <p>
            If your team creates social media graphics, presentations, ads, or marketing materials -- Canva is faster and more accessible. Most marketing teams, content creators, and small businesses belong here.
          </p>
          <p>
            If your team designs products, apps, or websites -- Figma is the industry standard. It integrates with developer workflows, supports proper design systems, and produces files that engineers can actually use.
          </p>
          <p>
            Many companies use both: Figma for the product team, Canva for marketing. That is a reasonable split if your budget allows.
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
            <Link href="/compare/hubspot-vs-mailchimp" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">HubSpot vs Mailchimp</p>
              <p className="text-xs text-gray-400 mt-1">Full CRM platform vs focused email marketing</p>
            </Link>
            <Link href="/compare/notion-vs-asana" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Notion vs Asana</p>
              <p className="text-xs text-gray-400 mt-1">Flexible workspace vs structured project management</p>
            </Link>
            <Link href="/compare/slack-vs-microsoft-teams" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Slack vs Microsoft Teams</p>
              <p className="text-xs text-gray-400 mt-1">Two biggest business communication platforms compared</p>
            </Link>
          </div>
        </div>

        <NewsletterCTA />
      </article>
    </>
  );
}
