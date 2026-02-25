import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About SmartToolPicks -- Our Mission & Team',
  description: 'SmartToolPicks provides expert saas & software tools guides, honest reviews, and practical advice. Learn about our mission and editorial standards.',
  keywords: ['about smarttoolpicks', 'saas review experts', 'software tool editorial team', 'independent software reviews', 'saas research team'],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About SmartToolPicks -- Our Mission & Team',
    description: 'SmartToolPicks provides expert SaaS and software tool guides, honest reviews, and practical advice.',
    type: 'website',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    images: [{ url: '/images/guides/hero-tech-premium.webp', width: 1200, height: 630, alt: 'SmartToolPicks - About Our Team' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

export default function AboutPage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-12">
        <p className="text-sm text-gray-400 font-mono uppercase tracking-wide mb-3">About Us</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Expert advice you can trust
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          We create practical, no-nonsense saas & software tools guides for people who want honest recommendations without the marketing hype.
        </p>
      </header>

      <div className="prose-style">
        <h2>Our Mission</h2>
        <p>
          SmartToolPicks was created to help you make smarter decisions in the saas & software tools space. We believe everyone deserves access to honest, well-researched advice -- not paid promotions disguised as reviews.
        </p>
        <p>
          Our team creates in-depth guides, detailed comparisons, and honest product reviews. Every recommendation is personally researched and vetted before we publish it.
        </p>

        <h2>What We Cover</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            { title: 'Project Management', desc: 'Expert guides and honest reviews' },
            { title: 'CRM & Sales', desc: 'Expert guides and honest reviews' },
            { title: 'Design Tools', desc: 'Expert guides and honest reviews' },
            { title: 'Marketing Tools', desc: 'Expert guides and honest reviews' },
            { title: 'AI & Automation', desc: 'Expert guides and honest reviews' },
            { title: 'Productivity', desc: 'Expert guides and honest reviews' }
          ].map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 bg-white">
              <h3 className="font-display font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>Editorial Standards</h2>
        <p>
          We only recommend products and services we genuinely believe in. Our editorial team researches each topic thoroughly, compares options across multiple factors, and verifies claims before anything makes it into a guide. We never let affiliate relationships influence our recommendations.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Some links on SmartToolPicks are affiliate links. This means we may earn a small commission if you purchase through our links, at no extra cost to you. This helps us keep creating free content for our readers.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Questions, feedback, or partnership inquiries? Reach us at{' '}
          <a href="mailto:contact@smarttoolpicks.net">contact@smarttoolpicks.net</a>.
        </p>
      </div>

      <div className="mt-12 border border-gray-100 rounded-xl p-6 bg-white text-center">
        <h3 className="font-display font-bold text-gray-900 mb-2">Start exploring</h3>
        <p className="text-sm text-gray-400 mb-4">Find your next great guide</p>
        <div className="flex justify-center gap-3">
          <Link href="/guides" className="btn-primary text-sm">Browse Guides</Link>
        </div>
      </div>
    </div>
  );
}
