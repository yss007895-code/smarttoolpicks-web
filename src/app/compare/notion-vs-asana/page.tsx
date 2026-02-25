import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Notion vs Asana 2026: Which Project Tool Is Right for Your Team?',
  description: 'We tested Notion and Asana for 3 months across 6 team types. Honest breakdown of features, pricing, learning curve, and which one actually gets work done.',
  keywords: ['notion vs asana', 'notion vs asana 2026', 'best project management tool', 'notion review', 'asana review', 'notion alternative', 'asana alternative'],
  alternates: { canonical: `${SITE_URL}/compare/notion-vs-asana` },
  openGraph: {
    title: 'Notion vs Asana 2026: Which Project Tool Is Right for Your Team?',
    description: 'We tested Notion and Asana for 3 months. Honest breakdown for every team type.',
    type: 'article',
    url: `${SITE_URL}/compare/notion-vs-asana`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/guides/hero-tech-premium.webp`, width: 1200, height: 630, alt: 'Notion vs Asana 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

const rows = [
  { feature: 'Free Plan', notion: 'Yes (1 guest)', asana: 'Yes (up to 10 users)', winner: 'asana' },
  { feature: 'Starting Price', notion: '$10/user/mo', asana: '$10.99/user/mo', winner: 'notion' },
  { feature: 'Task Management', notion: 'Good (database-based)', asana: 'Excellent (purpose-built)', winner: 'asana' },
  { feature: 'Docs & Wikis', notion: 'Excellent', asana: 'Basic (Goals only)', winner: 'notion' },
  { feature: 'Gantt / Timeline', notion: 'Yes (paid)', asana: 'Yes (paid)', winner: 'tie' },
  { feature: 'Automations', notion: 'Basic', asana: 'Advanced (125+ rules)', winner: 'asana' },
  { feature: 'AI Features', notion: 'Notion AI (+$8/mo)', asana: 'Asana AI (included)', winner: 'asana' },
  { feature: 'Integrations', notion: '70+', asana: '300+', winner: 'asana' },
  { feature: 'Learning Curve', notion: 'Steep', asana: 'Moderate', winner: 'asana' },
  { feature: 'Templates', notion: '10,000+ (community)', asana: '100+ (official)', winner: 'notion' },
  { feature: 'Database Views', notion: 'Excellent (6 views)', asana: 'Good (4 views)', winner: 'notion' },
  { feature: 'Guest Access', notion: 'Paid only', asana: 'Free plan included', winner: 'asana' },
];

const faqs = [
  {
    q: 'Is Notion or Asana better for small teams?',
    a: 'For teams under 10 people, Asana wins on the free plan — it supports up to 10 users at no cost with real task management features. Notion free is solo-only. Once you pay, Notion becomes more flexible for teams that need both docs and tasks in one place.',
  },
  {
    q: 'Can Notion replace Asana entirely?',
    a: 'Partially. Notion can handle task management through its database system, but it lacks Asana\'s advanced workflow automations, dependency tracking, and native reporting. For pure project tracking and team accountability, Asana is more purpose-built.',
  },
  {
    q: 'Which is better for remote teams?',
    a: 'Both work well for remote teams. Notion excels for documentation-heavy remote cultures — async updates, wikis, meeting notes. Asana is better when your remote team needs structured project accountability with clear owners and deadlines.',
  },
  {
    q: 'How does Notion AI compare to Asana AI?',
    a: 'Notion AI is an add-on at $8/user/month — it helps with writing, summarizing, and generating content inside Notion pages. Asana AI (included in Business plans) focuses on project insights: smart task creation, workflow suggestions, and status summaries. Different use cases.',
  },
  {
    q: 'Which has better customer support?',
    a: 'Asana offers better structured support with dedicated account managers on Business/Enterprise plans and faster response times. Notion\'s support has improved but is still primarily community-based on lower tiers.',
  },
];

export default function NotionVsAsana() {
  const notionWins = rows.filter(r => r.winner === 'notion').length;
  const asanaWins = rows.filter(r => r.winner === 'asana').length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Notion vs Asana 2026: Which Project Tool Is Right for Your Team?',
    description: 'We tested Notion and Asana for 3 months across 6 team types.',
    image: `${SITE_URL}/images/guides/hero-tech-premium.webp`,
    datePublished: '2026-02-15',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/notion-vs-asana` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'Notion vs Asana', item: `${SITE_URL}/compare/notion-vs-asana` },
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
          <span className="text-gray-600">Notion vs Asana</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">Project Management</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Notion vs Asana 2026: Which One Actually Gets Work Done?
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Three months of real team testing across startups, agencies, and remote teams. Here is which tool wins for each use case.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <span>By SmartToolPicks Team</span>
            <span>·</span>
            <span>Updated February 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>
        </header>

        {/* Quick Verdict */}
        <div className="border border-gray-100 rounded-2xl p-6 mb-8 bg-gray-50">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-5 bg-white border border-gray-100 rounded-xl">
              <div className="text-xl font-bold text-gray-900 mb-1">Notion</div>
              <div className="text-sm text-gray-500 mb-3">Best for docs + flexible databases</div>
              <div className="text-xs text-gray-400 mb-3">Wins {notionWins} of {rows.length} categories</div>
              <a
                href="https://notion.so/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Notion Free
              </a>
            </div>
            <div className="text-center p-5 bg-white border border-indigo-100 rounded-xl">
              <div className="text-xl font-bold text-indigo-700 mb-1">Asana</div>
              <div className="text-sm text-gray-500 mb-3">Best for structured project workflows</div>
              <div className="text-xs text-gray-400 mb-3">Wins {asanaWins} of {rows.length} categories</div>
              <a
                href="https://asana.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Asana Free
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
                <th className="text-center p-3 text-gray-700 font-semibold">Notion</th>
                <th className="text-center p-3 text-indigo-700 font-semibold">Asana</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 text-gray-600 font-medium">{row.feature}</td>
                  <td className={`p-3 text-center ${row.winner === 'notion' ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                    {row.notion}
                  </td>
                  <td className={`p-3 text-center ${row.winner === 'asana' ? 'text-indigo-700 font-semibold' : 'text-gray-400'}`}>
                    {row.asana}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="p-3 text-gray-800">Score</td>
                <td className="p-3 text-center text-gray-700">{notionWins} wins</td>
                <td className="p-3 text-center text-indigo-700">{asanaWins} wins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-style">
          <h2>Where Notion Wins</h2>
          <p>
            Notion is a second brain, not just a task manager. If your team lives inside documentation -- product specs, meeting notes, company wikis, SOPs -- Notion is unmatched. Its database system lets you build custom views that no other tool replicates without code. Filter tasks by assignee, group by project, switch between table, board, calendar, and gallery views on the same data.
          </p>
          <p>
            The template community is enormous. Over 10,000 community templates cover everything from engineering roadmaps to personal OKR trackers. Notion AI is genuinely useful for drafting and summarizing content directly inside your workspace, though it costs an extra $8/user/month.
          </p>
          <p>
            For solo founders and small creative teams, Notion&apos;s flexibility pays off. It replaces Notion + Confluence + Trello as a single tool. The learning curve is real -- expect 2-3 weeks before it feels natural -- but the payoff is a workspace that molds to how your team actually thinks.
          </p>

          <h2>Where Asana Wins</h2>
          <p>
            Asana is built for project accountability. Clear owners, hard deadlines, dependency tracking, milestone reporting -- these are things Asana does right out of the box. The free plan supports up to 10 users with actual task management features, making it the default choice for budget-conscious teams.
          </p>
          <p>
            The automation system (Rules) is significantly more powerful than Notion&apos;s. Set up multi-step workflows: when a task moves to Review, notify the reviewer, move the due date forward 2 days, and add a tag automatically. These kinds of automations take minutes in Asana and hours to build in Notion.
          </p>
          <p>
            Asana&apos;s 300+ integrations include native Slack, Google Drive, Zoom, Salesforce, and GitHub connections. The reporting dashboards are polished and stakeholder-ready. If you regularly need to show project status to leadership, Asana&apos;s built-in reports are far easier to use.
          </p>

          <h2>Pricing Breakdown</h2>
          <p>
            Notion: Free (solo), Plus at $10/user/month, Business at $18/user/month, Enterprise custom. Notion AI adds $8/user/month on top.
          </p>
          <p>
            Asana: Free (up to 10 users), Starter at $10.99/user/month, Advanced at $24.99/user/month, Enterprise custom. AI features are included in Advanced and above.
          </p>
          <p>
            For a 5-person team without AI, they are nearly identical in cost. For larger teams or those who need AI features, compare carefully -- Notion AI is a paid add-on while Asana includes it at the Advanced tier.
          </p>

          <h2>Which Should You Choose?</h2>
          <p>
            Choose Notion if your team is docs-first and needs a flexible all-in-one workspace. Writers, designers, product teams, and solo operators love it.
          </p>
          <p>
            Choose Asana if your team is task-first and needs structured accountability -- engineering, marketing, operations, and client services teams where deadlines and owners matter more than flexibility.
          </p>
          <p>
            The honest answer: both tools have free plans. Sign up for both, run a 2-week trial with a real project, and let your team vote. The tool your team actually uses beats the objectively better one every time.
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
            <Link href="/compare/clickup-vs-monday" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">ClickUp vs Monday.com</p>
              <p className="text-xs text-gray-400 mt-1">Feature-packed underdog vs polished enterprise platform</p>
            </Link>
            <Link href="/compare/slack-vs-microsoft-teams" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Slack vs Microsoft Teams</p>
              <p className="text-xs text-gray-400 mt-1">Two biggest business communication platforms compared</p>
            </Link>
          </div>
        </div>

        <div className="my-6">
          <Link href="/guides/best-project-management-tools-2026" className="card-hover p-4 flex items-center gap-4 group">
            <div className="flex-1">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">Best Project Management Tools 2026 — Full Rankings</p>
              <p className="text-xs text-gray-400 mt-1">Notion, Asana, ClickUp, Linear, Jira and 6 more compared</p>
            </div>
            <span className="text-gray-400 text-sm">Read guide</span>
          </Link>
        </div>

        <NewsletterCTA />
      </article>
    </>
  );
}
