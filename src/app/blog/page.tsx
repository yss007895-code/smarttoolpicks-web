import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — SaaS News, Software Tips & Tool Updates',
  description: 'The latest SaaS news, software tips, and tool updates. Stay informed with product launches, pricing changes, and expert software advice.',
  keywords: ['saas blog', 'software news', 'tool updates 2026', 'saas tips', 'productivity news'],
};

const posts = [
  {
    slug: 'ai-tools-replacing-saas',
    title: 'Are AI Tools Replacing Traditional SaaS? What We Think in 2026',
    excerpt: 'AI-native tools are disrupting every software category. We break down which traditional SaaS products are most at risk and which ones are adapting.',
    date: 'Feb 18, 2026',
    time: '8 min',
    cat: 'AI',
    image: '/images/guides/blog-ai-tools.webp',
    link: '/blog/ai-tools-replacing-saas',
  },
  {
    slug: 'project-management-trends',
    title: 'Project Management in 2026: The Tools and Trends That Actually Matter',
    excerpt: 'From AI-assisted task management to async-first workflows, here are the PM trends and tools reshaping how teams work this year.',
    date: 'Feb 17, 2026',
    time: '6 min',
    cat: 'Trends',
    image: '/images/guides/blog-pm-trends.webp',
    link: '/blog/project-management-trends',
  },
  {
    slug: 'saas-pricing-mistakes',
    title: '7 SaaS Pricing Mistakes That Are Costing Your Business Money',
    excerpt: 'Most teams overpay for software they barely use. From unused seats to redundant tools, here are the pricing traps to avoid.',
    date: 'Feb 16, 2026',
    time: '7 min',
    cat: 'Guide',
    image: '/images/guides/blog-pricing.webp',
    link: '/blog/saas-pricing-mistakes',
  },
  {
    slug: 'notion-vs-clickup',
    title: 'Notion vs ClickUp: We Compared 9 Categories So You Don\'t Have To',
    excerpt: 'Features, pricing, integrations, learning curve -- we spent weeks testing both tools to help you decide which one fits your workflow.',
    date: 'Feb 15, 2026',
    time: '11 min',
    cat: 'Comparison',
    image: '/images/guides/blog-notion-clickup.webp',
    link: '/blog/notion-vs-clickup',
  },
  {
    slug: 'best-free-tools-startups',
    title: '25 Free SaaS Tools Every Startup Should Be Using in 2026',
    excerpt: 'From project management to design to analytics -- every tool on this list has a genuinely useful free tier. No credit card required.',
    date: 'Feb 14, 2026',
    time: '15 min',
    cat: 'Review',
    image: '/images/guides/blog-free-tools.webp',
    link: '/blog/best-free-tools-startups',
  },
  {
    slug: 'crm-buying-guide',
    title: 'The Complete CRM Buying Guide: How to Pick the Right One',
    excerpt: 'HubSpot, Salesforce, Pipedrive, or something else? We break down what actually matters when choosing a CRM for your team size and budget.',
    date: 'Feb 12, 2026',
    time: '16 min',
    cat: 'Guide',
    image: '/images/guides/blog-crm-guide.webp',
    link: '/blog/crm-buying-guide',
  },
  {
    slug: 'no-code-automation',
    title: 'No-Code Automation: Build Workflows Without Writing a Line of Code',
    excerpt: 'Zapier, Make, n8n -- we tested the top automation platforms and built real workflows to show you what\'s actually possible without developers.',
    date: 'Feb 10, 2026',
    time: '12 min',
    cat: 'Tutorial',
    image: '/images/guides/blog-no-code.webp',
    link: '/blog/no-code-automation',
  },
  {
    slug: 'design-tool-showdown',
    title: 'Figma vs Canva vs Adobe Express: Which Design Tool Wins in 2026?',
    excerpt: 'Three very different design tools for three different use cases. We tested all three on real projects to find the best fit for your needs.',
    date: 'Feb 8, 2026',
    time: '12 min',
    cat: 'Comparison',
    image: '/images/guides/blog-design-showdown.webp',
    link: '/blog/design-tool-showdown',
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="pt-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-black text-brand-ink tracking-tight">The Brief</h1>
        <p className="text-brand-slate mt-2">Software insights, honest reviews, and tool analysis</p>
      </div>

      {/* Featured Post */}
      <Link href={featured.link} className="block group mb-14">
        <div className="overflow-hidden rounded-lg">
          {featured.image && (
            <div className="relative h-64 sm:h-80 overflow-hidden bg-surface-muted rounded-lg">
              <SafeImage
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-display font-semibold text-white bg-brand-orange px-3 py-1 rounded-full">
                  {featured.cat}
                </span>
              </div>
            </div>
          )}
          <div className="py-6">
            <div className="flex items-center gap-3 text-xs text-gray-400 font-display mb-3">
              <span>{featured.date}</span>
              <span>&middot;</span>
              <span>{featured.time} read</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-ink group-hover:text-brand-purple transition-colors mb-3 leading-snug tracking-tight">
              {featured.title}
            </h2>
            <p className="text-brand-slate leading-relaxed">{featured.excerpt}</p>
          </div>
        </div>
      </Link>

      {/* Post Grid — 3 columns like Zapier */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map(p => (
          <Link key={p.slug} href={p.link} className="block group p-3 rounded-lg hover:bg-white transition-colors">
            {p.image && (
              <div className="relative h-40 overflow-hidden bg-surface-muted rounded-lg mb-4">
                <SafeImage
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-display font-semibold text-white bg-brand-orange px-2.5 py-0.5 rounded-full">
                    {p.cat}
                  </span>
                </div>
              </div>
            )}
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-display mb-2">
                <span>{p.date}</span>
                <span>&middot;</span>
                <span>{p.time}</span>
              </div>
              <h3 className="font-display font-bold text-brand-ink group-hover:text-brand-purple transition-colors mb-2 leading-snug text-sm">
                {p.title}
              </h3>
              <p className="text-xs text-brand-slate line-clamp-2">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA — Zapier-style horizontal bar */}
      <div className="mt-16 bg-brand-purple rounded-lg p-8 text-center text-white">
        <h3 className="font-display text-xl font-bold mb-2">Stay in the Loop</h3>
        <p className="text-white/70 text-sm mb-4">New reviews and tool picks delivered every Thursday.</p>
        <div className="text-sm text-brand-orange font-semibold">Coming soon</div>
        <p className="text-[11px] text-white/50 mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
