import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | SmartToolPicks',
  description: 'SmartToolPicks affiliate disclosure — how we earn commissions and how it affects our reviews.',
  alternates: { canonical: `${SITE_URL}/affiliate-disclosure` },
  robots: { index: false, follow: true },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-400">Last updated: February 26, 2026</p>
      </header>

      <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>{SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) participates in affiliate marketing programs, which means we may earn a commission when you click on certain links and make a purchase — at no additional cost to you.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How Affiliate Links Work</h2>
        <p>When you click an affiliate link on {SITE_NAME} and complete a purchase, we may receive a small percentage of that sale as a commission. This compensation helps us maintain the site, produce independent reviews, and keep our content free for readers.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Programs We Participate In</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Amazon Associates:</strong> We earn from qualifying purchases made through Amazon affiliate links.</li>
          <li><strong>SaaS affiliate programs:</strong> We partner directly with software companies including but not limited to project management, CRM, email marketing, and AI tool providers.</li>
          <li><strong>Skimlinks:</strong> An affiliate network that automatically converts certain links to affiliate links.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How This Affects Our Reviews</h2>
        <p>Our editorial team reviews tools independently based on features, pricing, user experience, and value. We do not accept payment to write positive reviews. Affiliate relationships do not influence our ratings, recommendations, or editorial conclusions. We disclose affiliate relationships whenever they exist.</p>
        <p>If a tool we review does not have an affiliate program, we still include it if it is genuinely the best option for the use case. Our goal is to give you accurate, useful recommendations regardless of monetization.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">FTC Compliance</h2>
        <p>In accordance with the Federal Trade Commission&apos;s guidelines, we clearly disclose affiliate relationships. You will see affiliate disclosure notices at the top of articles that contain affiliate links. This disclosure satisfies the FTC&apos;s requirements under 16 CFR Part 255.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Pricing Accuracy</h2>
        <p>Software pricing changes frequently. We do our best to keep prices accurate, but we recommend verifying pricing on the vendor&apos;s website before purchasing. Prices shown are based on information available at the time of writing.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact</h2>
        <p>Questions about our affiliate relationships: <a href="mailto:contact@smarttoolpicks.net" className="text-indigo-600 hover:underline">contact@smarttoolpicks.net</a></p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Affiliate Disclosure', item: `${SITE_URL}/affiliate-disclosure` },
            ],
          }),
        }}
      />
    </div>
  );
}
