import { getFeaturedProducts } from '@/lib/guides-data';
import SafeImage from './SafeImage';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          className={star <= Math.round(rating) ? 'text-rating' : 'text-gray-300'}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function TrendingProducts() {
  const products = getFeaturedProducts(6);

  // Generate consistent rating from name
  const getRating = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash) + name.charCodeAt(i);
      hash |= 0;
    }
    return 3.5 + (Math.abs(hash) % 15) / 10;
  };

  // Generate a category tag from brand
  const getCategory = (brand: string) => {
    const b = brand.toLowerCase();
    if (b.includes('ai') || b.includes('writing') || b.includes('jasper') || b.includes('grammarly')) return 'AI Writing';
    if (b.includes('crm') || b.includes('hubspot') || b.includes('salesforce')) return 'CRM';
    if (b.includes('design') || b.includes('figma') || b.includes('canva')) return 'Design';
    if (b.includes('dev') || b.includes('git') || b.includes('code')) return 'Dev Tools';
    return 'Productivity';
  };

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">Today&apos;s Picks</h2>
        <a href="/shop" className="text-sm text-brand-orange hover:text-brand-purple font-display font-semibold transition-colors">
          View all &rarr;
        </a>
      </div>
      {/* Vertical list */}
      <div className="flex flex-col gap-3">
        {products.map((p, i) => {
          const rating = getRating(p.name);
          const category = getCategory(p.brand);
          return (
            <a
              key={`${p.name}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center gap-4 sm:gap-5 p-4 bg-white border border-surface-border rounded-lg hover:border-brand-purple/20 hover:shadow-md transition-all group"
            >
              {/* Tool icon / image */}
              {p.image ? (
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-surface-muted rounded-lg overflow-hidden">
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-surface-muted rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h6"/></svg>
                </div>
              )}

              {/* Name + description + category */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display font-bold text-brand-ink group-hover:text-brand-purple transition-colors text-sm sm:text-base leading-snug line-clamp-1">
                    {p.name}
                  </h3>
                  <span className="shrink-0 text-[10px] font-medium text-brand-purple bg-brand-purple-light px-2 py-0.5 rounded-full">
                    {category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 line-clamp-1">{p.brand}</p>
              </div>

              {/* Price */}
              <div className="shrink-0 text-right hidden sm:block">
                <span className="font-mono font-bold text-sm text-brand-ink">{p.price}</span>
              </div>

              {/* Rating stars */}
              <div className="shrink-0">
                <StarRating rating={rating} />
                <p className="text-[10px] text-gray-400 font-mono mt-0.5 text-right">{rating.toFixed(1)}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
