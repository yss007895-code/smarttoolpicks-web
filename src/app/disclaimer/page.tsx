import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Disclaimer & Affiliate Disclosure',
  description: 'Disclaimer and FTC affiliate disclosure for SmartToolPicks. Learn about our affiliate relationships and editorial policies.',
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  openGraph: {
    title: 'Disclaimer & Affiliate Disclosure | SmartToolPicks',
    description: 'Disclaimer and FTC affiliate disclosure for SmartToolPicks.',
    url: `${SITE_URL}/disclaimer`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function DisclaimerPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: `${SITE_URL}/disclaimer` },
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
          <span className="text-brand-slate">Disclaimer &amp; Disclosure</span>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-ink tracking-tight leading-[1.1] mb-4">
          Disclaimer &amp; Affiliate Disclosure
        </h1>
        <p className="text-sm text-gray-400 font-display mb-10">Last updated: February 2026</p>

        <div className="prose-style">
          {/* FTC Disclosure */}
          <div className="p-6 bg-brand-purple-light border border-brand-purple/20 rounded-xl mb-8">
            <h2 className="mt-0 text-brand-purple">FTC Affiliate Disclosure</h2>
            <p>
              In accordance with the Federal Trade Commission (FTC) guidelines, SmartToolPicks discloses that some of the links on this website are affiliate links. This means that if you click on a link and make a purchase, we may receive a small commission at no additional cost to you. This commission helps support the operation of this website and allows us to continue providing free, high-quality content.
            </p>
            <p className="mb-0">
              <strong>Our affiliate relationships never influence our reviews, ratings, or recommendations.</strong> Every product evaluation is conducted independently by our editorial team. We frequently recommend free and open-source alternatives when they are the best option for our readers.
            </p>
          </div>

          <h2>Amazon Associates Program</h2>
          <p>
            SmartToolPicks is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites. As an Amazon Associate, we earn from qualifying purchases.
          </p>
          <p>
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of the product.
          </p>

          <h2>Other Affiliate Programs</h2>
          <p>
            In addition to Amazon Associates, SmartToolPicks participates in various SaaS affiliate and referral programs. These may include, but are not limited to, programs offered by software companies whose products we review. Affiliate links are clearly identifiable and open in new tabs.
          </p>

          <h2>Editorial Independence</h2>
          <p>
            Our editorial process is separate from our business relationships. Here is how we maintain independence:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Reviews are written before any affiliate relationship is established</li>
            <li>Product ratings are based solely on our testing criteria and methodology</li>
            <li>We include negative findings in every review -- no product is perfect</li>
            <li>We regularly recommend free alternatives over paid products when appropriate</li>
            <li>Sponsored content, if any, is clearly labeled as such</li>
          </ul>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The information provided on SmartToolPicks is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
          <p>
            Product features, pricing, and availability are subject to change without notice. We make every effort to keep our reviews up to date, but we recommend verifying current information directly with the product vendor before making a purchase decision.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The content on SmartToolPicks does not constitute professional advice (financial, legal, technical, or otherwise). You should consult with appropriate professionals before making business decisions based on the information provided on this website.
          </p>

          <h2>External Links</h2>
          <p>
            SmartToolPicks may contain links to external websites that are not operated by us. We have no control over the content, privacy policies, or practices of third-party sites and assume no responsibility for them. The inclusion of any link does not imply endorsement beyond the specific products we review.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall SmartToolPicks be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or any products or services reviewed herein. Your use of this website and reliance on any information provided is solely at your own risk.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this disclaimer or our affiliate relationships, please contact us at:
          </p>
          <p>
            <a href="mailto:contact@smarttoolpicks.net" className="text-brand-purple hover:text-brand-purple-dark font-semibold">
              contact@smarttoolpicks.net
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
