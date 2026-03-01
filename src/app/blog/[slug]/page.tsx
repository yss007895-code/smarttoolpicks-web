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
    excerpt: 'AI-native tools are disrupting every software category. We break down which traditional SaaS products are most at risk.',
    date: '2026-02-18',
    cat: 'AI',
    image: '/images/guides/blog-ai-tools.webp',
    content: [
      { heading: 'The AI Disruption Wave', paragraphs: [
        'In 2026, AI-native tools are no longer experimental -- they are replacing entire software categories. From AI writing assistants that challenge traditional CMS platforms to AI-powered analytics that make legacy BI tools feel outdated.',
        'The biggest shifts are happening in customer support (AI chatbots replacing Zendesk-style tools), content creation (AI writers challenging traditional CMS), and data analysis (AI analytics replacing manual BI workflows).',
      ] },
      { heading: 'Which Categories Are Most at Risk?', paragraphs: [
        'Customer support, basic design work, data entry, and simple analytics are the most disrupted categories. Tools like Intercom with AI, Jasper, and automated reporting are making dedicated tools in these areas less necessary.',
        'However, complex project management, enterprise CRM, and specialized industry tools remain relatively safe. AI enhances them but cannot replace the workflow complexity they handle.',
      ] },
      { heading: 'How Traditional SaaS Is Adapting', paragraphs: [
        'Smart SaaS companies are embedding AI into their existing products rather than fighting it. Notion AI, ClickUp Brain, and Salesforce Einstein are examples of traditional tools that added AI features to stay competitive.',
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
    excerpt: 'From AI-assisted task management to async-first workflows, here are the PM trends reshaping how teams work.',
    date: '2026-02-17',
    cat: 'Trends',
    image: '/images/guides/blog-pm-trends.webp',
    content: [
      { heading: 'AI-Assisted Task Management', paragraphs: [
        'The biggest trend in project management is AI that actually helps -- not just chatbots bolted onto existing tools. ClickUp Brain, Linear\'s AI features, and Notion AI are leading the way with smart task creation, automatic status updates, and predictive timelines.',
        'These features save teams 2-3 hours per week on average by automating the busywork of project management: status updates, meeting summaries, and task prioritization.',
      ] },
      { heading: 'Async-First Is the New Default', paragraphs: [
        'Remote and hybrid teams have pushed async communication to the forefront. Tools like Loom, Notion, and Linear are designed for teams that do not work at the same time.',
        'The best PM tools in 2026 have built-in async features: recorded updates, threaded discussions, and clear documentation workflows.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Project Management Tools 2026', slug: 'best-project-management-tools-2026' },
      { title: 'Top CRM Software Compared', slug: 'top-crm-software-compared' },
    ],
  },
  'saas-pricing-mistakes': {
    slug: 'saas-pricing-mistakes',
    title: '7 SaaS Pricing Mistakes That Are Costing Your Business Money',
    excerpt: 'Most teams overpay for software they barely use. Here are the pricing traps to avoid.',
    date: '2026-02-16',
    cat: 'Guide',
    image: '/images/guides/blog-pricing.webp',
    content: [
      { heading: 'Mistake 1: Paying for Seats You Don\'t Use', paragraphs: [
        'The most common SaaS pricing mistake is paying for user seats that sit unused. Audit your tools quarterly -- most teams have 20-30% unused licenses across their software stack.',
        'Tools like Notion, Slack, and Salesforce charge per seat. Even 5 unused seats at $20/month each adds up to $1,200/year wasted.',
      ] },
      { heading: 'Mistake 2: Not Negotiating Annual Plans', paragraphs: [
        'Most SaaS companies offer 15-30% discounts for annual billing, but many teams stick with monthly plans. If you have been using a tool for 6+ months, switching to annual saves significant money.',
        'Pro tip: contact sales directly for enterprise pricing even if you are a small team. Many companies will offer custom pricing for annual commitments.',
      ] },
      { heading: 'Mistakes 3-7: Overlap, Features, and Timing', paragraphs: [
        'Redundant tools (using both Asana AND Monday), paying for premium features you never use, and not reviewing subscriptions regularly are the other big money drains.',
        'Set a quarterly reminder to audit your SaaS stack. Cancel what you do not use, downgrade plans where possible, and consolidate overlapping tools.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Project Management Tools', slug: 'best-project-management-tools-2026' },
      { title: 'No-Code AI Tools Guide', slug: 'rise-of-no-code-ai-tools-build-automate' },
    ],
  },
  'notion-vs-clickup': {
    slug: 'notion-vs-clickup',
    title: 'Notion vs ClickUp: We Compared 9 Categories',
    excerpt: 'Two of the most popular workspace tools go head to head. We tested both across project management, docs, databases, and more to find the real winner.',
    date: '2026-02-15',
    cat: 'Comparison',
    image: '/images/guides/blog-notion-clickup.webp',
    content: [
      { heading: 'Project Management and Task Tracking', paragraphs: [
        'ClickUp wins this one, and it is not particularly close. Native time tracking, multiple view types (Gantt, board, list, timeline), custom statuses, and sprint management are all built in. Notion can handle basic Kanban boards and tables, but anything beyond that requires workarounds or third-party integrations.',
        'That said, Notion\'s simplicity is an advantage for small teams that just need a shared task board without the overhead. If your project management needs are straightforward -- a board with statuses and assignees -- Notion does the job at $10/user/month vs ClickUp\'s $7/user/month on the Unlimited plan.',
      ] },
      { heading: 'Documentation and Knowledge Bases', paragraphs: [
        'Notion dominates here. Its block-based editor is the best in class for creating wikis, documentation hubs, and internal knowledge bases. Nested pages, toggle blocks, synced databases, and a clean reading experience make it hard to beat for written content.',
        'ClickUp Docs has improved significantly over the past year, adding nested pages, rich embeds, and a better editor. Still, it feels like a secondary feature rather than a core strength. Teams that rely heavily on documentation will find Notion more natural to work with.',
      ] },
      { heading: 'Pricing and Value Breakdown', paragraphs: [
        'Notion starts free for individuals and runs $10/user/month for teams. ClickUp also offers a free tier, with paid plans starting at $7/user/month. Both offer discounts on annual billing -- roughly 20% off for Notion and 15% for ClickUp.',
        'Here is the thing: ClickUp packs more features per dollar if you need project management. Notion gives you more flexibility if your team runs on docs and databases. For a 10-person team, you are looking at $100/month for Notion vs $70/month for ClickUp on paid plans. Pick based on what your team actually does daily, not feature counts.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Project Management Tools 2026', slug: 'best-project-management-tools-2026' },
    ],
  },
  'best-free-tools-startups': {
    slug: 'best-free-tools-startups',
    title: '25 Free SaaS Tools Every Startup Should Be Using in 2026',
    excerpt: 'Bootstrap your startup without burning cash. These free tools cover everything from project management to design, CRM, and analytics.',
    date: '2026-02-14',
    cat: 'Review',
    image: '/images/guides/blog-free-tools.webp',
    content: [
      { heading: 'Project Management and Communication (Free Picks)', paragraphs: [
        'ClickUp\'s free plan is absurdly generous -- unlimited tasks, members, and 100MB of storage. It covers boards, docs, and even basic time tracking. For communication, Slack\'s free tier gives you 90 days of message history and 1:1 video calls, which is enough for a team under 10.',
        'Notion Personal is free forever with unlimited blocks. Linear offers a free plan for up to 250 issues. And if you want something dead simple, Trello\'s free tier supports 10 boards per workspace. Most early-stage startups can run their entire project workflow on these tools for $0/month.',
      ] },
      { heading: 'Design, Marketing, and Analytics', paragraphs: [
        'Canva Free gives you access to 250,000+ templates and basic design tools -- more than enough for social media graphics and pitch decks. Figma\'s free plan supports 3 projects with real-time collaboration, which covers most MVP design work.',
        'For analytics, Google Analytics 4 and Plausible\'s community edition are both free. Mailchimp\'s free tier handles up to 500 contacts with basic email automation. Buffer\'s free plan lets you schedule posts to 3 social channels. These tools alone can power your entire marketing stack until you hit serious scale.',
      ] },
      { heading: 'CRM and Customer Support on a Budget', paragraphs: [
        'HubSpot CRM is free for up to 1,000,000 contacts with basic deal tracking and email templates. Honestly, it is one of the best free products in all of SaaS. The paid tiers get expensive fast ($50/month for Starter), but the free version handles early-stage sales well.',
        'For support, Crisp offers a free plan with 2 seats and live chat. Tawk.to is completely free with unlimited agents. Neither matches Zendesk in features, but for a startup handling 20-50 support conversations a week, they do the job without touching your runway.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best CRM Software for Small Business', slug: 'best-crm-software-small-business-2026' },
      { title: 'Best Project Management Tools 2026', slug: 'best-project-management-tools-2026' },
    ],
  },
  'crm-buying-guide': {
    slug: 'crm-buying-guide',
    title: 'The Complete CRM Buying Guide: How to Pick the Right One',
    excerpt: 'Choosing a CRM is one of the hardest software decisions a growing team makes. This guide walks you through what actually matters.',
    date: '2026-02-12',
    cat: 'Guide',
    image: '/images/guides/blog-crm-guide.webp',
    content: [
      { heading: 'Define Your Pipeline Before You Shop', paragraphs: [
        'Most teams make the same mistake: they sign up for a CRM before mapping out their actual sales process. Write down every stage a deal moves through -- from first contact to closed/won. Count how many deals your team handles per month. Figure out who needs access and what they need to see.',
        'A 5-person sales team closing 30 deals a month has very different needs than a solo founder tracking 200 inbound leads. The first team probably needs Salesforce or HubSpot Sales Hub ($50-$100/user/month). The founder might be fine with Pipedrive at $14/user/month or even a Notion database.',
      ] },
      { heading: 'Features That Actually Move the Needle', paragraphs: [
        'Email integration, pipeline visualization, and reporting are table stakes. What separates good CRMs from great ones: workflow automation (auto-assign leads, trigger follow-up emails), custom fields that match your data model, and an API that connects to your existing tools.',
        'Skip the feature comparison spreadsheet with 50 rows. Focus on three things: does it fit how your team already sells, does it integrate with your email and calendar, and can you pull the reports your manager actually asks for? Everything else is noise.',
      ] },
      { heading: 'Pricing Traps and Hidden Costs', paragraphs: [
        'CRM pricing is notoriously confusing. Salesforce starts at $25/user/month but most teams end up on the $80/user/month Enterprise plan. HubSpot is free to start but jumps to $50/month for basic automation. Pipedrive is the most transparent at $14-$99/user/month with clear tier differences.',
        'Watch out for per-contact pricing, API call limits, and add-on costs for features like phone dialing or advanced reporting. A CRM that costs $25/user/month can easily become $60/user/month once you add the features you actually need. Always request a full quote before committing to annual billing.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best CRM Software for Small Business', slug: 'best-crm-software-small-business-2026' },
    ],
  },
  'no-code-automation': {
    slug: 'no-code-automation',
    title: 'No-Code Automation: Build Workflows Without Writing a Line',
    excerpt: 'You do not need a developer to automate your business processes anymore. Here is how to get started with no-code workflow tools.',
    date: '2026-02-10',
    cat: 'Tutorial',
    image: '/images/guides/blog-no-code.webp',
    content: [
      { heading: 'Where to Start: Your First Automation', paragraphs: [
        'Pick the most repetitive task your team does every week. Usually it is something like: new form submission comes in, someone copies data to a spreadsheet, sends a Slack notification, and creates a task in your PM tool. That entire chain can be automated in Zapier or Make in about 15 minutes.',
        'Zapier charges $19.99/month for 750 tasks on the Starter plan. Make (formerly Integromat) starts at $9/month for 10,000 operations. For simple two-step automations, Zapier is faster to set up. For anything with branching logic or multiple paths, Make\'s visual builder is significantly better.',
      ] },
      { heading: 'Common Automations Worth Building', paragraphs: [
        'Lead routing is the highest-ROI automation for most teams. When a lead fills out your form, automatically enrich the data with Clearbit, score it based on company size, and route it to the right sales rep in your CRM. This saves 5-10 minutes per lead and eliminates the "forgot to follow up" problem.',
        'Other high-value automations: syncing CRM deals to your invoicing tool, posting weekly metrics to Slack from your analytics platform, and auto-creating onboarding task lists when a new customer signs up. Each of these takes 30 minutes to build and saves hours every month.',
      ] },
      { heading: 'When No-Code Hits Its Limits', paragraphs: [
        'No-code tools struggle with complex data transformations, high-volume processing (10,000+ records), and deeply custom logic. If you find yourself chaining 15 steps together with multiple filters and formatters, you have probably outgrown no-code for that specific workflow.',
        'The practical approach: use no-code for 80% of your automations and bring in a developer for the remaining 20% that need custom scripts. Tools like Make and n8n support code steps within visual workflows, so you can mix approaches without rebuilding everything.',
      ] },
    ],
    relatedGuides: [
      { title: 'No-Code AI Tools Guide', slug: 'rise-of-no-code-ai-tools-build-automate' },
      { title: 'Best Project Management Tools 2026', slug: 'best-project-management-tools-2026' },
    ],
  },
  'design-tool-showdown': {
    slug: 'design-tool-showdown',
    title: 'Figma vs Canva vs Adobe Express: Which Design Tool Wins?',
    excerpt: 'Three design tools, three very different audiences. We break down which one fits your team based on skill level, budget, and use case.',
    date: '2026-02-08',
    cat: 'Comparison',
    image: '/images/guides/blog-design-showdown.webp',
    content: [
      { heading: 'Who Each Tool Is Actually For', paragraphs: [
        'Figma is for product teams and professional designers building interfaces, design systems, and prototypes. Canva is for marketers and non-designers who need social posts, presentations, and branded templates fast. Adobe Express sits in between -- more capable than Canva for layout work but far simpler than the full Creative Cloud.',
        'The pricing reflects the audience. Figma Professional runs $15/editor/month (viewers are free). Canva Pro is $13/month for one user with up to 100GB of storage. Adobe Express Premium costs $10/month and includes 25,000+ fonts plus Adobe Stock assets. All three have usable free tiers.',
      ] },
      { heading: 'Template Quality and Speed', paragraphs: [
        'Canva wins on templates by sheer volume -- over 600,000 templates across every category you can think of. Need an Instagram story for a product launch? You will find 50 options in 10 seconds. Adobe Express has fewer templates but they tend to be more polished and professional-looking.',
        'Figma does not really compete on templates in the same way. Its community files are more like design system starters and UI kits than ready-to-use marketing assets. If your primary need is quick branded content, Canva or Adobe Express will get you there 10x faster than Figma.',
      ] },
      { heading: 'Collaboration and Team Features', paragraphs: [
        'Figma\'s real-time collaboration is the gold standard. Multiple designers working on the same file, live cursors, inline comments, and branching for version control. It was built for teams from day one, and it shows.',
        'Canva Teams ($15/user/month) added brand kits, approval workflows, and shared folders that work well for marketing teams. Adobe Express team features are more limited -- basic sharing and commenting, but nothing close to Figma or even Canva for collaborative workflows. For a design-heavy team, Figma. For a marketing team that needs consistent branding, Canva Teams.',
      ] },
    ],
    relatedGuides: [
      { title: 'Best Design Tools 2026', slug: 'best-design-tools-2026' },
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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630 }],
      siteName: SITE_NAME,
    },
    alternates: { canonical: `${SITE_URL}/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) notFound();

  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-purple">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-brand-purple">Blog</Link>
        <span>/</span>
        <span className="text-brand-slate">{post.cat}</span>
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
              <p key={pIdx}>{p}</p>
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
  );
}
