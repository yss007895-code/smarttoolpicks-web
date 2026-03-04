import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About SmartToolPicks',
  description: 'Learn about SmartToolPicks -- an independent SaaS review platform that helps businesses find the right software tools through expert, unbiased reviews.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About SmartToolPicks',
    description: 'An independent SaaS review platform helping businesses find the right software tools.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-3xl mx-auto py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 font-display mb-8">
          <Link href="/" className="hover:text-brand-purple transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-slate">About</span>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-ink tracking-tight leading-[1.1] mb-6">
          About SmartToolPicks
        </h1>

        <div className="prose-style">
          <p>
            SmartToolPicks is an independent review platform dedicated to helping businesses, teams, and professionals find the right software tools. We believe that the best tool is the one that fits your specific workflow, budget, and team size -- not the one with the biggest marketing budget.
          </p>

          <h2>Our Mission</h2>
          <p>
            The SaaS market is overwhelming. There are thousands of tools for project management, CRM, design, writing, development, and more -- each claiming to be the best. Our mission is to cut through the noise with rigorous, hands-on testing and clear, honest recommendations.
          </p>
          <p>
            Every review on SmartToolPicks is based on actual use. We sign up for real accounts, run real projects, and evaluate each tool over weeks (not hours) before publishing our findings. We test across different team sizes, use cases, and budgets to provide recommendations that apply to real-world scenarios.
          </p>

          <h2>How We Test</h2>
          <p>
            Our review methodology is straightforward and transparent:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>We sign up for each tool using standard plans (not press accounts or free review copies)</li>
            <li>We use each tool for a minimum of two weeks on real projects</li>
            <li>We evaluate on features, ease of use, pricing fairness, reliability, and customer support</li>
            <li>We compare tools head-to-head in the same category using identical criteria</li>
            <li>We update reviews when tools ship significant updates</li>
          </ul>

          <h2>Editorial Independence</h2>
          <p>
            Some links on SmartToolPicks are affiliate links. This means we may earn a small commission if you purchase through our links, at no additional cost to you. However, our affiliate relationships never influence our rankings, ratings, or recommendations. Every product rating is determined solely by our testing team based on merit.
          </p>
          <p>
            We frequently recommend free tools and open-source alternatives where they genuinely outperform paid options. If a tool does not meet our standards, we say so -- regardless of any affiliate relationship.
          </p>

          <h2>Our Team</h2>
          <p>
            SmartToolPicks is built by a team of software professionals, content strategists, and technology enthusiasts who have collectively spent decades evaluating and using business software. Our reviewers include former product managers, software engineers, and marketing professionals who bring deep domain expertise to every review.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have a question, suggestion, or want to submit a tool for review? We would love to hear from you.
          </p>
          <p>
            <a href="mailto:contact@smarttoolpicks.net" className="text-brand-purple hover:text-brand-purple-dark font-semibold">
              contact@smarttoolpicks.net
            </a>
          </p>
          <p>
            Follow us on{' '}
            <a href="https://twitter.com/SmartToolPicks" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-brand-purple-dark font-semibold">
              Twitter / X
            </a>{' '}
            for the latest reviews and tool recommendations.
          </p>
        </div>
      </div>
    </>
  );
}
