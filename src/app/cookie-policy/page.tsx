import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Policy | SmartToolPicks',
  description: 'SmartToolPicks cookie policy — how we use cookies for analytics and advertising.',
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-400">Last updated: February 26, 2026</p>
      </header>

      <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>This Cookie Policy explains how {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies when you visit smarttoolpicks.net.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Are Cookies?</h2>
        <p>Cookies are small text files placed on your device when you visit a website. They help websites work efficiently and provide information to site owners about how visitors use the site. Cookies can be persistent (stored until they expire or you delete them) or session-based (deleted when you close your browser).</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How We Use Cookies</h2>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">1. Analytics Cookies</h3>
        <p>We use Google Analytics to understand how visitors interact with our website. These cookies collect aggregate, anonymous information — pages visited, session duration, referral sources, and general geographic location. No personally identifiable information is collected.</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2. Advertising Cookies</h3>
        <p>We use Google AdSense to display advertisements. AdSense cookies serve ads based on your prior visits to our site and other sites. You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" className="text-indigo-600 hover:underline" rel="noopener noreferrer" target="_blank">Google Ad Settings</a>.</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">3. Affiliate Tracking Cookies</h3>
        <p>When you click affiliate links on our site, affiliate networks may place cookies on your device to track conversions. These allow software vendors and networks to attribute purchases to our referral. Affiliate cookies typically expire after 30–90 days.</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4. Essential Cookies</h3>
        <p>Some cookies are strictly necessary for the website to function correctly, including session cookies that remember your preferences. These cannot be disabled without affecting site functionality.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Third-Party Cookies</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Google Analytics</strong> — website analytics</li>
          <li><strong>Google AdSense</strong> — display advertising</li>
          <li><strong>Amazon Associates</strong> — affiliate conversion tracking</li>
          <li><strong>Skimlinks</strong> — affiliate link management</li>
          <li><strong>SaaS affiliate networks</strong> — conversion tracking for software referrals</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Managing Cookies</h2>
        <p>You can control and manage cookies through your browser settings. Most browsers allow you to view, block, or delete cookies. Disabling cookies may affect your experience on SmartToolPicks and other websites.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Changes to This Policy</h2>
        <p>We may update this Cookie Policy periodically. Updates will be reflected by the &quot;Last updated&quot; date at the top of this page.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact Us</h2>
        <p>Questions about our use of cookies: <a href="mailto:contact@smarttoolpicks.net" className="text-indigo-600 hover:underline">contact@smarttoolpicks.net</a></p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: `${SITE_URL}/cookie-policy` },
            ],
          }),
        }}
      />
    </div>
  );
}
