import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import type { StyleGuide } from '@/lib/guides-data';

export default function GuideCard({ guide }: { guide: StyleGuide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="card-hover block group overflow-hidden">
      {guide.image && (
        <div className="relative h-48 overflow-hidden bg-surface">
          <SafeImage
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="text-xs font-display font-bold text-brand-purple bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
              {guide.tag}
            </span>
          </div>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display font-bold text-brand-ink group-hover:text-brand-purple transition-colors mb-2 leading-snug">
          {guide.title}
        </h3>
        <p className="text-sm text-brand-slate line-clamp-2 mb-4">{guide.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-400 font-display">
            <span>{guide.readTime}</span>
            {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{guide.affiliateProducts.length} tools compared</span>
              </>
            )}
          </div>
          <span className="text-xs font-display font-semibold text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity">
            Read &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
