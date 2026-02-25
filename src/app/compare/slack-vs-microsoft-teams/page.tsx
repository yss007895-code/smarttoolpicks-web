import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Slack vs Microsoft Teams 2026: The Complete Business Communication Comparison',
  description: 'Slack is faster and more flexible. Teams is deeper in the Microsoft 365 stack. We break down pricing, integrations, video, and which is right for your organization.',
  keywords: ['slack vs microsoft teams', 'slack vs teams 2026', 'best business communication tool', 'slack review', 'microsoft teams review', 'slack alternative', 'teams alternative'],
  alternates: { canonical: `${SITE_URL}/compare/slack-vs-microsoft-teams` },
  openGraph: {
    title: 'Slack vs Microsoft Teams 2026: The Complete Business Communication Comparison',
    description: 'Slack is faster, Teams is deeper. Full breakdown across pricing, video, and integrations.',
    type: 'article',
    url: `${SITE_URL}/compare/slack-vs-microsoft-teams`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/guides/hero-tech-premium.webp`, width: 1200, height: 630, alt: 'Slack vs Microsoft Teams 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

const rows = [
  { feature: 'Free Plan', slack: 'Yes (90-day history limit)', teams: 'Yes (included with MS365)', winner: 'teams' },
  { feature: 'Starting Price', slack: '$7.25/user/mo', teams: '$4/user/mo (Essentials)', winner: 'teams' },
  { feature: 'Message History', slack: '90 days free, unlimited paid', teams: 'Unlimited on all plans', winner: 'teams' },
  { feature: 'Video Calls', slack: 'Up to 50 participants', teams: 'Up to 1,000 participants', winner: 'teams' },
  { feature: 'File Storage', slack: '5GB free, 10GB/user paid', teams: '1TB OneDrive per user', winner: 'teams' },
  { feature: 'Integrations', slack: '2,600+ apps', teams: '700+ apps', winner: 'slack' },
  { feature: 'Interface Speed', slack: 'Faster, lighter', teams: 'Heavier, resource-intensive', winner: 'slack' },
  { feature: 'Search', slack: 'Excellent', teams: 'Good (improving)', winner: 'slack' },
  { feature: 'Microsoft 365 Integration', slack: 'Good (via connector)', teams: 'Native, deep', winner: 'teams' },
  { feature: 'External Guest Access', slack: 'Slack Connect (free)', teams: 'Guest access (free)', winner: 'tie' },
  { feature: 'Security / Compliance', slack: 'Enterprise Grid', teams: 'Enterprise (E3/E5)', winner: 'tie' },
  { feature: 'Mobile App', slack: 'Excellent', teams: 'Good', winner: 'slack' },
];

const faqs = [
  {
    q: 'Should I use Slack or Teams if we already pay for Microsoft 365?',
    a: 'Use Teams. It is included in your Microsoft 365 subscription at no extra cost, and the integration with SharePoint, OneDrive, and Outlook is genuinely seamless. The only reason to pay for Slack on top of M365 is if your team strongly prefers Slack\'s UX or you rely on integrations Teams does not support well.',
  },
  {
    q: 'Is Slack free forever?',
    a: 'The free plan is permanent but limits message history to 90 days. After 90 days, older messages are archived and inaccessible unless you upgrade. For teams that need long-term message archives, the Pro plan at $7.25/user/month unlocks unlimited history.',
  },
  {
    q: 'Which is better for large enterprise companies?',
    a: 'Microsoft Teams at scale. It handles 1,000-person video meetings, deep compliance controls (HIPAA, FedRAMP, eDiscovery), and is already part of the Microsoft ecosystem that most enterprises run. Slack Enterprise Grid is competitive but more expensive and requires additional Microsoft integration work.',
  },
  {
    q: 'Is Microsoft Teams really free?',
    a: 'Teams Essentials starts at $4/user/month. The "free" Teams is the personal version bundled with Microsoft 365 home/business subscriptions. If your organization pays for Microsoft 365 Business Basic or higher, Teams is already included. If you do not have M365, you would pay separately.',
  },
  {
    q: 'Which has better video calls?',
    a: 'Microsoft Teams for scale and reliability -- 1,000 participants, breakout rooms, live captions, recording to SharePoint. Slack Huddles are great for quick, informal calls (up to 50 participants) but are not designed for all-hands meetings or external client presentations.',
  },
];

export default function SlackVsMicrosoftTeams() {
  const slackWins = rows.filter(r => r.winner === 'slack').length;
  const teamsWins = rows.filter(r => r.winner === 'teams').length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Slack vs Microsoft Teams 2026: The Complete Business Communication Comparison',
    description: 'Slack is faster and more flexible. Teams is deeper in the Microsoft 365 stack.',
    image: `${SITE_URL}/images/guides/hero-tech-premium.webp`,
    datePublished: '2026-02-15',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/slack-vs-microsoft-teams` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'Slack vs Microsoft Teams', item: `${SITE_URL}/compare/slack-vs-microsoft-teams` },
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
          <span className="text-gray-600">Slack vs Microsoft Teams</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">Communication</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Slack vs Microsoft Teams 2026: Which Wins for Your Business?
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Both tools dominate business communication. The right choice depends almost entirely on your existing software stack and team size.
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
            <div className="text-center p-5 bg-white border border-indigo-100 rounded-xl">
              <div className="text-xl font-bold text-indigo-700 mb-1">Slack</div>
              <div className="text-sm text-gray-500 mb-3">Best UX, integrations, and speed</div>
              <div className="text-xs text-gray-400 mb-3">Wins {slackWins} of {rows.length} categories</div>
              <a
                href="https://slack.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Slack Free
              </a>
            </div>
            <div className="text-center p-5 bg-white border border-gray-100 rounded-xl">
              <div className="text-xl font-bold text-gray-900 mb-1">Microsoft Teams</div>
              <div className="text-sm text-gray-500 mb-3">Best for Microsoft 365 shops and large orgs</div>
              <div className="text-xs text-gray-400 mb-3">Wins {teamsWins} of {rows.length} categories</div>
              <a
                href="https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-options"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm !px-5 !py-2"
              >
                Try Teams Free
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
                <th className="text-center p-3 text-indigo-700 font-semibold">Slack</th>
                <th className="text-center p-3 text-gray-700 font-semibold">Microsoft Teams</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 text-gray-600 font-medium">{row.feature}</td>
                  <td className={`p-3 text-center ${row.winner === 'slack' ? 'text-indigo-700 font-semibold' : 'text-gray-400'}`}>
                    {row.slack}
                  </td>
                  <td className={`p-3 text-center ${row.winner === 'teams' ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                    {row.teams}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="p-3 text-gray-800">Score</td>
                <td className="p-3 text-center text-indigo-700">{slackWins} wins</td>
                <td className="p-3 text-center text-gray-700">{teamsWins} wins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-style">
          <h2>Why Slack Users Love It</h2>
          <p>
            Slack&apos;s interface is faster and lighter than Teams. The channel organization is intuitive, search is excellent, and the keyboard shortcuts are genuinely productive. Slack Huddles (voice/video drop-ins) feel natural for quick questions that would take 5 emails to resolve. The emoji reaction culture in Slack has become a real productivity tool -- a thumbs up means acknowledged, a checkmark means done.
          </p>
          <p>
            The app directory is unmatched at 2,600+ integrations. GitHub, Jira, Salesforce, Stripe, PagerDuty -- virtually every developer and marketing tool has a native Slack integration. Slack Connect lets you communicate directly with external partners and clients in shared channels, which eliminates a surprising amount of email.
          </p>
          <p>
            Where Slack struggles: the free plan&apos;s 90-day message history limit is a genuine problem for teams that rely on institutional memory. And at $7.25/user/month for unlimited history, the cost adds up fast for larger organizations that already pay for Microsoft 365.
          </p>

          <h2>Why Teams Has Quietly Won the Enterprise</h2>
          <p>
            If your organization runs on Microsoft 365, Teams is already available at no incremental cost. SharePoint files appear directly in Teams channels. Outlook calendar meetings auto-join. OneNote notebooks sync. For organizations that live in the Microsoft ecosystem, the integration depth is genuinely hard to beat.
          </p>
          <p>
            Teams handles video at a different scale than Slack -- 1,000 participants, breakout rooms, live transcription, recording directly to SharePoint. For all-hands meetings, town halls, and client webinars, Teams is built for it. Slack Huddles are great for 5-10 people; Teams is built for 50 or 500.
          </p>
          <p>
            Teams is also cheaper for organizations that need it as a standalone product. Essentials at $4/user/month includes unlimited message history and 10GB per-user storage. Microsoft 365 Business Basic at $6/user/month adds the full Office web apps. Either option undercuts Slack Pro significantly.
          </p>

          <h2>The One Question That Decides It</h2>
          <p>
            Do you use Microsoft 365? If yes, use Teams -- it is already paid for and the integration value is real. If no, use Slack -- the experience is better, the integrations are broader, and the culture around Slack in non-Microsoft companies is stronger.
          </p>
          <p>
            The decision is almost never &quot;which is objectively better.&quot; It is &quot;which fits our existing stack.&quot; Running both simultaneously, as some organizations attempt, creates communication fragmentation that costs more than any tool savings.
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
            <Link href="/compare/notion-vs-asana" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Notion vs Asana</p>
              <p className="text-xs text-gray-400 mt-1">Flexible docs workspace vs structured workflow manager</p>
            </Link>
            <Link href="/compare/clickup-vs-monday" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">ClickUp vs Monday.com</p>
              <p className="text-xs text-gray-400 mt-1">Feature-packed underdog vs polished enterprise platform</p>
            </Link>
          </div>
        </div>

        <div className="my-6">
          <Link href="/guides/best-crm-software-small-business-2026" className="card-hover p-4 flex items-center gap-4 group">
            <div className="flex-1">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">Best CRM Software for Small Business 2026 — Full Rankings</p>
              <p className="text-xs text-gray-400 mt-1">HubSpot, Salesforce, Pipedrive and more compared</p>
            </div>
            <span className="text-gray-400 text-sm">Read guide</span>
          </Link>
        </div>

        <NewsletterCTA />
      </article>
    </>
  );
}
