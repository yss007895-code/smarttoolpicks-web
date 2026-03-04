import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for SmartToolPicks. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: 'Privacy Policy | SmartToolPicks',
    description: 'Privacy policy for SmartToolPicks.',
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function PrivacyPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy` },
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
          <span className="text-brand-slate">Privacy Policy</span>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-ink tracking-tight leading-[1.1] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 font-display mb-10">Last updated: February 2026</p>

        <div className="prose-style">
          <p>
            SmartToolPicks (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at smarttoolpicks.net.
          </p>

          <h2>Information We Collect</h2>
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>IP address and approximate geographic location</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited, time spent, and referring URLs</li>
            <li>Device type (desktop, mobile, tablet)</li>
          </ul>

          <h3>Information You Provide</h3>
          <p>
            We may collect information you voluntarily provide, such as your email address when subscribing to our newsletter or contacting us.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Operate and improve our website</li>
            <li>Analyze usage trends and site performance</li>
            <li>Send newsletters and updates (only with your consent)</li>
            <li>Respond to inquiries and support requests</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Google Analytics</h2>
          <p>
            We use Google Analytics (GA4) to understand how visitors interact with our website. Google Analytics collects data such as pages visited, session duration, and traffic sources. This data is aggregated and anonymized. You can opt out of Google Analytics by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>

          <h2>Google AdSense</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our site or other websites. You can opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </p>

          <h2>Amazon Associates Program</h2>
          <p>
            SmartToolPicks is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click an Amazon affiliate link, Amazon may place cookies on your device to track referrals.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website uses cookies -- small text files stored on your device -- to enhance your browsing experience. These include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li><strong>Essential cookies:</strong> Required for basic site functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand site usage (Google Analytics)</li>
            <li><strong>Advertising cookies:</strong> Used by Google AdSense for ad personalization</li>
            <li><strong>Affiliate cookies:</strong> Track referrals for affiliate programs</li>
          </ul>
          <p>
            You can control cookie preferences through your browser settings. Disabling cookies may affect site functionality.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites, including affiliate partner sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not directed at individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, please contact us at the email address below.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
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
