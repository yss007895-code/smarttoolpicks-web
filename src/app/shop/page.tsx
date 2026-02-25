import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { getAllProducts, shopCategories } from '@/lib/guides-data';
import ShopPageClient from './ShopPageClient';

export const metadata: Metadata = {
  title: 'Shop All Items — Curated SaaS Tool Picks',
  description: 'Browse all curated software tools from our guides. Filter by category to find the right SaaS products for your business.',
  keywords: ['shop saas tools', 'software deals', 'best saas 2026', 'productivity tools', 'business software picks'],
  alternates: { canonical: `${SITE_URL}/shop` },
  openGraph: {
    title: 'Shop All Items — Curated SaaS Tool Picks',
    description: 'Browse all curated software tools from our guides.',
    type: 'website',
    url: `${SITE_URL}/shop`,
    siteName: SITE_NAME,
    images: [{ url: '/images/guides/hero-tech-premium.webp', width: 1200, height: 630, alt: 'SmartToolPicks Shop' }],
  },
  twitter: { card: 'summary_large_image', site: '@SmartToolPicks' },
};

export default function ShopPage() {
  const allProducts = getAllProducts();

  return (
    <div className="pt-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="section-title">Shop All Items</h1>
        <p className="text-gray-400 mt-1 text-sm">
          {allProducts.length} curated items from our style guides
        </p>
      </div>
      <ShopPageClient products={allProducts} categories={shopCategories} />
    </div>
  );
}
