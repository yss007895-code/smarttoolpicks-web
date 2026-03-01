import SafeImage from '@/components/SafeImage';
import type { AffiliateProduct } from '@/lib/guides-data';

interface ProductCardProps {
  product: AffiliateProduct & { fromGuide?: string; fromGuideSlug?: string };
  size?: 'sm' | 'md' | 'lg';
  showFrom?: boolean;
}

export default function ProductCard({ product, size = 'md', showFrom = false }: ProductCardProps) {
  const p = product;
  const imageHeight = size === 'sm' ? 'h-28' : size === 'lg' ? 'h-48' : 'h-36';

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="product-card group block"
    >
      {p.image ? (
        <div className={`relative ${imageHeight} overflow-hidden bg-surface-muted`}>
          <SafeImage
            src={p.image}
            alt={p.name}
            fill
            sizes={size === 'lg' ? '(max-width: 640px) 50vw, 33vw' : '(max-width: 640px) 50vw, 25vw'}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="product-card-action absolute inset-0 bg-brand-purple/30 flex items-center justify-center opacity-0 transition-opacity duration-300">
            <span className="text-white text-sm font-semibold px-5 py-2 bg-brand-orange rounded-full">
              View Deal
            </span>
          </div>
        </div>
      ) : (
        <div className={`${imageHeight} bg-surface-muted flex items-center justify-center`}>
          <span className="text-gray-400 text-sm">No image</span>
        </div>
      )}
      <div className="p-4">
        <p className="text-[11px] text-gray-400 uppercase tracking-wide font-display">{p.brand}</p>
        <h4 className="font-medium text-sm text-brand-ink group-hover:text-brand-purple transition-colors leading-tight mt-0.5 line-clamp-2">
          {p.name}
        </h4>
        <div className="flex items-center gap-2 mt-2">
          <span className="price-current text-sm">{p.price}</span>
        </div>
        {showFrom && p.fromGuide && (
          <p className="text-[11px] text-gray-400 mt-1.5 line-clamp-1">
            As seen in: {p.fromGuide}
          </p>
        )}
      </div>
    </a>
  );
}
