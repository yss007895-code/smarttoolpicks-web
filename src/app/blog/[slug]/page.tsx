import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cat: string;
  image: string;
  content: { heading: string; paragraphs: string[] }[];
  relatedGuides: { title: string; slug: string }[];
}

const blogPosts: Record<string, BlogPost> = {
  'ai-tools-replacing-saas': {
    slug: 'ai-tools-replacing-saas',
    title: 'Are AI Tools Replacing Traditional SaaS? What We Think in 2026',
    excerpt: 'AI-native tools are disrupting every software category. We break down which traditional SaaS products are most at risk and how the industry is adapting to this shift.',
    date: '2026-02-18',
    cat: 'AI',
    image: '/images/guides/blog-ai-tools.svg',
    content: [
      { heading: 'The AI Disruption Wave', paragraphs: [
        'In 2026, AI-native tools are no longer experimental -- they are replacing entire software categories. From <a href="/guides/best-ai-writing-assistants-2026">AI writing assistants</a> that challenge traditional CMS platforms to AI-powered analytics that make legacy BI tools feel outdated.',
        'The biggest shifts are happening in customer support (AI chatbots replacing Zendesk-style tools), content creation (AI writers challenging traditional CMS), and data analysis (AI analytics replacing manual BI workflows).',
      ] },
      { heading: 'Which Categories Are Most at Risk?', paragraphs: [
        'Customer support, basic design work, data entry, and simple analytics are the most disrupted categories. Tools like Intercom with AI, Jasper, and automated reporting are making dedicated tools in these areas less necessary. See our <a href="/guides/best-ai-tools-for-small-business-2026">best AI tools guide</a> for examples.',
        'However, complex project management, enterprise CRM, and specialized industry tools remain relatively safe. AI enhances them but cannot replace the workflow complexity they handle.',
      ] },
      { heading: 'How Traditional SaaS Is Adapting', paragraphs: [
        'Smart SaaS companies are embedding AI into their existing products rather than fighting it. Notion AI, ClickUp Brain, and Salesforce Einstein are examples of traditional tools that added AI features to stay competitive. Compare these in our <a href="/guides/notion-review-2026">Notion review</a>.',
        'The winners will be tools that combine AI capabilities with deep workflow integration. Pure AI tools are powerful but often lack the structured workflows that teams need.',
      ] },
    ],
    relatedGuides: [
      { title: 'No-Code AI Tools Guide', slug: 'rise-of-no-code-ai-tools-build-automate' },
      { title: 'Best Project Management Tools', slug: 'best-project-management-tools-2026' },
    ],
  },
  'project-management-trends': {
    slug: 'project-management-trends',
    title: 'Project Management in 2026: The Tools and Trends That Actually Matter',
    excerpt: 'From AI-assisted task management to async-first workflows, here are the project management trends and software features reshaping how modern teams work in 2026.',
    date: '2026-02-17',
    cat: 'Trends',
    image: '/images/guides/blog-pm-trends.svg',
    content: [
      { heading: 'AI-Assisted Task Management', paragraphs: [
        'The biggest trend in project management is AI that actually helps -- not just chatbots bolted onto existing tools. <a href="/guides/clickup-review-2026">ClickUp Brain</a>, Linear\'s AI features, and <a href="/guides/notion-review-2026">Notion AI</a> are leading the way with smart task creation, automatic status updates, and predictive timelines.',
        'These features save teams 2-3 hours per week on average by automating the busywork of project management: status updates, meeting summaries, and task prioritization.',
      ] },
      { heading: 'Async-First Is the New Default', paragraphs: [
        'Remote and hybrid teams have pushed async communication to the forefront. Tools like Loom, Notion, and Linear are designed for teams that do not work at the same time. Check our <a href="/guides/best-remote-work-tools-2026">remote work tools guide</a> for more.',
        'The best PM tools in 2026 have built-in async features: recorded updates, threaded discussions, and clear documentation workflows.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Project Management Tools 2026', slug: 'best-project-management-tools-2026' },
      { title: 'Top CRM Software Compared', slug: 'best-crm-software-small-business-2026' },
    ],
  },
  'saas-pricing-mistakes': {
    slug: 'saas-pricing-mistakes',
    title: '7 SaaS Pricing Mistakes That Are Costing Your Business Money',
    excerpt: 'Most teams overpay for software they barely use. From unused seats to skipped annual discounts, here are the 7 most common pricing traps to avoid in 2026.',
    date: '2026-02-16',
    cat: 'Guide',
    image: '/images/guides/blog-pricing.svg',
    content: [
      { heading: 'Mistake 1: Paying for Seats You Don\'t Use', paragraphs: [
        'The most common SaaS pricing mistake is paying for user seats that sit unused. Audit your tools quarterly -- most teams have 20-30% unused licenses across their software stack. See <a href="/guides/best-free-alternatives-to-paid-software-2026">free alternatives</a> to cut costs.',
        'Tools like Notion, Slack, and Salesforce charge per seat. Even 5 unused seats at $20/month each adds up to $1,200/year wasted.',
      ] },
      { heading: 'Mistake 2: Not Negotiating Annual Plans', paragraphs: [
        'Most SaaS companies offer 15-30% discounts for annual billing, but many teams stick with monthly plans. If you have been using a tool for 6+ months, switching to annual saves significant money.',
        'Pro tip: contact sales directly for enterprise pricing even if you are a small team. Many companies will offer custom pricing for annual commitments.',
      ] },
      { heading: 'Mistakes 3-7: Overlap, Features, and Timing', paragraphs: [
        'Redundant tools (using both <a href="/compare/notion-vs-asana">Asana AND Monday</a>), paying for premium features you never use, and not reviewing subscriptions regularly are the other big money drains.',
        'Set a quarterly reminder to audit your SaaS stack. Cancel what you do not use, downgrade plans where possible, and consolidate overlapping tools. Check our <a href="/guides/best-project-management-tools-2026">PM tools ranking</a> to find consolidated options.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Project Management Tools', slug: 'best-project-management-tools-2026' },
      { title: 'No-Code AI Tools Guide', slug: 'rise-of-no-code-ai-tools-build-automate' },
    ],
  },
  'notion-vs-clickup': {
    slug: 'notion-vs-clickup',
    title: 'Notion vs ClickUp: We Compared 9 Categories So You Don\'t Have To',
    excerpt: 'Features, pricing, integrations, learning curve -- we spent weeks testing both Notion and ClickUp to help you decide which one fits your team\'s workflow best.',
    date: '2026-02-15',
    cat: 'Comparison',
    image: '/images/guides/blog-notion-clickup.svg',
    content: [
      { heading: 'Flexibility vs Structure', paragraphs: [
        'Notion is a blank canvas. You can build anything, but you have to build it. <a href="/guides/notion-review-2026">Our Notion review</a> highlights this flexibility as its greatest strength and weakness.',
        'ClickUp provides structure out of the box. It has specific views for tasks, sprints, and goals. Read our <a href="/guides/clickup-review-2026">ClickUp review</a> to see how its feature density compares.',
      ] },
      { heading: 'The Verdict', paragraphs: [
        'If you want a wiki that can do tasks, choose Notion. If you want a project management tool that can do docs, choose ClickUp.',
        'For a deeper dive, check out our full <a href="/compare/clickup-vs-monday">ClickUp vs Monday comparison</a> to see how it stacks up against other PM giants.',
      ] },
    ],
    relatedGuides: [
      { title: 'Notion Review 2026', slug: 'notion-review-2026' },
      { title: 'ClickUp Review 2026', slug: 'clickup-review-2026' },
    ],
  },
  'best-free-tools-startups': {
    slug: 'best-free-tools-startups',
    title: '25 Free SaaS Tools Every Startup Should Be Using in 2026',
    excerpt: 'From project management to design to analytics -- every tool on this list has a genuinely useful free tier that helps startups scale without a credit card.',
    date: '2026-02-14',
    cat: 'Review',
    image: '/images/guides/blog-free-tools.svg',
    content: [
      { heading: 'Project Management & Communication', paragraphs: [
        'For project management, <a href="/guides/best-free-project-management-tools-2026">Asana and Trello</a> offer robust free plans. For communication, Slack is the standard, but Discord is a great free alternative.',
        'Don\'t overlook <a href="/guides/best-free-alternatives-to-slack-2026">Slack alternatives</a> if budget is tight.',
      ] },
      { heading: 'Marketing & Design', paragraphs: [
        'Canva is essential for design. Check out <a href="/guides/best-free-design-tools-2026">free design tools</a> for more options.',
        'For email marketing, <a href="/guides/best-free-email-marketing-tools-2026">MailerLite and HubSpot</a> have excellent free tiers.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Free Project Management Tools', slug: 'best-free-project-management-tools-2026' },
      { title: 'Best Free Email Marketing Tools', slug: 'best-free-email-marketing-tools-2026' },
    ],
  },
  'crm-buying-guide': {
    slug: 'crm-buying-guide',
    title: 'The Complete CRM Buying Guide: How to Pick the Right One',
    excerpt: 'HubSpot, Salesforce, Pipedrive, or something else? We break down what actually matters when choosing a CRM for your team size, sales process, and budget.',
    date: '2026-02-12',
    cat: 'Guide',
    image: '/images/guides/blog-crm-guide.svg',
    content: [
      { heading: 'Assess Your Needs', paragraphs: [
        'Do you need marketing automation or just a sales pipeline? If you need both, <a href="/guides/hubspot-crm-review-2026">HubSpot</a> is a strong contender.',
        'If you are a small business, check our <a href="/guides/how-to-choose-crm-small-business">guide on choosing a CRM for small business</a>.',
      ] },
      { heading: 'Budget Considerations', paragraphs: [
        'CRM pricing can be deceptive. Read about <a href="/guides/best-free-crm-software-2026">free CRM options</a> before committing to a contract.',
        'Compare <a href="/compare/hubspot-vs-mailchimp">HubSpot vs Mailchimp</a> to see if a simpler tool meets your needs.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best CRM for Small Business', slug: 'best-crm-software-small-business-2026' },
      { title: 'HubSpot CRM Review', slug: 'hubspot-crm-review-2026' },
    ],
  },
  'no-code-automation': {
    slug: 'no-code-automation',
    title: 'No-Code Automation: Build Workflows Without Writing a Line of Code',
    excerpt: 'Zapier, Make, n8n -- we tested the top automation platforms and built real workflows to show you what\'s actually possible without hiring a developer in 2026.',
    date: '2026-02-10',
    cat: 'Tutorial',
    image: '/images/guides/blog-no-code.svg',
    content: [
      { heading: 'Choosing a Platform', paragraphs: [
        'Zapier is the easiest to start with, but Make offers more power for complex flows. See our detailed <a href="/compare/zapier-vs-make">Zapier vs Make comparison</a>.',
        'For a step-by-step tutorial, read <a href="/guides/how-to-automate-workflows-2026">how to automate your workflows</a>.',
      ] },
      { heading: 'What to Automate', paragraphs: [
        'Start with simple tasks like saving email attachments to Drive or posting new blogs to social media. You can also automate <a href="/guides/how-to-automate-email-marketing-2026">email marketing</a> sequences.',
        'Look for repetitive tasks in your <a href="/guides/best-project-management-tools-2026">project management tool</a> to automate next.',
      ] },
    ],
    relatedGuides: [
      { title: 'Zapier vs Make', slug: 'zapier-vs-make' },
      { title: 'How to Automate Workflows', slug: 'how-to-automate-workflows-2026' },
    ],
  },
  'design-tool-showdown': {
    slug: 'design-tool-showdown',
    title: 'Figma vs Canva vs Adobe Express: Which Design Tool Wins in 2026?',
    excerpt: 'Three very different design tools for three different use cases. We tested all three on real projects to find the best fit for your team\'s specific design needs.',
    date: '2026-02-08',
    cat: 'Comparison',
    image: '/images/guides/blog-design-showdown.svg',
    content: [
      { heading: 'For Social Media', paragraphs: [
        'Canva is the undisputed king of templates. Read our <a href="/guides/canva-pro-review-2026">Canva Pro review</a> to see if the paid features are worth it.',
        'Adobe Express is catching up with powerful AI features. See <a href="/guides/best-free-design-tools-2026">best free design tools</a> for more options.',
      ] },
      { heading: 'For UI/UX Design', paragraphs: [
        'Figma is the industry standard for interface design. Compare <a href="/compare/canva-vs-figma">Canva vs Figma</a> to understand the key differences.',
        'Don\'t use Canva for building app prototypes; stick to Figma.',
      ] },
    ],
    relatedGuides: [
      { title: 'Canva Pro Review', slug: 'canva-pro-review-2026' },
      { title: 'Canva vs Figma', slug: 'canva-vs-figma' },
    ],
  },
};

const allSlugs = Object.keys(blogPosts);

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts[params.slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: ['saas', 'software review', 'productivity tools', post.cat.toLowerCase(), 'smarttoolpicks'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630 }],
      siteName: SITE_NAME,
    },
    twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
    alternates: { canonical: `${SITE_URL}/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.cat, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-gray-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-600">{post.cat}</span>
      </nav>

      <header className="mb-8">
        <span className="badge-new mb-3 inline-block">{post.cat}</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
        <p className="text-lg text-gray-400 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
          <span>By SmartToolPicks Team</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </header>

      <div className="mb-8 rounded-2xl overflow-hidden relative h-64 sm:h-80">
        <SafeImage src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
      </div>

      <div className="prose-style">
        {post.content.map((section, idx) => (
          <div key={idx}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        ))}
      </div>

      {post.relatedGuides.length > 0 && (
        <div className="mt-10 mb-8">
          <h3 className="font-display font-bold text-gray-900 mb-4">Related Reviews</h3>
          <div className="grid gap-3">
            {post.relatedGuides.map(g => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card-hover p-4 flex items-center gap-4 group">
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">{g.title}</p>
                </div>
                <span className="text-gray-400 text-sm">View review</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <NewsletterCTA />
    </article>
    </>
  );
}
