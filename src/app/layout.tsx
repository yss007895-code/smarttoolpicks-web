import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import NewsletterPopup from '@/components/NewsletterPopup';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'SmartToolPicks - SaaS Reviews & Software Tool Guides', template: '%s | SmartToolPicks' },
  description: SITE_DESCRIPTION,
  keywords: ['best saas tools 2026', 'software reviews', 'productivity tools', 'project management software', 'crm comparison', 'ai tools', 'business software', 'saas comparison', 'no-code tools', 'automation software', 'design tools'],
  other: {
    'google-adsense-account': 'ca-pub-8049649445649586',
  },
  openGraph: {
    type: 'website', locale: 'en_US', url: SITE_URL, siteName: SITE_NAME,
    title: 'SmartToolPicks - SaaS Reviews & Software Tool Guides',
    description: 'Expert SaaS reviews, software comparisons, and productivity tool guides to help you pick the right tools for your business.',
    images: [{ url: '/images/guides/best-ai-writing-assistants-2026-hero.webp', width: 1200, height: 630, alt: 'SmartToolPicks - SaaS Reviews & Software Tool Guides' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks', creator: '@SmartToolPicks' },
  alternates: { canonical: SITE_URL },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GW91XZXRT9" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GW91XZXRT9');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen bg-surface text-brand-ink antialiased font-body">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: SITE_DESCRIPTION,
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_URL}/guides?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        )}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8049649445649586"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://s.skimresources.com/js/298887X1786506.skimlinks.js"
          strategy="afterInteractive"
        />
        <Header />
        <main id="main-content" className="max-w-7xl mx-auto px-6 pb-20">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <NewsletterPopup />
      </body>
    </html>
  );
}
