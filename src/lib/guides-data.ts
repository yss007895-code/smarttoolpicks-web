export interface StyleGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  tag: string;
  emoji: string;
  image?: string;
  affiliateProducts?: AffiliateProduct[];
}

export interface AffiliateProduct {
  name: string;
  brand: string;
  price: string;
  url: string;
  tag?: string;
  image?: string;
}

export const categories = [
  { slug: 'all', name: 'All', icon: '?? },
  { slug: 'productivity', name: 'Productivity', icon: '?? },
  { slug: 'ai-tools', name: 'AI Tools', icon: '?쨼' },
  { slug: 'marketing', name: 'Marketing', icon: '?뱢' },
  { slug: 'development', name: 'Development', icon: '?뮲' },
  { slug: 'hardware', name: 'Hardware & Gear', icon: '?⑨툘' },
];

export const guides: StyleGuide[] = [  {
    slug: 'best-ai-writing-assistants-2026',
    title: 'The 4 Best AI Writing Assistants of 2026 (We Tested 15+ Tools)',
    category: 'ai-tools',
    description: 'Tired of writer\'s block? We rigorously tested the top AI writing assistants for 2026. Find the perfect tool to boost your content quality and speed.',
    readTime: '15 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?쨼',
    image: '/images/guides/best-ai-writing-assistants-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Jasper AI Suite', brand: 'Jasper', price: '$99/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-ai-writing-assistants-2026-prod0.jpg' },
      { name: 'Writesonic 7.0', brand: 'Writesonic', price: '$79/mo', url: 'https://amzn.to/example', tag: 'Best for SEO & Long-Form', image: '/images/guides/best-ai-writing-assistants-2026-prod1.jpg' },
      { name: 'Copy.ai for Teams', brand: 'Copy.ai', price: '$125/mo', url: 'https://amzn.to/example', tag: 'Best for Marketing Teams', image: '/images/guides/best-ai-writing-assistants-2026-prod2.jpg' },
      { name: 'Rytr Fusion', brand: 'Rytr', price: '$29/mo', url: 'https://amzn.to/example', tag: 'Best Value', image: '/images/guides/best-ai-writing-assistants-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-project-management-tools-2026',
    title: 'The 4 Best Project Management Tools of 2026 (We Tested 20+)',
    category: 'productivity',
    description: 'Stop missing deadlines. We rigorously tested the top PM tools to find the absolute best for boosting team efficiency. See our top 4 picks for 2026.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?뱢',
    image: '/images/guides/best-project-management-tools-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Monday.com', brand: 'Monday.com', price: '$12/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-project-management-tools-2026-prod0.jpg' },
      { name: 'ClickUp', brand: 'ClickUp', price: '$7/mo', url: 'https://amzn.to/example', tag: 'Most Customizable', image: '/images/guides/best-project-management-tools-2026-prod1.jpg' },
      { name: 'Asana', brand: 'Asana', price: '$10.99/mo', url: 'https://amzn.to/example', tag: 'Best for Team Collaboration', image: '/images/guides/best-project-management-tools-2026-prod2.jpg' },
      { name: 'Trello', brand: 'Atlassian', price: '$5/mo', url: 'https://amzn.to/example', tag: 'Best for Simplicity', image: '/images/guides/best-project-management-tools-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-crm-software-small-business-2026',
    title: 'The 4 Best CRM Software for Small Business in 2026 (Reviewed & Tested)',
    category: 'productivity',
    description: 'Struggling with messy spreadsheets? We tested the top CRMs to help you manage leads, close deals, and grow your small business. Find your perfect fit now.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?뮲',
    image: '/images/guides/best-crm-software-small-business-2026-hero.jpg',
    affiliateProducts: [
      { name: 'HubSpot CRM', brand: 'HubSpot', price: '$0/mo+', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-crm-software-small-business-2026-prod0.jpg' },
      { name: 'Zoho CRM', brand: 'Zoho', price: '$14/mo', url: 'https://amzn.to/example', tag: 'Best Value', image: '/images/guides/best-crm-software-small-business-2026-prod1.jpg' },
      { name: 'Freshsales', brand: 'Freshworks', price: '$15/mo', url: 'https://amzn.to/example', tag: 'Best for Sales Automation', image: '/images/guides/best-crm-software-small-business-2026-prod2.jpg' },
      { name: 'Pipedrive', brand: 'Pipedrive', price: '$14.90/mo', url: 'https://amzn.to/example', tag: 'Best for Pipeline Management', image: '/images/guides/best-crm-software-small-business-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'ultimate-wfh-desk-setup-guide-2026',
    title: 'The Ultimate WFH Desk Setup 2026: 4 Essential Tools for Peak Productivity',
    category: 'productivity',
    description: 'Tired of a cluttered WFH space? Discover the 4 essential tools to build your ultimate WFH desk setup for maximum focus and productivity. Get started now!',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?뮲',
    image: '/images/guides/ultimate-wfh-desk-setup-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Fully Jarvis Bamboo Standing Desk', brand: 'Fully', price: '$599', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/ultimate-wfh-desk-setup-guide-2026-prod0.jpg' },
      { name: 'Herman Miller Aeron Chair', brand: 'Herman Miller', price: '$1,805', url: 'https://amzn.to/example', tag: 'Best for Ergonomics', image: '/images/guides/ultimate-wfh-desk-setup-guide-2026-prod1.jpg' },
      { name: 'Dell UltraSharp U2723QE Monitor', brand: 'Dell', price: '$625', url: 'https://amzn.to/example', tag: 'Best for Visuals', image: '/images/guides/ultimate-wfh-desk-setup-guide-2026-prod2.jpg' },
      { name: 'Shure MV7 Podcast Microphone', brand: 'Shure', price: '$249', url: 'https://amzn.to/example', tag: 'Best for Communication', image: '/images/guides/ultimate-wfh-desk-setup-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-email-marketing-platforms-2026',
    title: 'The 4 Best Email Marketing Platforms of 2026 (Tested & Reviewed for ROI)',
    category: 'marketing',
    description: 'Tired of low open rates? We tested the top email marketing software for automation, deliverability, and ROI. Find your perfect platform today.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?뮲',
    image: '/images/guides/best-email-marketing-platforms-2026-hero.jpg',
    affiliateProducts: [
      { name: 'ActiveCampaign', brand: 'ActiveCampaign', price: '$29/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-email-marketing-platforms-2026-prod0.jpg' },
      { name: 'ConvertKit', brand: 'ConvertKit', price: '$9/mo', url: 'https://amzn.to/example', tag: 'Best for Creators', image: '/images/guides/best-email-marketing-platforms-2026-prod1.jpg' },
      { name: 'Klaviyo', brand: 'Klaviyo', price: '$35/mo', url: 'https://amzn.to/example', tag: 'Best for E-commerce', image: '/images/guides/best-email-marketing-platforms-2026-prod2.jpg' },
      { name: 'Brevo (formerly Sendinblue)', brand: 'Brevo', price: '$0/mo (Free Plan)', url: 'https://amzn.to/example', tag: 'Best Free Plan', image: '/images/guides/best-email-marketing-platforms-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-video-editing-software-2026',
    title: 'The 4 Best Video Editing Software of 2026 (For Pros & Beginners)',
    category: 'productivity',
    description: 'Cut through the noise. We tested the top video editors to find the best for pro-level features, ease of use, and budget. Find your perfect match today.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?뮲',
    image: '/images/guides/best-video-editing-software-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Adobe Premiere Pro', brand: 'Adobe', price: '$22.99/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-video-editing-software-2026-prod0.jpg' },
      { name: 'Final Cut Pro', brand: 'Apple', price: '$299.99', url: 'https://amzn.to/example', tag: 'Best for Mac', image: '/images/guides/best-video-editing-software-2026-prod1.jpg' },
      { name: 'DaVinci Resolve', brand: 'Blackmagic Design', price: 'Free / $295', url: 'https://amzn.to/example', tag: 'Best Free Option', image: '/images/guides/best-video-editing-software-2026-prod2.jpg' },
      { name: 'Descript', brand: 'Descript', price: '$15/mo', url: 'https://amzn.to/example', tag: 'Best for Creators', image: '/images/guides/best-video-editing-software-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-mechanical-keyboards-coders-2026',
    title: 'The 4 Best Mechanical Keyboards for Coders in 2026 (Boost Your Productivity)',
    category: 'hardware',
    description: 'Tired of mushy keys? We tested the top mechanical keyboards for coders to find the fastest, most ergonomic, and satisfying options. Level up your code.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?뮲',
    image: '/images/guides/best-mechanical-keyboards-coders-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Keychron Q1 Pro', brand: 'Keychron', price: '$199', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-mechanical-keyboards-coders-2026-prod0.jpg' },
      { name: 'ZSA Moonlander Mark I', brand: 'ZSA', price: '$365', url: 'https://amzn.to/example', tag: 'Best Ergonomic', image: '/images/guides/best-mechanical-keyboards-coders-2026-prod1.jpg' },
      { name: 'HHKB Professional Hybrid Type-S', brand: 'HHKB', price: '$322', url: 'https://amzn.to/example', tag: 'Best Compact', image: '/images/guides/best-mechanical-keyboards-coders-2026-prod2.jpg' },
      { name: 'Royal Kludge RK61', brand: 'Royal Kludge', price: '$50', url: 'https://amzn.to/example', tag: 'Best Budget', image: '/images/guides/best-mechanical-keyboards-coders-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-cloud-storage-solutions-2026',
    title: 'Best Cloud Storage of 2026: Secure, Fast & Affordable Picks',
    category: 'productivity',
    description: 'Tired of \'storage full\' alerts? We tested the top cloud storage for security, speed, and value. Find your perfect fit and declutter your digital life.',
    readTime: '14 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?곻툘',
    image: '/images/guides/best-cloud-storage-solutions-2026-hero.jpg',
    affiliateProducts: [
      { name: 'pCloud', brand: 'pCloud', price: '$49.99/yr', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-cloud-storage-solutions-2026-prod0.jpg' },
      { name: 'Sync.com', brand: 'Sync.com', price: '$8/mo', url: 'https://amzn.to/example', tag: 'Best for Security', image: '/images/guides/best-cloud-storage-solutions-2026-prod1.jpg' },
      { name: 'Google Drive', brand: 'Google', price: '$9.99/mo', url: 'https://amzn.to/example', tag: 'Best for Collaboration', image: '/images/guides/best-cloud-storage-solutions-2026-prod2.jpg' },
      { name: 'Microsoft OneDrive', brand: 'Microsoft', price: '$6.99/mo', url: 'https://amzn.to/example', tag: 'Best for Windows/Office Users', image: '/images/guides/best-cloud-storage-solutions-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'best-note-taking-apps-productivity-2026',
    title: 'The 4 Best Note-Taking Apps for Unlocking Peak Productivity (2026 Guide)',
    category: 'productivity',
    description: 'Tired of scattered notes? We tested the top note-taking apps for organization, collaboration, and focus. Boost your productivity today!',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '?뱷',
    image: '/images/guides/best-note-taking-apps-productivity-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Evernote', brand: 'Evernote', price: '$14.99/mo', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/best-note-taking-apps-productivity-2026-prod0.jpg' },
      { name: 'Notion', brand: 'Notion', price: '$10/mo', url: 'https://amzn.to/example', tag: 'Best for Teams', image: '/images/guides/best-note-taking-apps-productivity-2026-prod1.jpg' },
      { name: 'Obsidian', brand: 'Obsidian', price: '$8/mo', url: 'https://amzn.to/example', tag: 'Best for Power Users', image: '/images/guides/best-note-taking-apps-productivity-2026-prod2.jpg' },
      { name: 'Microsoft OneNote', brand: 'Microsoft', price: '$0/mo', url: 'https://amzn.to/example', tag: 'Best Free Option', image: '/images/guides/best-note-taking-apps-productivity-2026-prod3.jpg' },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  if (category === 'all') return guides;
  return guides.filter(g => g.category === category);
}

export function getAllProducts(): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] = [];
  for (const guide of guides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug, category: guide.category });
    }
  }
  return products;
}

export function getFeaturedProducts(count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const all = getAllProducts();
  const priorityTags = ['Editor Pick', 'Best Overall', 'Best Value', 'Best Seller', 'Trend Pick', 'Must Have', '#1 Must Have', 'Top Pick'];
  const featured = all.filter(p => p.tag && priorityTags.includes(p.tag));
  const rest = all.filter(p => !p.tag || !priorityTags.includes(p.tag));
  return [...featured, ...rest].slice(0, count);
}

export function getProductsByCategory(category: string, count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] = [];
  const categoryGuides = category === 'all' ? guides : guides.filter(g => g.category === category);
  for (const guide of categoryGuides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug, category: guide.category });
    }
  }
  return products.slice(0, count);
}

export const shopCategories = [
  { slug: 'all', name: 'All' },
  { slug: 'productivity', name: 'Productivity' },
  { slug: 'ai-tools', name: 'AI Tools' },
  { slug: 'marketing', name: 'Marketing' },
  { slug: 'development', name: 'Development' },
  { slug: 'hardware', name: 'Hardware & Gear' },
];
