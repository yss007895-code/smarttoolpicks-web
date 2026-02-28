import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import type { StyleGuide } from '@/lib/guides-data';

export default function GuideCard({ guide }: { guide: StyleGuide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="card-hover block group overflow-hidden">
      {guide.image && (
        <div className="relative h-44 overflow-hidden bg-surface">
          <SafeImage
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-display font-semibold text-accent bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {guide.tag}
            </span>
          </div>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display font-bold text-[#1F2937] group-hover:text-accent transition-colors mb-2 leading-snug">
          {guide.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{guide.description}</p>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="font-mono">{guide.readTime}</span>
          {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
            <>
              <span className="text-border">·</span>
              <span>{guide.affiliateProducts.length} tools compared</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
